import React from 'react';

const ProspectCard = ({ name, company, industry }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '6px', marginBottom: '1rem' }}>
      <h3>{name}</h3>
      <p>{company}</p>
      <small>{industry}</small>
    </div>
  );
};

export default ProspectCard;
