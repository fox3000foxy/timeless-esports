import { useState } from 'react';
import './Merch.css'; // Ensure to include a CSS file for styling

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
      name: 'Maillot Domicile',
      price: '49.99€',
      image: '/assets/merch/maillot-home.png',
      description: 'Maillot officiel de Timeless Esports',
      variants: []
    },
    {
      id: 2,
      name: 'Maillot Homme',
      price: '39.99€',
      image: '/assets/merch/polo-homme.png',
      description: 'Polo premium pour homme',
      variants: [
        {
          id: 3,
          name: 'Maillot Homme Variant',
          image: '/assets/merch/polo-homme-variant.png'
        }
      ]
    },
    {
      id: 4,
      name: 'Maillot Femme',
      price: '39.99€',
      image: '/assets/merch/polo-femme.png',
      description: 'Polo premium pour femme',
      variants: [
        {
          id: 5,
          name: 'Maillot Femme Variant',
          image: '/assets/merch/polo-femme-variant.png'
        }
      ]
    },
    {
      id: 6,
      name: 'Maillot Enfant',
      price: '29.99€',
      image: '/assets/merch/maillot-enfant.png',
      description: 'Maillot pour enfant',
      variants: []
    },
    {
      id: 7,
      name: 'Bonnet Timeless',
      price: '24.99€',
      image: '/assets/merch/bonnet.png',
      description: "Bonnet officiel de l'équipe",
      variants: []
    },
    {
      id: 8,
      name: 'Bandeau',
      price: '14.99€',
      image: '/assets/merch/bandeau.png',
      description: 'Bandeau Timeless Esports',
      variants: []
    },
    {
      id: 9,
      name: 'Mug Officiel',
      price: '12.99€',
      image: '/assets/merch/mug.png',
      description: 'Mug aux couleurs de Timeless',
      variants: []
    },
    {
      id: 10,
      name: 'Tapis Souris',
      price: '19.99€',
      image: '/assets/merch/tapis-souris.png',
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

        <div className="merch-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: '20px'
        }}>
          {merchProducts.map((product) => {
            const selectedVariantIndex = selectedVariants[product.id];
            const selectedVariant =
              selectedVariantIndex === 0 ? product : product.variants[selectedVariantIndex - 1];

            return (
              <div key={product.id} className="merch-card">
                <div className="merch-image-container" style={{ position: 'relative' }}>
                  <img
                    src={selectedVariant.image}
                    alt={selectedVariant.name}
                    className="merch-image"
                  />
                  {product.variants.length > 0 && (
                    <div className="variant-controls" style={{ position: 'absolute', top: '50%', width: '100%', display: 'flex', justifyContent: 'space-between', transform: 'translateY(-50%)' }}>
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
