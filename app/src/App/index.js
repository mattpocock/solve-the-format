import React from 'react';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import './index.scss';

const App = () => <Layout Sidebar={<Sidebar />} />;

module.exports = App;
