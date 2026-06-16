import { lazy, Suspense, useEffect, type ComponentType } from "react";
import { makeStyles, tokens } from "@fluentui/react-components";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { Announcement as AnnouncementRibbon } from "./components/Announcement2";
import { Header } from "./components/Header";
import { HeaderV2 } from "./components/HeaderV2";
import { Footer } from "./components/Footer";
import { FooterV2 } from "./components/FooterV2";
import { CTA } from "./components/CTA";
import { Home } from "./pages/Home";

const lazyNamed = (loader: () => Promise<Record<string, ComponentType<any>>>, exportName: string) =>
  lazy(async () => {
    const module = await loader();
    return { default: module[exportName] as ComponentType<any> };
  });

const HomeV2 = lazyNamed(() => import("./pages/HomeV2"), "HomeV2");
const IndustryRetail = lazyNamed(() => import("./pages/IndustryRetail"), "IndustryRetail");
const IndustryFinancialServices = lazyNamed(
  () => import("./pages/IndustryFinancialServices"),
  "IndustryFinancialServices"
);
const IndustryHealthcareLifeSciences = lazyNamed(
  () => import("./pages/IndustryHealthcareLifeSciences"),
  "IndustryHealthcareLifeSciences"
);
const IndustryTechnology = lazyNamed(() => import("./pages/IndustryTechnology"), "IndustryTechnology");
const IndustryPublicSector = lazyNamed(() => import("./pages/IndustryPublicSector"), "IndustryPublicSector");
const IndustryManufacturing = lazyNamed(() => import("./pages/IndustryManufacturing"), "IndustryManufacturing");
const ProductsHome = lazyNamed(() => import("./pages/ProductsHome"), "ProductsHome");
const ProductDetail = lazyNamed(() => import("./pages/ProductDetail"), "ProductDetail");
const ProductFabricAdminAgent = lazyNamed(
  () => import("./pages/ProductFabricAdminAgent"),
  "ProductFabricAdminAgent"
);
const ProductAIDataLens = lazyNamed(() => import("./pages/ProductAIDataLens"), "ProductAIDataLens");
const ProductEmbedFAST = lazyNamed(() => import("./pages/ProductEmbedFAST"), "ProductEmbedFAST");
const ProductCertyFAST = lazyNamed(() => import("./pages/ProductCertyFAST"), "ProductCertyFAST");
const ProductLoadFAST = lazyNamed(() => import("./pages/ProductLoadFAST"), "ProductLoadFAST");
const ProductMigrateFAST = lazyNamed(() => import("./pages/ProductMigrateFAST"), "ProductMigrateFAST");
const ComponentLab = lazyNamed(() => import("./pages/ComponentLab"), "ComponentLab");
const ServiceAgenticAI = lazyNamed(() => import("./pages/ServiceAgenticAI"), "ServiceAgenticAI");
const ServiceCloud = lazyNamed(() => import("./pages/ServiceCloud"), "ServiceCloud");
const ServiceReportingBI = lazyNamed(() => import("./pages/ServiceReportingBI"), "ServiceReportingBI");
const ServiceBusinessApps = lazyNamed(() => import("./pages/ServiceBusinessApps"), "ServiceBusinessApps");
const ServiceSecurityCompliance = lazyNamed(
  () => import("./pages/ServiceSecurityCompliance"),
  "ServiceSecurityCompliance"
);
const ServiceDataAndAnalytics = lazyNamed(
  () => import("./pages/ServiceDataAndAnalytics"),
  "ServiceDataAndAnalytics"
);
const ServiceWorkplaceTransformation = lazyNamed(
  () => import("./pages/ServiceWorkplaceTransformation"),
  "ServiceWorkplaceTransformation"
);
const PartnershipSnowflake = lazyNamed(() => import("./pages/PartnershipSnowflake"), "PartnershipSnowflake");
const PartnershipDatabricks = lazyNamed(() => import("./pages/PartnershipDatabricks"), "PartnershipDatabricks");
const InsightsCaseStudies = lazyNamed(() => import("./pages/InsightsCaseStudies"), "InsightsCaseStudies");
const InsightsConsultingOffers = lazyNamed(
  () => import("./pages/InsightsConsultingOffers"),
  "InsightsConsultingOffers"
);
const InsightsPowerBICustomVisualGuide = lazyNamed(
  () => import("./pages/InsightsPowerBICustomVisualGuide"),
  "InsightsPowerBICustomVisualGuide"
);
const InsightsCustomVisualDetail = lazyNamed(
  () => import("./pages/InsightsCustomVisualDetail"),
  "InsightsCustomVisualDetail"
);
const InsightsVisualChooser = lazyNamed(() => import("./pages/InsightsVisualChooser"), "InsightsVisualChooser");
const InsightsBestPracticeGuides = lazyNamed(
  () => import("./pages/InsightsBestPracticeGuides"),
  "InsightsBestPracticeGuides"
);
const InsightsDatabricksBestPractices = lazyNamed(
  () => import("./pages/InsightsDatabricksBestPractices"),
  "InsightsDatabricksBestPractices"
);
const InsightsAzureDatabricksBestPractices = lazyNamed(
  () => import("./pages/InsightsAzureDatabricksBestPractices"),
  "InsightsAzureDatabricksBestPractices"
);
const InsightsGitHubCopilotBestPractices = lazyNamed(
  () => import("./pages/InsightsGitHubCopilotBestPractices"),
  "InsightsGitHubCopilotBestPractices"
);
const InsightsPowerBICopilotBestPractices = lazyNamed(
  () => import("./pages/InsightsPowerBICopilotBestPractices"),
  "InsightsPowerBICopilotBestPractices"
);
const InsightsPowerBIBestPractices = lazyNamed(
  () => import("./pages/InsightsPowerBIBestPractices"),
  "InsightsPowerBIBestPractices"
);
const InsightsSnowflakePowerBIBestPractices = lazyNamed(
  () => import("./pages/InsightsSnowflakePowerBIBestPractices"),
  "InsightsSnowflakePowerBIBestPractices"
);
const InsightsKnowledgeBotBestPractices = lazyNamed(
  () => import("./pages/InsightsKnowledgeBotBestPractices"),
  "InsightsKnowledgeBotBestPractices"
);
const InsightsDAXBestPractices = lazyNamed(() => import("./pages/InsightsDAXBestPractices"), "InsightsDAXBestPractices");
const InsightsAzureDevOpsBestPractices = lazyNamed(
  () => import("./pages/InsightsAzureDevOpsBestPractices"),
  "InsightsAzureDevOpsBestPractices"
);
const InsightsAzureArchitectureBestPractices = lazyNamed(
  () => import("./pages/InsightsAzureArchitectureBestPractices"),
  "InsightsAzureArchitectureBestPractices"
);
const InsightsAzureSecurityBestPractices = lazyNamed(
  () => import("./pages/InsightsAzureSecurityBestPractices"),
  "InsightsAzureSecurityBestPractices"
);
const InsightsDataValidationBestPractices = lazyNamed(
  () => import("./pages/InsightsDataValidationBestPractices"),
  "InsightsDataValidationBestPractices"
);
const InsightsDynamics365DevelopmentBestPractices = lazyNamed(
  () => import("./pages/InsightsDynamics365DevelopmentBestPractices"),
  "InsightsDynamics365DevelopmentBestPractices"
);
const InsightsDynamics365DeploymentBestPractices = lazyNamed(
  () => import("./pages/InsightsDynamics365DeploymentBestPractices"),
  "InsightsDynamics365DeploymentBestPractices"
);
const InsightsPowerAppsBestPractices = lazyNamed(
  () => import("./pages/InsightsPowerAppsBestPractices"),
  "InsightsPowerAppsBestPractices"
);
const InsightsDataverseSecurityBestPractices = lazyNamed(
  () => import("./pages/InsightsDataverseSecurityBestPractices"),
  "InsightsDataverseSecurityBestPractices"
);
const PartnershipMicrosoft = lazyNamed(() => import("./pages/PartnershipMicrosoft"), "PartnershipMicrosoft");
const AboutWhoWeAre = lazyNamed(() => import("./pages/AboutWhoWeAre"), "AboutWhoWeAre");
const AboutSustainability = lazyNamed(() => import("./pages/AboutSustainability"), "AboutSustainability");
const AboutEvents = lazyNamed(() => import("./pages/AboutEvents"), "AboutEvents");
const AboutCareers = lazyNamed(() => import("./pages/AboutCareers"), "AboutCareers");
const AboutPrivacyStatement = lazyNamed(() => import("./pages/AboutPrivacyStatement"), "AboutPrivacyStatement");
const Contact = lazyNamed(() => import("./pages/Contact"), "Contact");
const TermsOfService = lazyNamed(() => import("./pages/TermsOfService"), "TermsOfService");
const TechCon365 = lazyNamed(() => import("./pages/TechCon365"), "TechCon365");
const TechCon365Dallas = lazyNamed(() => import("./pages/TechCon365Dallas"), "TechCon365Dallas");
const TechCon365Seattle = lazyNamed(() => import("./pages/TechCon365Seattle"), "TechCon365Seattle");
const FabCon2027 = lazyNamed(() => import("./pages/FabCon2027"), "FabCon2027");

