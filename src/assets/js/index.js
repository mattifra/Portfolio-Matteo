import '../scss/main.scss'; 
import countMe from './counter.js';
import Lightbox from 'lightbox2';
//import _ from 'lodash';
//import Animsition from 'animsition';

function component() {
  console.log('hello webpack');
}

component();
countMe();


function getComponent() {

 return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
   var element = document.createElement('div');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;

   }).catch(error => 'An error occurred while loading the component');
  }
  
  getComponent().then(component => {
     console.log(component);
})
