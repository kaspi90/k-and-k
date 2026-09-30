#!/usr/bin/env python3
"""Generate four public CV PDFs from the website's current profile data."""

from __future__ import annotations

import json
import subprocess
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.graphics.shapes import Circle, Drawing
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import BaseDocTemplate, Frame, HRFlowable, KeepInFrame, PageTemplate, Paragraph, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "cv"
LOGO = ROOT / "src" / "img" / "brand" / "kk-mark@3x.png"
PORTRAITS = ROOT / "src" / "img" / "portraits"
PAGE_W, PAGE_H = A4

INK = colors.HexColor("#17151E")
VIOLET = colors.HexColor("#8752D6")
BLUE = colors.HexColor("#527EE8")
MUTED = colors.HexColor("#5F5A67")
LINE = colors.HexColor("#D8D2DC")
SIDEBAR_TEXT = colors.HexColor("#E8E3EC")
PAPER = colors.HexColor("#FCFBFD")
CARD = colors.HexColor("#F4F1F7")


@dataclass(frozen=True)
class CVSpec:
    person: str
    lang: str
    filename: str
    portrait: str


SPECS = (
    CVSpec("heike", "de", "heike-kasper-cv-de.pdf", "heike-light-800.webp"),
    CVSpec("heike", "en", "heike-kasper-cv-en.pdf", "heike-light-800.webp"),
    CVSpec("erik", "de", "erik-kasper-cv-de.pdf", "erik-light-800.webp"),
    CVSpec("erik", "en", "erik-kasper-cv-en.pdf", "erik-light-800.webp"),
)


def website_data() -> tuple[dict, dict]:
    """Read names/links from site.json and all CV content from profiles.ts."""
    site = json.loads((ROOT / "src/config/site.json").read_text(encoding="utf-8"))
    result = subprocess.run(
        ["node", str(ROOT / "scripts/export-profile-data.js")],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    return site, json.loads(result.stdout)


def clean(value: str) -> str:
    """Keep generated PDFs typographically portable and free of Unicode dashes."""
    return value.replace("·", "|").replace("–", "-").replace("—", "-").replace("‑", "-")


def register_fonts() -> None:
    pdfmetrics.registerFont(TTFont("Arial", "/System/Library/Fonts/Supplemental/Arial.ttf"))
    pdfmetrics.registerFont(TTFont("Arial-Bold", "/System/Library/Fonts/Supplemental/Arial Bold.ttf"))


def styles(accent) -> dict[str, ParagraphStyle]:
    return {
        "name": ParagraphStyle("name", fontName="Arial-Bold", fontSize=31, leading=32, textColor=INK, spaceAfter=5),
        "role": ParagraphStyle("role", fontName="Arial-Bold", fontSize=10.2, leading=13, textColor=accent, spaceAfter=10),
        "summary": ParagraphStyle("summary", fontName="Arial", fontSize=9.1, leading=13.1, textColor=INK),
        "summary_label": ParagraphStyle("summary_label", fontName="Arial-Bold", fontSize=7.2, leading=8.5, textColor=accent, spaceAfter=4),
        "section": ParagraphStyle("section", fontName="Arial-Bold", fontSize=8.2, leading=10, textColor=colors.HexColor("#C89BFF"), spaceBefore=6, spaceAfter=5),
        "section_main": ParagraphStyle("section_main", fontName="Arial-Bold", fontSize=8.4, leading=10, textColor=accent, spaceBefore=7, spaceAfter=6),
        "body": ParagraphStyle("body", fontName="Arial", fontSize=8.15, leading=11.15, textColor=INK),
        "sidebar": ParagraphStyle("sidebar", fontName="Arial", fontSize=7.65, leading=10.2, textColor=SIDEBAR_TEXT),
        "entry_title": ParagraphStyle("entry_title", fontName="Arial-Bold", fontSize=8.85, leading=11, textColor=INK),
        "entry_meta": ParagraphStyle("entry_meta", fontName="Arial", fontSize=7.7, leading=9.7, textColor=accent),
        "period": ParagraphStyle("period", fontName="Arial-Bold", fontSize=7.4, leading=9.2, textColor=MUTED, alignment=TA_RIGHT),
    }


def bullets(items: Iterable[str], style: ParagraphStyle) -> list:
    flowables = []
    for item in items:
        dot = Drawing(4, 4)
        dot.add(Circle(2, 2, 1.35, fillColor=colors.HexColor("#C89BFF"), strokeColor=None))
        row = Table([[dot, Paragraph(clean(item), style)]], colWidths=[3.5 * mm, 43.5 * mm], hAlign="LEFT")
        row.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ]))
        flowables.extend((row, Spacer(1, 2)))
    return flowables


