import type { MouseEvent, ReactNode } from "react";
import { Link, To, useLocation, useResolvedPath } from "react-router-dom";

import { Icon, IconName } from "./Icon";

interface ButtonProps {
  children: ReactNode;
  /** Interne Route (react-router) */
  to?: To;
  /** Externe URL, mailto: oder Anker */
  href?: string;
  variant?: "primary" | "secondary";
  icon?: IconName;
  external?: boolean;
  className?: string;
  newTabLabel?: string;
  /** Datei herunterladen statt öffnen (z. B. Lebenslauf-PDF) */
  download?: boolean;
}

export function Button({ children, to, href, variant = "primary", icon, external, className, newTabLabel, download }: ButtonProps) {
  const location = useLocation();
  const resolvedTo = useResolvedPath(to ?? ".");
  const classes = ["button", variant === "secondary" ? "button-secondary" : "", className ?? ""].filter(Boolean).join(" ");
  const content = (
    <>
      <span>{children}</span>
      {icon && <Icon name={icon} />}
      {external && newTabLabel && <span className="sr-only"> ({newTabLabel})</span>}
    </>
  );

  if (to !== undefined) {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      const isPlainLeftClick = event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
      const repeatsCurrentHash =
        resolvedTo.hash && resolvedTo.pathname === location.pathname && resolvedTo.search === location.search && resolvedTo.hash === location.hash;
      if (!isPlainLeftClick || !repeatsCurrentHash) return;

      const target = document.getElementById(decodeURIComponent(resolvedTo.hash.slice(1)));
      if (!target) return;

      event.preventDefault();
      const reducedMotion = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView?.({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    };

    return (
      <Link to={to} className={classes} onClick={handleClick}>
        {content}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: true, type: "application/pdf" } : {})}
    >
      {content}
    </a>
  );
}
