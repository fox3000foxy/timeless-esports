import { useState } from "react";
import LegalModal from "./LegalModal";

const Footer = () => {
  const [modalType, setModalType] = useState<"legal" | "privacy" | null>(null);
  return (
    <footer
      className="footer-section"
      style={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        padding: "2rem 1rem",
        textAlign: "center",
        fontSize: "0.9rem",
      }}
    >
      <div
        className="footer-content"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <p style={{ marginBottom: "1rem" }}>
          &copy; 2025 Timeless. Tous droits réservés.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "1rem",
            fontSize: "0.85rem",
          }}
        >
          <button
            onClick={() => setModalType("legal")}
            style={{
              background: "none",
              border: "none",
              color: "var(--silver)",
              cursor: "pointer",
              padding: "0.5rem",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--primary-red)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--silver)")
            }
          >
            Mentions légales
          </button>
          <button
            onClick={() => setModalType("privacy")}
            style={{
              background: "none",
              border: "none",
              color: "var(--silver)",
              cursor: "pointer",
              padding: "0.5rem",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--primary-red)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--silver)")
            }
          >
            Politique de confidentialité
          </button>
        </div>
        <LegalModal
          isOpen={modalType !== null}
          onClose={() => setModalType(null)}
          type={modalType === "legal" ? "legal" : "privacy"}
        />
      </div>
    </footer>
  );
};

export default Footer;
