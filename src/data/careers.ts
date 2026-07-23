import { sanitizeExternalHtml } from "../lib/sanitizeHtml";

export interface JobOpening {
  id: string;
  title: string;
  /** Sanitized HTML description from JobScore. */
  contentHtml: string;
  /** Plain-text excerpt for previews / SEO. */
  excerpt: string;
  /** Direct JobScore application URL. */
  applyUrl: string;
  /** ISO date when the job was opened. */
  date: string;
}

export type CareersRegion = "us" | "india";

export const JOBSCORE_URL = "https://careers.jobscore.com/careers/maqsoftware";
const JOBSCORE_FEED_URL =
  "https://careers.jobscore.com/jobs/maqsoftware/feed.json?sort=location";

interface JobScoreJob {
  id: string;
  title: string;
  description: string;
  apply_url: string;
  opened_date: string;
  country: string;
  location: string;
}

interface JobScoreFeedResponse {
  jobs: JobScoreJob[];
}

function stripHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return (doc.body.textContent || "").replace(/\s+/g, " ").trim();
}

function removeRepeatedJobHeading(html: string, title: string): string {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const normalizedTitle = title.replace(/\s+/g, " ").trim().toLowerCase();

  doc.body.querySelectorAll("h1").forEach((heading) => {
    const headingText = (heading.textContent || "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
    if (headingText.includes(normalizedTitle)) heading.remove();
  });

  return doc.body.innerHTML;
}

function excerpt(html: string, max = 220): string {
  const text = stripHtml(html);
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

function mapJob(job: JobScoreJob): JobOpening {
  const sanitizedHtml = sanitizeExternalHtml(job.description ?? "");
  const html = removeRepeatedJobHeading(sanitizedHtml, job.title);
  return {
    id: job.id,
    title: `${job.title.trim()} - ${job.location.trim()}`,
    contentHtml: html,
    excerpt: excerpt(html),
    applyUrl: job.apply_url,
    date: job.opened_date,
  };
}

let openingsPromise: Promise<JobScoreJob[]> | null = null;

function fetchAllOpenings(): Promise<JobScoreJob[]> {
  if (!openingsPromise) {
    openingsPromise = fetch(JOBSCORE_FEED_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load openings from JobScore.");
        }
        return response.json() as Promise<JobScoreFeedResponse>;
      })
      .then((data) => data.jobs)
      .catch((error: unknown) => {
        openingsPromise = null;
        throw error;
      });
  }
  return openingsPromise;
}

export async function fetchOpenings(region: CareersRegion): Promise<JobOpening[]> {
  const jobs = await fetchAllOpenings();
  const country = region === "us" ? "US" : "IN";
  return jobs.filter((job) => job.country === country).map(mapJob);
}

export interface CareerReason {
  title: string;
  body: string;
}

export const careerReasons: CareerReason[] = [
  {
    title: "Substantial responsibility, early",
    body:
      "Take ownership from day one, across the full delivery lifecycle and project management.",
  },
  {
    title: "Continuous learning",
    body:
      "Work alongside Microsoft, Snowflake, and Databricks experts on the newest AI, data, and cloud technologies.",
  },
  {
    title: "Global projects, real impact",
    body:
      "Deliver for Fortune 500 customers across Redmond, Plano, Hyderabad, Mumbai, and Noida.",
  },
];
