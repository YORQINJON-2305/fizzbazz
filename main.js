var elForm = document.querySelector("form");
var elInput = elForm.querySelector(".user-message");
var elAlert = elForm.querySelector(".alert");

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    var inputValue = Number(elInput.value);

    if(inputValue % 3 == 0 && inputValue % 5 == 0){
        elAlert.textContent = "FizzBuzz";
        elAlert.classList.remove("alert-warning");
        elAlert.classList.remove("alert-success");
        elAlert.classList.remove("alert-danger");
        elAlert.classList.add("alert-primary");
    } else if(inputValue % 3 == 0){
        elAlert.textContent = "Fizz";
        elAlert.classList.remove("alert-primary");
        elAlert.classList.remove("alert-success");
        elAlert.classList.remove("alert-danger");
        elAlert.classList.add("alert-warning");
    } else if(inputValue % 5 == 0){
        elAlert.textContent = "Buzz";
        elAlert.classList.remove("alert-warning");
        elAlert.classList.remove("alert-primary");
        elAlert.classList.remove("alert-danger");
        elAlert.classList.add("alert-success");
    }   else{
        elAlert.textContent = `"${inputValue}"  3ga ham 5 ga ham bo'linmaydi!`
        elAlert.classList.remove("alert-success");
        elAlert.classList.remove("alert-warning");
        elAlert.classList.remove("alert-primary");
        elAlert.classList.add("alert-danger");
    }

    elInput.value = "";
})