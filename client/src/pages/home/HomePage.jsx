import React from 'react';
import PropTypes from 'prop-types';
import HomeComponent from '../../components/home/HomeComponent';

const HomePage = ({ onNavigate }) => {
  return <HomeComponent onNavigate={onNavigate} />;
};

HomePage.propTypes = {
  onNavigate: PropTypes.func,
};

export default HomePage;
