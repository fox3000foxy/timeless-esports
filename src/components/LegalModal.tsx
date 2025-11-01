import '../styles/LegalModal.css';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'legal' | 'privacy';
}

const LegalModal = ({ isOpen, onClose, type }: LegalModalProps) => {
  if (!isOpen) return null;

  const content = type === 'legal' ? (
    <>
      <h2>Mentions Légales</h2>
      <div className="legal-content">
        <section>
          <h3>1. Informations légales</h3>
          <p>
            Timeless<br />
            Société fictive à responsabilité limitée<br />
            Capital social : 10 000€<br />
            Siège social : 123 Avenue des Jeux, 75001 Paris<br />
            SIRET : 123 456 789 00001<br />
            TVA Intracommunautaire : FR 12 345678901
          </p>
        </section>

        <section>
          <h3>2. Hébergement</h3>
          <p>
            Ce site est hébergé par :<br />
            OVH SAS<br />
            2 rue Kellermann<br />
            59100 Roubaix - France
          </p>
        </section>

        <section>
          <h3>3. Propriété intellectuelle</h3>
          <p>
            L'ensemble des éléments composant ce site (textes, images, logos, etc.) est protégé par le droit d'auteur
            et reste la propriété exclusive de Timeless. Toute reproduction, représentation ou diffusion,
            en tout ou partie, du contenu de ce site sur quelque support que ce soit est interdite sans l'autorisation
            expresse de Timeless.
          </p>
        </section>

        <section>
          <h3>4. Responsabilité</h3>
          <p>
            Timeless s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site.
            Toutefois, Timeless ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations
            mises à disposition sur ce site.
          </p>
        </section>
      </div>
    </>
  ) : (
    <>
      <h2>Politique de Confidentialité</h2>
      <div className="legal-content">
        <section>
          <h3>1. Collecte des données</h3>
          <p>
            Nous collectons uniquement les données personnelles nécessaires à la gestion de nos services :
            - Nom et prénom
            - Adresse email
            - Informations de commande
          </p>
        </section>

        <section>
          <h3>2. Utilisation des données</h3>
          <p>
            Vos données sont utilisées pour :
            - Gérer vos commandes
            - Vous informer sur nos services
            - Améliorer votre expérience utilisateur
          </p>
        </section>

        <section>
          <h3>3. Protection des données</h3>
          <p>
            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles
            contre tout accès, modification, divulgation ou destruction non autorisée.
          </p>
        </section>

        <section>
          <h3>4. Vos droits</h3>
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de
            portabilité de vos données personnelles. Pour exercer ces droits, contactez-nous à
            privacy@timeless-esport.com
          </p>
        </section>

        <section>
          <h3>5. Cookies</h3>
          <p>
            Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez
            à tout moment désactiver ces cookies dans les paramètres de votre navigateur.
          </p>
        </section>
      </div>
    </>
  );

  return (
    <div className="legal-modal-overlay" onClick={onClose}>
      <div className="legal-modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        {content}
      </div>
    </div>
  );
};

export default LegalModal;