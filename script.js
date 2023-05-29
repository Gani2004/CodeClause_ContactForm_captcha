 function checkCaptcha() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
      var userInput = document.getElementById("captchaInput").value;
      var captcha = document.getElementById("captcha").textContent;
      if (name === "" || email === "" || phone === "") {
        return false;
      }
if (userInput === captcha) {
        event.preventDefault();
        window.location.href = "https://internship.codeclause.com";
      } else {
        alert("Captcha did not matched.Please enter again.");
        generateCaptcha();
        return false;
      }
    }
function generateCaptcha() {
     var captcha = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%&*";
      for (var j = 0; j < 5; j++) {
        captcha += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      document.getElementById("captcha").textContent = captcha;
    }
    window.onload = generateCaptcha;