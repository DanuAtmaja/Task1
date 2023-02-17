import React from 'react';

const ServiceItem = ({service}) => {
  return (
    <div className="service-item">
      <img src="/icon-settings-100.svg" alt="service icon"/>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceItem;