const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground1,
    minHeight: "100vh",
  },
});

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

// Picks the header/footer per route: the bento exploration (/homev2) uses the
// new HeaderV2 + light footer; every other route keeps the standard Header +
// navy footer.
const isExplorationRoute = (pathname: string) => pathname === "/homev2";

function SiteHeader() {
  const { pathname } = useLocation();
  return isExplorationRoute(pathname) ? <HeaderV2 /> : <Header />;
}

function SiteFooter() {
  const { pathname } = useLocation();
  return isExplorationRoute(pathname) ? <FooterV2 /> : <Footer />;
}

export function App() {
  const s = useStyles();
  // Ensure SPA responds immediately when the viewport changes (device toolbar or resize).
  // Some browsers/devtools don't always force a repaint that re-applies CSS-in-JS styles
  // or media-query-dependent layout; keeping a body class in sync with matchMedia
  // ensures styles tied to `.is-mobile` or generic reflow happen immediately.
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = (e?: MediaQueryListEvent | MediaQueryList) => {
      try {
        const matches = mq.matches;
        // diagnostic log to help debug when running in devtools
        // eslint-disable-next-line no-console
        // also set a DOM attribute so it's easy to inspect in Elements panel
        try {
          document.body.setAttribute("data-is-mobile", String(matches));
        } catch (e) {
          /* ignore */
        }
        if (matches) document.body.classList.add("is-mobile");
        else document.body.classList.remove("is-mobile");
      } catch (err) {
        // ignore
      }
    };

    // Initial set
    update(mq);

    // matchMedia change listener (modern + legacy)
    if ((mq as any).addEventListener) mq.addEventListener("change", update as any);
    else (mq as any).addListener(update as any);

    // Fallback: also respond to resize and orientationchange events
    const onResize = () => update();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    // Some devtools/device-toolbar toggles don't reliably emit events immediately.
    // Polling briefly after mount can catch these cases in practice.
    let pollHandle: number | null = null;
    let pollCount = 0;
    const startPoll = () => {
      pollHandle = window.setInterval(() => {
        pollCount += 1;
        update();
        if (pollCount > 8 && pollHandle != null) {
          window.clearInterval(pollHandle);
          pollHandle = null;
        }
      }, 150);
    };
    startPoll();

    // cleanup
    return () => {
      if ((mq as any).removeEventListener) mq.removeEventListener("change", update as any);
      else (mq as any).removeListener(update as any);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      if (pollHandle != null) {
        window.clearInterval(pollHandle);
        pollHandle = null;
      }
    };
  }, []);
  return (
    <div className={s.root}>
      <ScrollToTop />
      <SiteHeader />
      {/* <AnnouncementRibbon /> */}
        <Suspense fallback={<div style={{ minHeight: "400px" }} />}>
          <Routes>
            <Route path="/" element={<HomeV2 />} />
            <Route path="/homev1" element={<Home />} />
            <Route path="/homev2" element={<HomeV2 />} />
            <Route path="/industries/retail" element={<IndustryRetail />} />
            <Route path="/industries/financial-services" element={<IndustryFinancialServices />} />
            <Route path="/industries/healthcare-life-sciences" element={<IndustryHealthcareLifeSciences />} />
            <Route path="/industries/technology" element={<IndustryTechnology />} />
            <Route path="/industries/manufacturing" element={<IndustryManufacturing />} />
            <Route path="/industries/public-sector" element={<IndustryPublicSector />} />
            <Route path="/services/agentic-ai" element={<ServiceAgenticAI />} />
            <Route path="/services/cloud" element={<ServiceCloud />} />
            <Route path="/services/reporting-bi" element={<ServiceReportingBI />} />
            <Route path="/services/business-apps" element={<ServiceBusinessApps />} />
            <Route path="/services/security-compliance" element={<ServiceSecurityCompliance />} />
            <Route path="/services/data-and-analytics" element={<ServiceDataAndAnalytics />} />
            <Route path="/services/workplace-transformation" element={<ServiceWorkplaceTransformation />} />
            <Route
              path="/partnerships/microsoft"
              element={
                <>
                  <PartnershipMicrosoft />
                  <CTA />
                </>
              }
            />
            <Route path="/insights" element={<Navigate to="/insights/case-studies" replace />} />
            <Route path="/insights/case-studies" element={<InsightsCaseStudies />} />
            <Route path="/insights/consulting-offers" element={<InsightsConsultingOffers />} />
            <Route
              path="/insights/power-bi-custom-visual-guide"
              element={<InsightsPowerBICustomVisualGuide />}
            />
            <Route
              path="/insights/power-bi-custom-visual-guide/:slug"
              element={<InsightsCustomVisualDetail />}
            />
            <Route path="/insights/visual-chooser" element={<InsightsVisualChooser />} />
            <Route path="/insights/best-practice-guides" element={<InsightsBestPracticeGuides />} />
            <Route
              path="/insights/databricks-best-practices"
              element={
                <>
                  <InsightsDatabricksBestPractices />
                  <CTA />
                </>
              }
            />
            <Route
              path="/insights/azure-databricks-best-practices"
              element={
                <>
                  <InsightsAzureDatabricksBestPractices />
                  <CTA />
                </>
              }
            />
            <Route
              path="/insights/github-copilot-best-practices"
              element={
                <>
                  <InsightsGitHubCopilotBestPractices />
                  <CTA />
                </>
              }
            />
            <Route
              path="/insights/power-bi-copilot-best-practices"
              element={
                <>
                  <InsightsPowerBICopilotBestPractices />
                  <CTA />
                </>
              }
            />
            <Route
              path="/insights/power-bi-best-practices"
              element={
                <>
                  <InsightsPowerBIBestPractices />
                  <CTA />
                </>
              }
            />
            <Route
              path="/insights/snowflake-and-power-bi-best-practices"
              element={
                <>
                  <InsightsSnowflakePowerBIBestPractices />
                  <CTA />
                </>
              }
            />
            <Route
              path="/insights/knowledge-bot-best-practices"
              element={
                <>
                  <InsightsKnowledgeBotBestPractices />
                  <CTA />
                </>
              }
            />
            <Route
              path="/insights/dax-best-practices"
              element={
                <>
                  <InsightsDAXBestPractices />
                  <CTA />
                </>
              }
            />
            <Route
              path="/insights/azure-devops-best-practices"
              element={
                <>
                  <InsightsAzureDevOpsBestPractices />
                  <CTA />
                </>
              }
            />
            <Route
              path="/insights/azure-architecture-best-practices"
              element={
                <>
                  <InsightsAzureArchitectureBestPractices />
                  <CTA />
                </>
              }
            />
            <Route
              path="/insights/azure-security-best-practices"
              element={
                <>
                  <InsightsAzureSecurityBestPractices />
                  <CTA />
                </>
              }
            />
            <Route
              path="/insights/data-validation-best-practices"
              element={
                <>
                  <InsightsDataValidationBestPractices />
                  <CTA />
                </>
              }
            />
            <Route
              path="/insights/dynamics365-development-best-practices"
              element={
                <>
                  <InsightsDynamics365DevelopmentBestPractices />
                  <CTA />
                </>
              }
            />
            <Route
              path="/insights/dynamics365-deployment-best-practices"
              element={
                <>
                  <InsightsDynamics365DeploymentBestPractices />
                  <CTA />
                </>
              }
            />
            <Route
              path="/insights/powerapps-best-practices"
              element={
                <>
                  <InsightsPowerAppsBestPractices />
                  <CTA />
                </>
              }
            />
            <Route
              path="/insights/dataverse-security-best-practices"
              element={
                <>
                  <InsightsDataverseSecurityBestPractices />
                  <CTA />
                </>
              }
            />
            <Route path="/partnerships/databricks" element={<PartnershipDatabricks />} />
            <Route path="/partnerships/snowflake" element={<PartnershipSnowflake />} />
            <Route path="/about/who-we-are" element={<AboutWhoWeAre />} />
            <Route path="/about/sustainability" element={<AboutSustainability />} />
            <Route path="/events" element={<AboutEvents />} />
            <Route path="/about/events" element={<AboutEvents />} />
            <Route path="/about/careers" element={<AboutCareers />} />
            <Route path="/about/privacy-statement" element={<AboutPrivacyStatement />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/events/techcon365" element={<TechCon365 />} />
            <Route path="/events/techcon365/dallas" element={<TechCon365Dallas />} />
            <Route path="/events/techcon365/seattle" element={<TechCon365Seattle />} />
            <Route path="/events/fabcon2027" element={<FabCon2027 />} />
            <Route path="/products" element={<ProductsHome />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/products/ai-datalens" element={<ProductAIDataLens />} />
            <Route path="/products/fabricadminagent" element={<ProductFabricAdminAgent />} />
            <Route path="/products/embedFAST" element={<ProductEmbedFAST />} />
            <Route path="/products/certyFAST" element={<ProductCertyFAST />} />
            <Route path="/products/loadFAST" element={<ProductLoadFAST />} />
            <Route path="/products/migrateFAST" element={<ProductMigrateFAST />} />
            <Route path="/lab" element={<ComponentLab />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      <SiteFooter />
    </div>
  );
}
