import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MARKETPLACE_URL = "https://marketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=Maq%20software";

export function InsightsConsultingOffers() {
  const navigate = useNavigate();

  useEffect(() => {
    window.open(MARKETPLACE_URL, "_blank", "noopener,noreferrer");
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate("/insights/case-studies", { replace: true });
  }, [navigate]);

  return (
    <main style={{ padding: "48px 24px", textAlign: "center" }}>
      <p>Redirecting to Microsoft Marketplace...</p>
      <p>
        <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">
          Open marketplace offers
        </a>
      </p>
    </main>
  );
}
