var terms = ["Web Designer", "Frontend Dev", "Illustrator", " Trekker", " Traveler"];

function rotateTerm() {
  var ct = $("#rotate").data("term") || 0;
  $("#rotate").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct]).fadeIn()
              .delay(2000).fadeOut(400, rotateTerm);
}
$(rotateTerm);

$(".animsition").animsition({
	inDuration: 500,
    outDuration: 500,
    linkElement: 'a',
});


