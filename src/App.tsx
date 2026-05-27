import { makeStyles, tokens } from "@fluentui/react-components";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Announcement } from "./components/Announcement";
import { Footer } from "./components/Footer";
import { CTA } from "./components/CTA";
import { Home } from "./pages/Home";
import { IndustryRetail } from "./pages/IndustryRetail";
import { IndustryFinancialServices } from "./pages/IndustryFinancialServices";
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
import { ServiceBusinessApps } from "./pages/ServiceBusinessApps";
import { ServiceDataAndAnalytics } from "./pages/ServiceDataAndAnalytics";
import { IndustryTechnology } from "./pages/IndustryTechnology";

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
      <Announcement />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries/retail" element={<IndustryRetail />} />
        <Route path="/industries/financial-services" element={<IndustryFinancialServices />} />
        <Route path="/industries/technology" element={<IndustryTechnology />} />
        <Route path="/services/agentic-ai" element={<ServiceAgenticAI />} />
        <Route path="/services/business-apps" element={<ServiceBusinessApps />} />
        <Route path="/services/data-and-analytics" element={<ServiceDataAndAnalytics />} />
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
