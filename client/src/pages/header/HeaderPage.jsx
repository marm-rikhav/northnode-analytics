import React from 'react';
import HeaderComponent from '../../components/header/HeaderComponent';

const HeaderPage = ({ activeTab, onSelectTab }) => {
  return <HeaderComponent activeTab={activeTab} onSelectTab={onSelectTab} />;
};

export default HeaderPage;
