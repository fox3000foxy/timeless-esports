import { useState } from 'react';
import '../styles/Merch.css'; // Ensure to include a CSS file for styling

interface Variant {
  id: number;
  name: string;
  image: string;
}

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  variants: Variant[];
}

const Merch = () => {
  const merchProducts: Product[] = [
    {
      id: 1,
      name: 'Maillot Homme',
      price: '39.99€',
      image: '/assets/merch/maillot-homme.avif',
      description: 'Maillot officiel pour homme',
      variants: []
    },
    {
      id: 2,
      name: 'Maillot Femme',
      price: '39.99€',
      image: '/assets/merch/maillot-femme.avif',
      description: 'Maillot officiel pour femme',
      variants: []
    },
    {
      id: 3,
      name: 'Maillot Enfant',
      price: '29.99€',
      image: '/assets/merch/maillot-enfant.avif',
      description: 'Maillot pour enfant',
      variants: []
    },
    {
      id: 4,
      name: 'Sweet Unisexe',
      price: '44.99€',
      image: '/assets/merch/sweet-unisexe.avif',
      description: 'Sweat-shirt unisexe confortable',
      variants: []
    },
    {
      id: 5,
      name: 'Bonnet Timeless',
      price: '24.99€',
      image: '/assets/merch/bonnet.avif',
      description: "Bonnet officiel de l'équipe",
      variants: []
    },
    {
      id: 6,
      name: 'Mug Officiel',
      price: '12.99€',
      image: '/assets/merch/mug.avif',
      description: 'Mug aux couleurs de Timeless',
      variants: []
    },
    {
      id: 7,
      name: 'Tapis Souris',
      price: '19.99€',
      image: '/assets/merch/tapis-souris.avif',
      description: 'Tapis souris gaming Timeless',
      variants: []
    }
  ];

  const [selectedVariants, setSelectedVariants] = useState<Record<number, number>>(
    merchProducts.reduce((acc: Record<number, number>, product) => {
      acc[product.id] = 0;
      return acc;
    }, {})
  );

  const handleVariantChange = (productId: number, direction: number) => {
    setSelectedVariants((prev) => {
      const currentVariant = prev[productId];
      const product = merchProducts.find((p) => p.id === productId);
      if (!product) return prev;
      const totalVariants = product.variants.length;
      const newVariant = (currentVariant + direction + totalVariants + 1) % (totalVariants + 1);
      return { ...prev, [productId]: newVariant };
    });
  };

  return (
    <section id="merch" className="merch-section">
      <div className="merch-background-pattern"></div>
      <div className="container">
        <h2 className="section-title">Boutique Officielle</h2>
        <p className="section-subtitle">
          Portez les couleurs de Timeless Esports avec style
        </p>

        <div className="merch-grid">
          {merchProducts.map((product) => {
            const selectedVariantIndex = selectedVariants[product.id];
            const selectedVariant =
              selectedVariantIndex === 0 ? product : product.variants[selectedVariantIndex - 1];

            return (
              <div key={product.id} className="merch-card">
                <div className="merch-image-container">
                  <img
                    src={selectedVariant.image}
                    alt={selectedVariant.name}
                    className="merch-image"
                    style={{ objectFit: 'cover' }}
                  />
                  {product.variants.length > 0 && (
                    <div className="variant-controls">
                      <button className="variant-arrow left" onClick={() => handleVariantChange(product.id, -1)}>◀</button>
                      <button className="variant-arrow right" onClick={() => handleVariantChange(product.id, 1)}>▶</button>
                    </div>
                  )}
                </div>
                <div className="merch-content">
                  <h3 className="merch-name">{selectedVariant.name}</h3>
                  <p className="merch-description">{product.description}</p>
                  <div className="merch-footer">
                    <span className="merch-price">{product.price}</span>
                    <button className="merch-button">Ajouter</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Merch;
