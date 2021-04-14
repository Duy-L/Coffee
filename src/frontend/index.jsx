import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.js';

const Fill = () => {
  return ( <div>
    <Root store ={configureStore}/>
  </div>)
};
// const root = document.getElementById('content');

// ReactDOM.render(<Fill/>, root);
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  ReactDOM.render(<Fill/>, root);
});