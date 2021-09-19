
function validate() {
      var firstName = document.forms["myForm"]["firstName"].value;
      if (firstName == "") {
          alert("Please enter your first name");
          return false;
      }
  
      var lastName = document.forms["myForm"]["lastName"].value;
      if (lastName == "") {
          alert("Please enter your last name");
          return false;
      }
  
      var address = document.forms["myForm"]["address"].value;
      if (address == "") {
          alert("Please enter your address");
          return false;
      }
  
      var city = document.forms["myForm"]["city"].value;
      if (city == "") {
          alert("Please enter your city");
          return false;
      }
      
      var postalCode = document.forms["myForm"]["postalCode"].value;
      var zipCheck = /^([ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy][0-9][A-Za-z][0-9][A-Za-z][0-9])*$/;
      if (!zipCheck.test(postalCode)) {
          alert("Please enter a valid postal code");
          return false;
      }
  
      var age = document.forms["myForm"]["age"].value;
      if(age == ""){
          alert("Please enter your age");
          return false;
      }
      else if (age < 18 || age > 100) {
          alert("Age should be between 18 and 100");
          return false;
      }
     
  
      var email = document.forms["myForm"]["email"].value;
      var emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!emailCheck.test(email)) {
          alert("Please enter a valid email address");
          return false;
      }
  
      var password = document.forms["myForm"]["password"].value;
      var confirm = document.forms["myForm"]["confirm"].value;
      var passCheck= /^(?=.*?[A-Z]{1,})(?=.*?[a-z]{0,})(?=.*?[0-9]{1,})(?=.*?[#?!@$%^&*-]{0,}).{6,}$/;
  
      if (password == "") {
          alert("Please enter a password");
          return false;
      }
      else if (confirm == "") {
          alert("Please enter Password confirmation");
          return false;
      }
  
      else if(!passCheck.test(password)){
          alert("Password must be at least 6 character,at least one Upper case character and one lower case character");
          return false;
      }
      else if (password != confirm) {
          alert("Passwords did not match");
          return false;
      }
  
      var prov = document.forms["myForm"]["province"].value;
      var provCheck = /^(?:AB|BC|MB|N[BLTSU]|ON|PE|QC|SK|YT)*$/;

      if (prov == "") {
          alert("Please enter your province");
          return false;
      }
      else if (prov !== ""){
          while (provCheck.test(prov)) {
              alert("Thanks for registering in our website.");
              return true;         
            }
          alert("Please enter your province");
          return false
      }
  }