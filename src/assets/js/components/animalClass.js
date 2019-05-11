export default class Animal {

  //il constructor serve per creare le proprieta alla classe ed eseguire funzioni
  //(le funzioni create fuori dal construttore sono metodi che non vengono eseguiti, a meno che non li si chiami da fuori
  constructor(el) {
    this.name =  el;
  }

  hello(stocazz) {
    console.log('HELLO', this.name, stocazz)
  }

  sayHello() {
    console.log('Hello Animal!')
  }

  render() {
    this.hello(this.name)
    this.sayHello();
  }
}

