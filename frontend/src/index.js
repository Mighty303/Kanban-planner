import './styles/style.css';

import {createRoot}  from 'react-dom/client';
import React from 'react';
import App from './App';
import Modal from 'react-modal';

Modal.setAppElement('#react-container');
const root = createRoot(document.getElementById('react-container'));
root.render(<App />);