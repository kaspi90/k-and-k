import type { ReactNode } from "react";
import { Link, To } from "react-router-dom";

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
  const classes = ["button", variant === "secondary" ? "button-secondary" : "", className ?? ""].filter(Boolean).join(" ");
  const content = (
    <>
      <span>{children}</span>
      {icon && <Icon name={icon} />}
      {external && newTabLabel && <span className="sr-only"> ({newTabLabel})</span>}
    </>
  );

  if (to !== undefined) {
    return (
      <Link to={to} className={classes}>
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
