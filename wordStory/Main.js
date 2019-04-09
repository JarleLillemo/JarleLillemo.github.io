
const inputWord = document.querySelector("#words");
const spansAdjektiv = document.querySelectorAll("span.adjektiv")
let counter = 0;

function words() {
  var word = inputWord.value;

  if(spansAdjektiv.length > counter) {
    spansAdjektiv[counter].innerText = word;
    counter += 1;
  } else {
    alert("Alle ord brukt opp");
  }

  inputWord.value = "";
}

inputWord.addEventListener("keydown", function(e) {
  if(e.keyCode === 13) {
    words();
  }
});

function nextSite() {
  window.location='nextSite/nextSite.html';
}
