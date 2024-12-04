var form = document.querySelector("#registerForm");
var nameRegister = document.querySelector("#name");
var emailRegister = document.querySelector("#email");
var passRegister = document.querySelector("#password");



form.addEventListener("submit", function(e){
    e.preventDefault();
    if(nameRegister.value=="" || emailRegister.value==""|| passRegister.value=="" ){
    alert("pls fill the empty inputs")
    return;
    }

    var user = {
        name : nameRegister.value,
        email : emailRegister.value,
        password: passRegister.value
    };
    console.log(user);
})

function validateName(elm){
var regex=/^[A-z][a-z]{3,15}$/;
var matched = regex.test(elm.value);

if(matched){
    elm.classList.remove("is-invalid");
    elm.classList.add("is-valid");
}else{
    elm.classList.add("is-invalid");
    elm.classList.remove("is-valid");
}
}

function validateEmail(elm){
    var regex=/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
var matched = regex.test(elm.value);

if(matched){
    elm.classList.remove("is-invalid");
    elm.classList.add("is-valid");
}else{
    elm.classList.add("is-invalid");
    elm.classList.remove("is-valid");
}
}

function validatepass(elm){
    var regex=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
var matched = regex.test(elm.value);

if(matched){
    elm.classList.remove("is-invalid");
    elm.classList.add("is-valid");
}else{
    elm.classList.add("is-invalid");
    elm.classList.remove("is-valid");
}
}

document.getElementById("registerBtn").addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/home.html";})