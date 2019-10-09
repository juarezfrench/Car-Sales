import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import rootReducer from './components/carReducers/'

import 'bulma/css/bulma.css';
import './styles.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={rootReducer}>
<App /> 
</Provider>,

rootElement);
