'use client';

import { useState } from 'react';

// Comes back as `any` from JSON.parse so the type system doesn't catch the bug.
// At runtime each price.price is a string ("3.50"), not a number.
const PRICES: any[] = JSON.parse(`[
  { "label": "Coffee",    "price": "3.50"  },
  { "label": "Croissant", "price": "4.25"  },
  { "label": "Bagel",     "price": "2.75"  }
]`);

function formatPrice(price: number): string {
  // FIX: Convert to number first to handle string inputs
  return `$${Number(price).toFixed(2)}`;
}

export default function PriceFormatter() {
  const [formatted, setFormatted] = useState<string[] | null>(null);

  const handleClick = () => {
    setFormatted(PRICES.map(p => `${p.label}: ${formatPrice(p.price)}`));
  };

  return (
    <div className="card">
      <h2>4. Price formatter</h2>
      <p>Should print each item with its price formatted to 2dp.</p>
      <button onClick={handleClick}>Format prices</button>
      {formatted && (
        <ul style={{ marginTop: 12 }}>
          {formatted.map((line, i) => (
            <li key={i} className="value">{line}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
