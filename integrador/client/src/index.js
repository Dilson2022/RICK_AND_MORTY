import React from 'react'
import *as ReactDOMClient from 'react-dom/client';
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import{Provider} from "react-redux";
import store from "./Redux/store";
// import reportWebVitals from "./reportWebVitals"

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);
root.render(

<Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>,
  

);


