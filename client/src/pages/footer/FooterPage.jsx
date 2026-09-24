import React from 'react';
import PropTypes from 'prop-types';
import FooterComponent from '../../components/footer/FooterComponent';

const FooterPage = ({ onNavigate }) => {
  return <FooterComponent onNavigate={onNavigate} />;
};

FooterPage.propTypes = {
  onNavigate: PropTypes.func,
};

export default FooterPage;
