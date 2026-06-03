import {
  Button,
  makeStyles,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from "@fluentui/react-components";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ChevronDown20Regular,
} from "@fluentui/react-icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { products } from "../data/products";

const useStyles = makeStyles({
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: "#ffffff",
    borderBottom: `1px solid var(--maq-border)`,
    boxShadow: "0 1px 2px rgba(15, 23, 42, 0.04)",
    display: "flex",
    alignItems: "center",
    padding: "0 32px",
    height: "64px",
    gap: "32px",
    color: "var(--maq-ink)",
  },
  navToggle: {
    display: "none",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    width: "44px",
    height: "44px",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  brandLogo: {
    height: "22px",
    width: "auto",
    display: "block",
    flexShrink: 0,
    transform: "translateY(-3px)",
  },
  links: {
    display: "flex",
    gap: "4px",
    flex: 1,
    marginLeft: "16px",
  },
  link: {
    fontSize: "14px",
    color: "var(--maq-ink)",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  navBtn: {
    color: "var(--maq-ink)",
    fontWeight: 500,
    whiteSpace: "nowrap",
    minWidth: "auto",
    ":hover": {
      backgroundColor: "var(--maq-red-pale)",
      color: "var(--maq-red)",
    },
  },
  overlay: {
    display: "none",
  },
  overlayOpen: {
    display: "block",
    position: "fixed",
    inset: 0,
    backgroundColor: "#2b2b2b",
    color: "#fff",
    zIndex: 1200,
    paddingTop: "24px",
    paddingLeft: "20px",
    paddingRight: "20px",
    overflowY: "auto",
  },
  mobileBrand: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "20px",
  },
  closeBtn: {
    position: "absolute",
    right: "16px",
    top: "16px",
    width: "44px",
    height: "44px",
    background: "transparent",
    border: "none",
    color: "#e33",
    fontSize: "20px",
    cursor: "pointer",
  },
  mobileNavList: {
    display: "block",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  mobileSubList: {
    paddingLeft: "14px",
  },
  mobileNavItem: {
    marginBottom: "10px",
  },
  mobileSection: {
    marginBottom: "18px",
  },
  mobileSectionTitle: {
    marginTop: "8px",
    fontWeight: 600,
    marginBottom: "12px",
  },
  mobileNavLink: {
    display: "block",
    padding: "10px 0",
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  navBtnActive: {
    backgroundColor: "var(--maq-red-pale)",
    color: "var(--maq-red)",
  },
  menuItemActive: {
    backgroundColor: "var(--maq-red-pale)",
    color: "var(--maq-red)",
  },
  mobileRequestDemoBtn: {
    fontWeight: 700,
  },
});



interface NavItem {
  label: string;
  href?: string;
}

const industries: NavItem[] = [
  { label: "Retail & consumer goods", href: "/industries/retail" },
  { label: "Financial services", href: "/industries/financial-services" },
  { label: "Healthcare & life sciences", href: "/industries/healthcare-life-sciences" },
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "Technology", href: "/industries/technology" },
  { label: "Public sector", href: "/industries/public-sector" },
];

const services: NavItem[] = [
  { label: "AI solutions & agentic automation", href: "/services/agentic-ai" },
  { label: "Data engineering & analytics", href: "/services/data-and-analytics" },
  { label: "Reporting & business intelligence", href: "/services/reporting-bi" },
  { label: "Business apps & process automation", href: "/services/business-apps" },
  { label: "Cloud infrastructure & modernization", href: "/services/cloud" },
  { label: "Security & compliance", href: "/services/security-compliance" },
  { label: "Workplace transformation & productivity", href: "/services/workplace-transformation" },
];

const productNav: NavItem[] = [
  ...products.map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
  { label: "All products →", href: "/products" },
];

const partnerships: NavItem[] = [
  { label: "Microsoft", href: "/partnerships/microsoft" },
  { label: "Snowflake", href: "/partnerships/snowflake" },
  { label: "Databricks", href: "/partnerships/databricks" },
];

const insights: NavItem[] = [
  { label: "Case Studies", href: "/insights/case-studies" },
  { label: "Consulting offers", href: "https://marketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=Maq%20software" },
  { label: "Power BI custom visual guide", href: "/insights/power-bi-custom-visual-guide" },
  { label: "Best practice guides", href: "/insights/best-practice-guides" },
];

const about: NavItem[] = [
  { label: "Who we are", href: "/who-we-are" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact Us", href: "/contact" },
];

function isItemActive(href: string | undefined, pathname: string): boolean {
  if (!href || href.startsWith("http") || href === "#") return false;
  const target = href.split("?")[0].split("#")[0];
  if (target === "/") return pathname === "/";
  return pathname === target || pathname.startsWith(`${target}/`);
}

function MegaMenu({
  label,
  items,
  btnClass,
}: {
  label: string;
  items: NavItem[];
  btnClass?: string;
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const s = useStyles();
  // Pick only the most specific (longest matching) item so a parent link
  // like "/products" doesn't also highlight when on "/products/embedfast".
  const activeHref = items.reduce<string | undefined>((best, i) => {
    if (!isItemActive(i.href, pathname)) return best;
    if (!best || (i.href as string).length > best.length) return i.href;
    return best;
  }, undefined);
  const groupActive = activeHref !== undefined;
  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <Button
          appearance="subtle"
          className={`${btnClass ?? ""} ${groupActive ? s.navBtnActive : ""}`}
          icon={<ChevronDown20Regular />}
          iconPosition="after"
        >
          {label}
        </Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          {items.map((i) => (
            <MenuItem
              key={i.label}
              className={i.href === activeHref ? s.menuItemActive : undefined}
              onClick={() => {
                if (!i.href) return;
                if (i.href.startsWith("http")) {
                  window.open(i.href, "_blank", "noopener,noreferrer");
                  return;
                }
                navigate(i.href);
              }}
            >
              {i.label}
            </MenuItem>
          ))}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}

export function Header() {
  const s = useStyles();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const firstFocusable = useRef<HTMLElement | null>(null);
  const scrollPos = useRef<number>(0);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKey);
    } else {
      document.removeEventListener("keydown", onKey);
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    // scroll lock when open
    if (open) {
      scrollPos.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPos.current}px`;
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollPos.current || 0);
      // restore focus to toggle
      toggleRef.current?.focus();
    }
  }, [open]);

  function openMenu() {
    setOpen(true);
    // focus will be set after render
    setTimeout(() => {
      firstFocusable.current?.focus();
    }, 0);
  }

  function closeMenu() {
    setOpen(false);
  }

  function navigateTo(href?: string) {
    if (!href) return;
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    window.location.href = href;
    closeMenu();
  }

  return (
    <nav className={`${s.nav} site-header`}>
      <Link to="/" className={s.brand} aria-label="MAQ Software homepage">
        <img src="/logos/MAQ-Software-Logo.svg" alt="MAQ Software" className={s.brandLogo} />
      </Link>

      <button
        ref={(el) => (toggleRef.current = el)}
        className={`${s.navToggle} nav-toggle`}
        aria-controls="mobile-nav"
        aria-expanded={open}
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => (open ? closeMenu() : openMenu())}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 6h18M3 12h18M3 18h18" stroke="#333" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <div className={`${s.links} site-nav-links`}>
        <MegaMenu label="Services" items={services} btnClass={s.navBtn} />
        <MegaMenu label="Products" items={productNav} btnClass={s.navBtn} />
        <MegaMenu label="Industries" items={industries} btnClass={s.navBtn} />
        <MegaMenu label="Partnerships" items={partnerships} btnClass={s.navBtn} />
        <MegaMenu label="Insights" items={insights} btnClass={s.navBtn} />
        <MegaMenu label="About" items={about} btnClass={s.navBtn} />
      </div>

      <div className={`${s.right} header-right`}>
        <Button
          appearance="primary"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Request a demo
        </Button>
      </div>

      {/* Mobile overlay rendered as a portal to avoid clipping by ancestor styles */}
      {typeof document !== "undefined" && createPortal(
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal={open}
          aria-hidden={!open}
          className={`${open ? s.overlayOpen : s.overlay} mobile-overlay ${open ? 'open' : ''}`}
        >
          {open && (
            <>
              <button className={s.closeBtn} aria-label="Close navigation" onClick={closeMenu}>
                ×
              </button>
              <div className={s.mobileBrand}>
                <Link to="/" onClick={closeMenu} className={s.brand} aria-label="MAQ Software homepage">
                    <img src="/logos/MAQ-Software-Logo.svg" alt="MAQ Software" className={s.brandLogo} />
                </Link>
              </div>

              <div>
                {/* Services */}
                <div className={s.mobileSection}>
                  <div className={s.mobileSectionTitle}>Services</div>
                  <ul className={`${s.mobileNavList} ${s.mobileSubList}`}>
                    {services.map((i, idx) => (
                      <li key={i.label} className={s.mobileNavItem}>
                      <a
                        href={i.href}
                        className={s.mobileNavLink}
                        ref={idx === 0 ? ((el) => (firstFocusable.current = el as HTMLElement)) : undefined}
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo(i.href);
                        }}
                      >
                        {i.label}
                      </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Products */}
                <div className={s.mobileSection}>
                  <div className={s.mobileSectionTitle}>Products</div>
                  <ul className={`${s.mobileNavList} ${s.mobileSubList}`}>
                    {productNav.map((i) => (
                      <li key={i.label} className={s.mobileNavItem}>
                        <a
                          href={i.href}
                          className={s.mobileNavLink}
                          onClick={(e) => {
                            e.preventDefault();
                            navigateTo(i.href);
                          }}
                        >
                          {i.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industries */}
                <div className={s.mobileSection}>
                  <div className={s.mobileSectionTitle}>Industries</div>
                  <ul className={`${s.mobileNavList} ${s.mobileSubList}`}>
                    {industries.map((i) => (
                      <li key={i.label} className={s.mobileNavItem}>
                        <a
                          href={i.href}
                          className={s.mobileNavLink}
                          onClick={(e) => {
                            e.preventDefault();
                            navigateTo(i.href);
                          }}
                        >
                          {i.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Partnerships */}
                <div className={s.mobileSection}>
                  <div className={s.mobileSectionTitle}>Partnerships</div>
                  <ul className={`${s.mobileNavList} ${s.mobileSubList}`}>
                    {partnerships.map((i) => (
                      <li key={i.label} className={s.mobileNavItem}>
                        <a
                          href={i.href}
                          className={s.mobileNavLink}
                          onClick={(e) => {
                            e.preventDefault();
                            navigateTo(i.href);
                          }}
                        >
                          {i.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Insights */}
                <div className={s.mobileSection}>
                  <div className={s.mobileSectionTitle}>Insights</div>
                  <ul className={`${s.mobileNavList} ${s.mobileSubList}`}>
                    {insights.map((i) => (
                      <li key={i.label} className={s.mobileNavItem}>
                        <a
                          href={i.href}
                          className={s.mobileNavLink}
                          onClick={(e) => {
                            e.preventDefault();
                            navigateTo(i.href);
                          }}
                        >
                          {i.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* About */}
                <div className={s.mobileSection}>
                  <div className={s.mobileSectionTitle}>About</div>
                  <ul className={`${s.mobileNavList} ${s.mobileSubList}`}>
                    {about.map((i) => (
                      <li key={i.label} className={s.mobileNavItem}>
                        <a
                          href={i.href}
                          className={s.mobileNavLink}
                          onClick={(e) => {
                            e.preventDefault();
                            navigateTo(i.href);
                          }}
                        >
                          {i.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: 24, marginBottom: 40 }}>
                  <Button appearance="primary" className={s.mobileRequestDemoBtn} onClick={() => { closeMenu(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                    Request a demo
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>,
        document.body
      )}
    </nav>
  );
}
