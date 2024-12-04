var form = document.querySelector("#loginForm");
var emailLogin = document.querySelector("#email");
var passLogin = document.querySelector("#password");

var existacc = ['ahmed@gmail.com', 'ali@gmail.com' , 'nour@gmail.com'];


form.addEventListener("submit", function(e){
        e.preventDefault();
        if(emailLogin.value==""|| passLogin.value==""){
alert("pls enter email and password")
        return;
        }

        var user = {
            email: emailLogin.value,
            password: passLogin.value
        };
        console.log(user);
    
        
    })



    document.getElementById('loginBtn').addEventListener('click', () => {
        const emailLogin = document.getElementById('email').value.trim();
        const resultElement = document.getElementById('result');
  
      
        if (existacc.includes(emailLogin)) {
            window.location.href = "http://127.0.0.1:5500/home.html";
          
        } else {
            
            resultElement.textContent = 'Email is unavailable, pls create one';
        }
      });