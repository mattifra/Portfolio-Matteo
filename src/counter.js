export default function countMe() {

  console.log('coudsntdcacdceijddr')

  if (process.env.NODE_ENV !== 'production') {
     console.log('Looks like we are in development mode!');
  }

  function testFunct() {
    console.log('test normal funct');
  }

  testFunct();
  

  let arrowFunct = () => {
    console.log('test arrow funct');
  }

  arrowFunct();

}