import './styles/style.css';

import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import Modal from 'react-modal';

Modal.setAppElement('#react-container');
ReactDOM.render(<App />, document.getElementById('react-container'));