import { useEffect } from "react";
import { makeStyles, tokens } from "@fluentui/react-components";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CTA } from "./components/CTA";
import { Home } from "./pages/Home";
import { IndustryRetail } from "./pages/industries/IndustryRetail";
import { IndustryFinancialServices } from "./pages/industries/IndustryFinancialServices";
import { IndustryHealthcareLifeSciences } from "./pages/industries/IndustryHealthcareLifeSciences";
import { IndustryTechnology } from "./pages/industries/IndustryTechnology";
import { IndustryPublicSector } from "./pages/industries/IndustryPublicSector";
import { IndustryManufacturing } from "./pages/IndustryManufacturing";
import { ProductsHome } from "./pages/products/ProductsHome";
import { ProductDetail } from "./pages/products/ProductDetail";
import { ProductFabricAdminAgent } from "./pages/products/ProductFabricAdminAgent";
import { ProductAIDataLens } from "./pages/products/ProductAIDataLens";
import { ProductEmbedFAST } from "./pages/products/ProductEmbedFAST";
import { ProductCertyFAST } from "./pages/products/ProductCertyFAST";
import { ProductLoadFAST } from "./pages/products/ProductLoadFAST";
import { ProductMigrateFAST } from "./pages/products/ProductMigrateFAST";
import { ComponentLab } from "./pages/ComponentLab";
import { ServiceAgenticAI } from "./pages/services/ServiceAgenticAI";
import { ServiceCloud } from "./pages/services/ServiceCloud";
import { ServiceReportingBI } from "./pages/services/ServiceReportingBI";
import { ServiceBusinessApps } from "./pages/services/ServiceBusinessApps";
import { ServiceSecurityCompliance } from "./pages/services/ServiceSecurityCompliance";
import { ServiceDataAndAnalytics } from "./pages/services/ServiceDataAndAnalytics";
import { ServiceWorkplaceTransformation } from "./pages/services/ServiceWorkplaceTransformation";
import { PartnershipSnowflake } from "./pages/partnerships/PartnershipSnowflake";
import { PartnershipDatabricks } from "./pages/partnerships/PartnershipDatabricks";
import { PartnershipMicrosoft } from "./pages/partnerships/PartnershipMicrosoft";
import { InsightsCaseStudies } from "./pages/insights/InsightsCaseStudies";
import { InsightsConsultingOffers } from "./pages/insights/InsightsConsultingOffers";
import { InsightsPowerBICustomVisualGuide } from "./pages/insights/InsightsPowerBICustomVisualGuide";
import { InsightsBestPracticeGuides } from "./pages/insights/InsightsBestPracticeGuides";
import { AboutWhoWeAre } from "./pages/AboutWhoWeAre";
import { AboutSustainability } from "./pages/AboutSustainability";
import { AboutNews } from "./pages/AboutNews";
import { AboutCareers } from "./pages/AboutCareers";
import { Contact } from "./pages/Contact";

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

export function App() {
  const s = useStyles();
  return (
    <div className={s.root}>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route
          path="/who-we-are"
          element={
            <>
              <AboutWhoWeAre />
              <CTA />
            </>
          }
        />
        <Route path="/insights" element={<Navigate to="/insights/case-studies" replace />} />
        <Route path="/insights/case-studies" element={<InsightsCaseStudies />} />
        <Route
          path="/insights/case-studies/:legacyCaseStudySlug"
          element={<Navigate to="/insights/case-studies" replace />}
        />
        <Route path="/insights/consulting-offers" element={<InsightsConsultingOffers />} />
        <Route
          path="/insights/power-bi-custom-visual-guide"
          element={<InsightsPowerBICustomVisualGuide />}
        />
        <Route path="/insights/best-practice-guides" element={<InsightsBestPracticeGuides />} />
        <Route
          path="/insights/:legacyGuideSlug"
          element={<Navigate to="/insights/best-practice-guides" replace />}
        />
        <Route
          path="/partnerships/snowflake"
          element={
            <>
              <PartnershipSnowflake />
              <CTA />
            </>
          }
        />
        <Route
          path="/partnerships/databricks"
          element={
            <>
              <PartnershipDatabricks />
              <CTA />
            </>
          }
        />
        <Route path="/products" element={<ProductsHome />} />
        <Route
          path="/products/fabric-admin-agent"
          element={
            <>
              <ProductFabricAdminAgent />
              <CTA />
            </>
          }
        />
        <Route
          path="/products/ai-datalens"
          element={
            <>
              <ProductAIDataLens />
              <CTA />
            </>
          }
        />
        <Route
          path="/products/embedfast"
          element={
            <>
              <ProductEmbedFAST />
              <CTA />
            </>
          }
        />
        <Route
          path="/products/certyfast"
          element={
            <>
              <ProductCertyFAST />
              <CTA />
            </>
          }
        />
        <Route
          path="/products/loadfast"
          element={
            <>
              <ProductLoadFAST />
              <CTA />
            </>
          }
        />
        <Route
          path="/products/migratefast"
          element={
            <>
              <ProductMigrateFAST />
              <CTA />
            </>
          }
        />
        <Route
          path="/products/:slug"
          element={
            <>
              <ProductDetail />
              <CTA />
            </>
          }
        />
        <Route path="/lab" element={<ComponentLab />} />
        <Route
          path="/who-we-are"
          element={
            <>
              <AboutWhoWeAre />
              <CTA />
            </>
          }
        />
        <Route
          path="/sustainability"
          element={
            <>
              <AboutSustainability />
              <CTA />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<AboutNews />} />
        <Route path="/careers" element={<AboutCareers />} />
      </Routes>
      <Footer />
    </div>
  );
}
