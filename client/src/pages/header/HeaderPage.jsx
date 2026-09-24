import React from 'react';
import PropTypes from 'prop-types';
import HeaderComponent from '../../components/header/HeaderComponent';

const HeaderPage = ({ activeTab, onSelectTab }) => {
  return <HeaderComponent activeTab={activeTab} onSelectTab={onSelectTab} />;
};

HeaderPage.propTypes = {
  activeTab: PropTypes.string,
  onSelectTab: PropTypes.func,
};

export default HeaderPage;
