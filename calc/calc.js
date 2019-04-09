const inputNumber1 = document.querySelector("#value1");
const inputNumber2 = document.querySelector("#value2");
const buttonCalculate = document.querySelector("#calculate");
const buttonBalloons = document.querySelector("#balloons");


function calc() {
  var a = parseInt(inputNumber1.value);
  var b = parseInt(inputNumber2.value);
  var op = document.querySelector("#operator").value;
  var calculate;

    if (op == "add") {
      calculate = a + b;
    } else if (op == "min")  {
      calculate = a - b;
    } else if (op == "div")  {
      calculate = a / b;
    } else if (op == "mul")  {
      calculate = a * b;
    }
    document.querySelector("#result").innerHTML = calculate;
  }


  function balloon()  {
    var a = parseInt(document.querySelector("#result").innerText);

    if(a >= 1) {
      var img = document.getElementById('image-holder');
      img.src = "https://dedhamflowershop.com/wp-content/uploads/2016/10/plainlatex.jpg";
      img.style.display = 'block';
    } else if (a <= 0 || isNaN(a)) {
      var img = document.getElementById('image-holder');
      img.src = "https://i2.wp.com/sammyjballoons.com/wp-content/uploads/2012/06/20120618-no-balloons.jpg?ssl=1";
      img.style.display = 'block';
      }
    }


inputNumber1.addEventListener("input", onNumberInputHandler);
inputNumber2.addEventListener("input", onNumberInputHandler);


function onNumberInputHandler(e) {
    let shouldDisableButtons = !hasBothInputsValues();

    buttonCalculate.disabled = shouldDisableButtons;
    buttonBalloons.disabled = shouldDisableButtons;
}

function hasBothInputsValues() {
  return Boolean(inputNumber1.value) && Boolean(inputNumber2.value);
}

// inputNumber1.addEventListener("focus", function() {
//   inputNumber1.style.background = "pink";
// });
//
// inputNumber1.addEventListener("blur", function() {
//   inputNumber1.style.background = "";
// });
