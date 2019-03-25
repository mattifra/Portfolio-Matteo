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
  
  var terms = ["Web Designer", "Frontend Dev", "Illustrator", " Trekker", " Traveler"];

  function rotateTerm() {
    var ct = $("#rotate").data("term") || 0;
    $("#rotate").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct]).fadeIn()
                .delay(2000).fadeOut(400, rotateTerm);
  }
  $(rotateTerm);



}