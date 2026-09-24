import React from 'react';
import PropTypes from 'prop-types';
import ServicesComponent from '../../components/services/ServicesComponent';

const ServicesPage = ({ onNavigate }) => {
  return <ServicesComponent onNavigate={onNavigate} />;
};

ServicesPage.propTypes = {
  onNavigate: PropTypes.func,
};

export default ServicesPage;
