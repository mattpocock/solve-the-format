import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.scss';

const Layout = ({ Sidebar, Content }) => (
  <div className={styles.container}>
    <div className={styles.sidebar}>{Sidebar}</div>
    <div className={styles.content}>{Content}</div>
  </div>
);

export default Layout;
