var elForm = document.querySelector("form");
var elInput = elForm.querySelector(".user-message");
var elFizzbuzzText = document.querySelector(".fizzbuzz-text");
var elFizzText = document.querySelector(".fizz-text");
var elBuzzText = document.querySelector(".buzz-text");
var elAlertText = document.querySelector(".js-alert");


var fizzBuzz = [];
var fizz = [];
var buzz = [];

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    var inputValue = Number(elInput.value);


    if(inputValue % 3 == 0 && inputValue % 5 == 0){
      fizzBuzz.push(inputValue);
      fizz.push(inputValue);
      buzz.push(inputValue);

      elFizzbuzzText.textContent = fizzBuzz.join(",");
      elFizzText.textContent = fizz.join(",");
      elBuzzText.textContent = buzz.join(",");

      elAlertText.textContent = "";
    } else if(inputValue % 3 == 0){
      fizz.push(inputValue);

      elFizzText.textContent = fizz.join(",");

      elAlertText.textContent = "";

    } else if(inputValue % 5 == 0){
      buzz.push(inputValue);

      elBuzzText.textContent = buzz.join(",");

      elAlertText.textContent = "";
    } else{
        elAlertText.textContent = `${inputValue}, 3ga ham 5ga ham bo'linmaydi!`;
        elAlertText.classList.add("alert-danger")
    }

    elInput.value = "";
})