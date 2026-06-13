import { makeStyles, tokens, Button } from "@fluentui/react-components";

const useStyles = makeStyles({
  articleCard: {
    display: "grid",
    gridTemplateColumns: "320px 1fr",
    gap: "28px",
    padding: "24px",
    borderRadius: "12px",
    fontFamily: "Roboto, system-ui",
    border: "0.75px solid var(--maq-red-pale)",
    backgroundColor: "#fff",
    "@media (max-width: 760px)": { gridTemplateColumns: "1fr" },
  },
  articleImage: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
    backgroundColor: "var(--maq-off-white)",
  },
  articleImagePlaceholder: {
    width: "100%",
    height: "180px",
    borderRadius: "8px",
    backgroundColor: "var(--maq-off-white)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--maq-gray-700)",
    fontSize: "12px",
  },
  articleBody: { display: "flex", flexDirection: "column", gap: "10px" },
  articleMeta: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "12px",
    color: "var(--maq-gray-700)",
  },
  articleTitle: {
    fontSize: "20px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: 0,
    lineHeight: 1.3,
  },
  articleExcerpt: {
    fontSize: "13.5px",
    lineHeight: 1.6,
    color: "var(--maq-gray-700)",
    margin: 0,
  },
  readMore: {
    alignSelf: "flex-start",
    marginTop: "4px",
    display: "inline-block",
    fontSize: "13.5px",
    fontWeight: 700,
    lineHeight: 1.4,
    color: "var(--maq-red)",
    textDecoration: "none",
  },
});

export interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  href: string;
  image?: string;
  readMoreLabel?: string;
}

export function NewsCard({
  title,
  excerpt,
  date,
  href,
  image,
  readMoreLabel = "Read full article",
}: NewsCardProps) {
  const s = useStyles();

  return (
    <article className={s.articleCard}>
      {image ? (
        <img className={s.articleImage} src={image} alt={title} loading="lazy" width={1200} height={675} />
      ) : (
        <div className={s.articleImagePlaceholder}>No image</div>
      )}
      <div className={s.articleBody}>
        <div className={s.articleMeta}>
          <span>{date}</span>
        </div>
        <h2 className={s.articleTitle}>{title}</h2>
        <p className={s.articleExcerpt}>{excerpt}</p>
        <Button
          className={s.readMore}
          appearance="subtle"
          as="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {readMoreLabel}
        </Button>
      </div>
    </article>
  );
}
