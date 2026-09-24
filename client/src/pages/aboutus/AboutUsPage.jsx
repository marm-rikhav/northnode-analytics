import React from 'react';
import PropTypes from 'prop-types';
import AboutUsComponent from '../../components/aboutus/AboutUsComponent';

const AboutUsPage = ({ onNavigate }) => {
  return <AboutUsComponent onNavigate={onNavigate} />;
};

AboutUsPage.propTypes = {
  onNavigate: PropTypes.func,
};

export default AboutUsPage;
