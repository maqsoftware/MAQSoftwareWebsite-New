import { makeStyles, tokens } from "@fluentui/react-components";

export interface VisualPbiEmbedProps {
  productName: string;
  reportUrl: string;
}

const useStyles = makeStyles({
  shell: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    backgroundColor: "#fff",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.05)",
  },
  ribbon: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "var(--maq-off-white)",
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    padding: "10px 18px",
    gap: "16px",
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--maq-black)",
  },
  ribbonBrand: { fontWeight: 700, color: "var(--maq-red)" },
  ribbonDivider: {
    width: "1px",
    alignSelf: "stretch",
    backgroundColor: tokens.colorNeutralStroke2,
  },
  frameWrap: {
    position: "relative",
    width: "100%",
    height: "0",
    paddingBottom: "62.5%",
  },
  frame: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    border: 0,
  },
  footer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    fontSize: "13px",
    color: "var(--maq-gray-700, #4b5563)",
    padding: "12px 18px",
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: "var(--maq-off-white)",
  },
  link: {
    color: "var(--maq-red)",
    fontWeight: 600,
    textDecoration: "none",
    marginLeft: "4px",
    ":hover": { textDecoration: "underline" },
  },
});

export function VisualPbiEmbed({ productName, reportUrl }: VisualPbiEmbedProps) {
  const s = useStyles();
  return (
    <div className={s.shell}>
      <div className={s.ribbon}>
        <span className={s.ribbonBrand}>MAQ Software</span>
        <span className={s.ribbonDivider} aria-hidden />
        <span>{productName}</span>
      </div>
      <div className={s.frameWrap}>
        <iframe
          className={s.frame}
          title={`${productName} feature walkthrough`}
          src={reportUrl}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
        />
      </div>
      <div className={s.footer}>
        <span>
          For a demo video, please visit our
          <a
            className={s.link}
            href="https://www.youtube.com/@MAQSoftware"
            target="_blank"
            rel="noreferrer"
          >
            YouTube channel
          </a>
        </span>
        <span>
          For technical support, please visit our
          <a
            className={s.link}
            href="https://community.fabric.microsoft.com/"
            target="_blank"
            rel="noreferrer"
          >
            Power BI community forum
          </a>
        </span>
      </div>
    </div>
  );
}
