import React from 'react';
import PropTypes from 'prop-types';
import IndustryComponent from '../../components/industry/IndustryComponent';

const IndustryPage = ({ onNavigate }) => {
  return <IndustryComponent onNavigate={onNavigate} />;
};

IndustryPage.propTypes = {
  onNavigate: PropTypes.func,
};

export default IndustryPage;
