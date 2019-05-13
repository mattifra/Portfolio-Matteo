import '../stylesheets/main.scss'; 
import Lightbox from 'lightbox2';
//import _ from 'lodash';
//import Animsition from 'animsition';
import 'lazysizes';
import './components/test'
import { fellowship, total } from './components/fellowship'; //per importare i singoli metodi
import a from './components/fellowship'; //per importare il default
import * as imported from './components/moduleTest'; //per importare tutto
import multiply from './components/math';
import Animal from './components/animalClass'; //importo una classe
import Lion from './components/lionClass';
import Counter from './components/counter';
import Helper from './utils/helper';



//list of components I want in the page
let components = ['counter', 'animalClass', 'lionClass'];

//cycle the array for dynamically display them;
for (let component of components) {
  import(/* webpackChunkName: `components-[request]` */ `./components/${component}`).then((module) => {
    let DynamicComponent = module.default; // we except that the component is the the default attribute of the module
    let dynamicComponent = new DynamicComponent(component);
    dynamicComponent.render();
  }).catch(error => {
    console.error('Failed to load the component', error.stack);
  });
}

Helper.help('Heeellppp')


/*

let lion = new Lion('lion', 'blonde');
let anim = new Animal('Generic')
let counter = new Counter();
let promisetest = new promiseTest();


lion.render();
anim.render();
counter.render();
promisetest.render();


anim.hello('animall')
lion.hello('stocazz');
lion.sayHello();
anim.sayHello();

console.log(imported)
console.log(fellowship, total);
a('ciao');
console.log(multiply(5, 9));


*/
