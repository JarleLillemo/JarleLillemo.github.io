
var person1 = new Person('Jenna', 'Smith', 32, 'female', ['music', 'skiing']);

const inputText1 = document.querySelector("#firstName");

function showBioWhenOK()  {
 var a = "Your name is: ";
 var b = inputText1.value;

 information = a + b;
 document.querySelector("#bioText").innerHTML = information;
}
