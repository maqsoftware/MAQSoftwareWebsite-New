import {
  Button,
  makeStyles,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from "@fluentui/react-components";
import {
  ChevronDown20Regular,
  Search20Regular,
} from "@fluentui/react-icons";
import { Link, useNavigate } from "react-router-dom";
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
  brand: {
    display: "flex",
    alignItems: "center",
    fontSize: "20px",
    fontWeight: 700,
    textDecoration: "none",
  },
  brandRed: { color: "var(--maq-red)", fontWeight: 800 },
  brandGray: { color: "var(--maq-ink)", fontWeight: 500, marginLeft: "6px" },
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
    ":hover": {
      backgroundColor: "var(--maq-red-pale)",
      color: "var(--maq-red)",
    },
  },
});

interface NavItem {
  label: string;
  href?: string;
}

const industries: NavItem[] = [
  { label: "Retail & consumer goods", href: "/industries/retail" },
  { label: "Financial services" },
  { label: "Healthcare & life sciences" },
  { label: "Manufacturing" },
  { label: "Technology" },
  { label: "Public sector" },
];

const services: NavItem[] = [
  { label: "AI solutions & agentic automation", href: "/services/agentic-ai" },
  { label: "Data engineering & analytics" },
  { label: "Reporting & business intelligence", href: "/services/reporting-bi" },
  { label: "Business apps & process automation" },
  { label: "Cloud infrastructure & modernization" },
  { label: "Security & compliance" },
  { label: "Workplace transformation & productivity" },
];

const productNav: NavItem[] = [
  ...products.map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
  { label: "All products →", href: "/products" },
];

const contact: NavItem[] = [
  { label: "Talk to sales" },
  { label: "Customer success" },
  { label: "Partner with us" },
  { label: "Careers" },
];

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
  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <Button appearance="subtle" className={btnClass} icon={<ChevronDown20Regular />} iconPosition="after">
          {label}
        </Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          {items.map((i) => (
            <MenuItem key={i.label} onClick={() => i.href && navigate(i.href)}>
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
  return (
    <nav className={s.nav}>
      <Link to="/" className={s.brand}>
        <span className={s.brandRed}>MAQ</span>
        <span className={s.brandGray}>Software</span>
      </Link>

      <div className={s.links}>
        <Button
          appearance="subtle"
          className={s.navBtn}
          as="a"
          href="/"
        >
          Home
        </Button>
        <MegaMenu label="Services" items={services} btnClass={s.navBtn} />
        <MegaMenu label="Products" items={productNav} btnClass={s.navBtn} />
        <MegaMenu label="Industries" items={industries} btnClass={s.navBtn} />
        <Button
          appearance="subtle"
          className={s.navBtn}
          onClick={() =>
            document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Insights
        </Button>
        <Button appearance="subtle" className={s.navBtn}>
          About Us
        </Button>
        <MegaMenu label="Contact Us" items={contact} btnClass={s.navBtn} />
      </div>

      <div className={s.right}>
        <Button appearance="subtle" className={s.navBtn} icon={<Search20Regular />} aria-label="Search" />
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
    </nav>
  );
}
