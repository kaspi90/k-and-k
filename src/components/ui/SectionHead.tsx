import type { ReactNode } from "react";

export function Eyebrow({ children, as: Tag = "p" }: { children: ReactNode; as?: "p" | "span" }) {
  return (
    <Tag className="eyebrow">
      <span className="eyebrow-dot" aria-hidden="true" />
      {children}
    </Tag>
  );
}

interface SectionHeadProps {
  id: string;
  label: string;
  title: string;
  body?: string;
  children?: ReactNode;
}

/** Abschnittskopf wie im Figma-Entwurf: Eyebrow, große H2, optionaler Einleitungstext. */
export function SectionHead({ id, label, title, body, children }: SectionHeadProps) {
  return (
    <div className="section-head reveal">
      <Eyebrow>{label}</Eyebrow>
      <h2 id={id}>{title}</h2>
      {body && <p>{body}</p>}
      {children}
    </div>
  );
}
