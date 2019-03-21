import _ from 'lodash';
import './style.css'; 
import countMe from './counter.js';


function component() {
  console.log('hello webpack');
}

function testLodash() {
  let element = document.createElement('div');

   // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(testLodash());
component();
countMe();