def entry_block(entry: dict, s: dict[str, ParagraphStyle], accent, kicker: str | None = None) -> Table:
    detail = []
    if kicker:
        detail.extend((Paragraph(kicker, s["summary_label"]), Spacer(1, 1)))
    detail.extend([
        Paragraph(clean(entry["title"]), s["entry_title"]),
        Paragraph(clean(entry["org"]), s["entry_meta"]),
        Spacer(1, 2),
        Paragraph(clean(entry["text"]), s["body"]),
    ])
    table = Table([[Paragraph(clean(entry["period"]), s["period"]), detail]], colWidths=[24 * mm, 89 * mm], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (0, 0), 5 * mm),
        ("RIGHTPADDING", (1, 0), (1, 0), 0),
        ("LEFTPADDING", (1, 0), (1, 0), 3.5 * mm),
        ("LINEBEFORE", (1, 0), (1, 0), 1.2, accent),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return table


def compact_education_block(entry: dict, s: dict[str, ParagraphStyle], accent) -> Table:
    detail = [
        Paragraph(clean(entry["title"]), s["entry_title"]),
        Paragraph(clean(entry["org"]), s["entry_meta"]),
    ]
    if entry.get("cvHighlight"):
        detail.extend((Spacer(1, 2), Paragraph(clean(entry["text"]), s["body"])))
    table = Table([[Paragraph(clean(entry["period"]), s["period"]), detail]], colWidths=[24 * mm, 89 * mm], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (0, 0), 5 * mm),
        ("LEFTPADDING", (1, 0), (1, 0), 3.5 * mm),
        ("RIGHTPADDING", (1, 0), (1, 0), 0),
        ("LINEBEFORE", (1, 0), (1, 0), 1.2, accent),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    return table


def sidebar_flowables(spec: CVSpec, person: dict, profile: dict, s: dict[str, ParagraphStyle]) -> list:
    links = [f"<a href='{person['linkedin']}' color='#E8E3EC'>LinkedIn</a>"]
    if person.get("github"):
        links.append(f"<a href='{person['github']}' color='#E8E3EC'>GitHub</a>")
    if person.get("instagram"):
        handle = person["instagram"].rstrip("/").rsplit("/", 1)[-1]
        links.append(f"<a href='{person['instagram']}' color='#E8E3EC'>Instagram @{handle}</a>")
    items = [
        Paragraph("CONTACT" if spec.lang == "en" else "KONTAKT", s["section"]),
        Paragraph(f"<a href='mailto:{person['email']}' color='#E8E3EC'>{person['email']}</a><br/><a href='https://www.k-and-k.codes' color='#E8E3EC'>www.k-and-k.codes</a>", s["sidebar"]),
        Spacer(1, 3),
        Paragraph("  |  ".join(links), s["sidebar"]),
        Spacer(1, 5),
        Paragraph("FOCUS" if spec.lang == "en" else "SCHWERPUNKTE", s["section"]),
        *bullets(profile["focus"], s["sidebar"]),
        Spacer(1, 2),
        Paragraph("TECHNOLOGIES" if spec.lang == "en" else "TECHNOLOGIEN", s["section"]),
    ]
    technology_groups = profile.get("technologyGroups")
    if technology_groups:
        for group in technology_groups:
            items.extend((
                Paragraph(f"<font color='#C89BFF'><b>{clean(group['label']).upper()}</b></font><br/>{'  |  '.join(map(clean, group['items']))}", s["sidebar"]),
                Spacer(1, 3),
            ))
    else:
        items.append(Paragraph("  |  ".join(map(clean, profile["technologies"])), s["sidebar"]))
    interests = profile.get("interests", ())
    if interests:
        items.extend((
            Spacer(1, 2),
            Paragraph("INTERESTS" if spec.lang == "en" else "INTERESSEN", s["section"]),
            Paragraph("  |  ".join(map(clean, interests)), s["sidebar"]),
        ))
    return items


