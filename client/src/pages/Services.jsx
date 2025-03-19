// pages/Services.jsx
import React from "react";
import PageHeader from "../components/common/pageHeader/PageHeader";
import ServiceProviders from "../components/sections/services/ServiceProviders";

const Services = () => {
  return (
    <div>
      <PageHeader
        title="Our Service Providers"
        description="Connect with skilled professionals for any service you need. Browse through our extensive network of verified service providers."
      />
      <ServiceProviders />
    </div>
  );
};

export default Services;
