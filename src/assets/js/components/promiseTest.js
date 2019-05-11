export default class Counter {

  waitasec(seconds) {

    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        if (seconds > 10000) {
          reject('Failed')
        } else {
          resolve('Done!');
        }
      }, seconds);

    })
  }

  render() {
   this.waitasec(9000).then(function(val) {
     console.log(val);
   }).catch(function(err) {
     console.log(err);
   })
  }

}