def page_background(canvas, doc, spec: CVSpec, person: dict, profile: dict, s: dict[str, ParagraphStyle], accent) -> None:
    canvas.saveState()
    canvas.setFillColor(PAPER)
    canvas.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    canvas.setFillColor(INK)
    canvas.rect(0, 0, 67 * mm, PAGE_H, stroke=0, fill=1)
    canvas.setFillColor(accent)
    canvas.circle(34 * mm, PAGE_H - 66 * mm, 30 * mm, stroke=0, fill=1)
    canvas.setFillColor(colors.HexColor("#BDA3EA") if spec.person == "heike" else colors.HexColor("#93B1F4"))
    canvas.circle(34 * mm, PAGE_H - 66 * mm, 27.8 * mm, stroke=0, fill=1)
    canvas.setFillColor(colors.HexColor("#2D2840"))
    canvas.circle(26 * mm, PAGE_H - 58 * mm, 17 * mm, stroke=0, fill=1)
    canvas.drawImage(str(LOGO), 10 * mm, PAGE_H - 16 * mm, width=15 * mm, height=8.8 * mm, preserveAspectRatio=True, mask="auto")
    portrait_x = 7 * mm
    portrait_y = PAGE_H - 98 * mm
    portrait_size = 54 * mm
    canvas.saveState()
    portrait_clip = canvas.beginPath()
    portrait_clip.circle(34 * mm, PAGE_H - 66 * mm, 27.8 * mm)
    canvas.clipPath(portrait_clip, stroke=0, fill=0)
    canvas.drawImage(
        str(PORTRAITS / spec.portrait),
        portrait_x,
        portrait_y,
        width=portrait_size,
        height=portrait_size,
        preserveAspectRatio=True,
        mask="auto",
    )
    canvas.restoreState()
    canvas.setStrokeColor(accent)
    canvas.setLineWidth(1.5)
    canvas.line(67 * mm, 0, 67 * mm, PAGE_H)
    canvas.setFillColor(colors.HexColor("#F7F5F1"))
    canvas.rect(67 * mm, 0, PAGE_W - 67 * mm, 8.5 * mm, stroke=0, fill=1)
    canvas.setFont("Arial", 7.3)
    canvas.setFillColor(MUTED)
    canvas.drawString(76 * mm, 3 * mm, f"{person['email']}  |  www.k-and-k.codes")
    canvas.drawRightString(PAGE_W - 11 * mm, 3 * mm, str(doc.page))
    canvas.restoreState()

    # The sidebar is rebuilt on every page. KeepInFrame scales it only if a future
    # content addition would otherwise exceed the available vertical space.
    sidebar = KeepInFrame(47 * mm, 181 * mm, sidebar_flowables(spec, person, profile, s), mode="shrink")
    sidebar_frame = Frame(10 * mm, 15 * mm, 47 * mm, 181 * mm, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
    sidebar_frame.addFromList([sidebar], canvas)


def build(spec: CVSpec, site: dict, profiles: dict) -> Path:
    person = site["people"][spec.person]
    profile = profiles[spec.person][spec.lang]
    name = person["name"]
    accent = VIOLET if spec.person == "heike" else BLUE
    s = styles(accent)

    OUTPUT.mkdir(parents=True, exist_ok=True)
    target = OUTPUT / spec.filename
    frame = Frame(76 * mm, 12 * mm, 123 * mm, PAGE_H - 24 * mm, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
    template = PageTemplate(
        id="cv",
        frames=[frame],
        onPage=lambda canvas, doc: page_background(canvas, doc, spec, person, profile, s, accent),
    )
    doc = BaseDocTemplate(str(target), pagesize=A4, pageTemplates=[template], title=f"{name} - CV", author=name)

    background_label = "Background" if spec.lang == "en" else "Hintergrund"
    summary = f"{profile['bio']} {background_label}: {profile['background']}."
    right = [
        Spacer(1, 5 * mm),
        Table([[
            Paragraph("CURRICULUM VITAE" if spec.lang == "en" else "LEBENSLAUF", s["entry_meta"]),
            Paragraph("K&amp;K / 2026", s["period"]),
        ]], colWidths=[74 * mm, 39 * mm], style=TableStyle([
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ])),
        Spacer(1, 2),
        Paragraph(name, s["name"]),
        Paragraph(clean(profile["role"]), s["role"]),
        HRFlowable(width="100%", thickness=1.2, color=accent, spaceBefore=1, spaceAfter=7),
        Table([[[
            Paragraph("PROFILE" if spec.lang == "en" else "PROFIL", s["summary_label"]),
            Paragraph(clean(summary), s["summary"]),
        ]]], colWidths=[113 * mm], style=TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), CARD),
            ("LINEBEFORE", (0, 0), (0, 0), 3, accent),
            ("LEFTPADDING", (0, 0), (-1, -1), 9),
            ("RIGHTPADDING", (0, 0), (-1, -1), 8),
            ("TOPPADDING", (0, 0), (-1, -1), 7),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
        ])),
        Spacer(1, 4),
        Paragraph(clean(profile.get("experienceLabel", "EXPERIENCE" if spec.lang == "en" else "BERUFSERFAHRUNG")).upper(), s["section_main"]),
    ]
    if spec.person == "heike":
        for index, entry in enumerate(profile["experience"]):
            right.append(entry_block(entry, s, accent, f"{'PROJECT' if spec.lang == 'en' else 'PROJEKT'} 0{index + 1}"))
    else:
        right.extend(entry_block(entry, s, accent) for entry in profile["experience"])
    right.extend((Spacer(1, 1), Paragraph("EDUCATION" if spec.lang == "en" else "AUSBILDUNG", s["section_main"])))
    if spec.person == "heike":
        right.extend(compact_education_block(entry, s, accent) for entry in profile["education"])
    else:
        right.extend(entry_block(entry, s, accent) for entry in profile["education"])

    doc.build(right)
    return target


def main() -> None:
    register_fonts()
    site, profiles = website_data()
    for spec in SPECS:
        print(build(spec, site, profiles))


if __name__ == "__main__":
    main()
