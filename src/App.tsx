import { makeStyles, tokens } from "@fluentui/react-components";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CTA } from "./components/CTA";
import { Home } from "./pages/Home";
import { IndustryRetail } from "./pages/IndustryRetail";
import { IndustryFinancialServices } from "./pages/IndustryFinancialServices";
import { IndustryHealthcareLifeSciences } from "./pages/IndustryHealthcareLifeSciences";
import { IndustryTechnology } from "./pages/IndustryTechnology";
import { IndustryPublicSector } from "./pages/IndustryPublicSector";
import { ProductsHome } from "./pages/ProductsHome";
import { ProductDetail } from "./pages/ProductDetail";
import { ProductFabricAdminAgent } from "./pages/ProductFabricAdminAgent";
import { ProductAIDataLens } from "./pages/ProductAIDataLens";
import { ProductEmbedFAST } from "./pages/ProductEmbedFAST";
import { ProductCertyFAST } from "./pages/ProductCertyFAST";
import { ProductLoadFAST } from "./pages/ProductLoadFAST";
import { ProductMigrateFAST } from "./pages/ProductMigrateFAST";
import { ComponentLab } from "./pages/ComponentLab";
import { ServiceAgenticAI } from "./pages/ServiceAgenticAI";
import { ServiceCloud } from "./pages/ServiceCloud";
import { ServiceReportingBI } from "./pages/ServiceReportingBI";
import { ServiceBusinessApps } from "./pages/ServiceBusinessApps";
import { ServiceSecurityCompliance } from "./pages/ServiceSecurityCompliance";
import { ServiceDataAndAnalytics } from "./pages/ServiceDataAndAnalytics";
import { ServiceWorkplaceTransformation } from "./pages/ServiceWorkplaceTransformation";
import { PartnershipSnowflake } from "./pages/PartnershipSnowflake";
import { PartnershipMicrosoft } from "./pages/PartnershipMicrosoft";

const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground1,
    minHeight: "100vh",
  },
});

export function App() {
  const s = useStyles();
  return (
    <div className={s.root}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries/retail" element={<IndustryRetail />} />
        <Route path="/industries/financial-services" element={<IndustryFinancialServices />} />
        <Route path="/industries/healthcare-life-sciences" element={<IndustryHealthcareLifeSciences />} />
        <Route path="/industries/technology" element={<IndustryTechnology />} />
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
          path="/partnerships/snowflake"
          element={
            <>
              <PartnershipSnowflake />
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
      </Routes>
      <Footer />
    </div>
  );
}
