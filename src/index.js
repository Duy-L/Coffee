import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store.js';
import Root from './frontend/components/root.js';

const Fill = () => {
  return ( 
    <Root store ={configureStore}/>
  )
};


ReactDOM.render(<Fill/>, document.getElementById('root'));
