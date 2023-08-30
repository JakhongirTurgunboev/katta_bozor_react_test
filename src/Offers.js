import React, { useState, useEffect } from 'react';

function Offers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch('https://www.kattabozor.uz/hh/test/api/v1/offers')
      .then(response => response.json())
      .then(data => setOffers(data.offers))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="offers-container">
      <h1>Offers</h1>
      <ul className="offers-list">
        {offers.map(offer => (
          <li key={offer.id} className="offer">
            <div className="offer-image">
              <img src={offer.image.url} alt={offer.name} />
            </div>
            <div className="offer-details">
              <h2>{offer.name}</h2>
              <p>Brand: {offer.brand}</p>
              <p>Category: {offer.category}</p>
              <p>Merchant: {offer.merchant}</p>
              <ul className="attributes">
                {offer.attributes.map(attribute => (
                  <li key={attribute.name}>
                    <strong>{attribute.name}:</strong> {attribute.value}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Offers;
