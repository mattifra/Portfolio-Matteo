import Animal from './animalClass';

//extend Animal class
export default class Lion extends Animal {
  constructor(el, hair) {
    super(el); //estendo la classe che sto esportando
    this.hair = hair;
  }

  sayHello() {
    console.log('hello Lion!')
  }

  render() {
    this.sayHello();
  }
}
