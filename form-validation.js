
/** comment **/
function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var sln = userEntered.length;
  if(sln < 6 || userEntered.search(" ") != -1 ) {
  //Show message that there is an error with the username...
  document.getElementById("usernameError").innerHTML ="Bad username.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.remove("has-success");
  document.getElementById("usernameGroup").classList.add("has-error");
}
  else
  
{
  document.getElementById("usernameGroup").classList.add("hidden-message");
  document.getElementById("usernameGroup").classList.remove("shown-message");
  
  
  document.getElementById("usernameGroup").classList.remove("has-error");
  document.getElementById("usernameGroup").classList.add("has-success");
}

  if(passEntered.toLowerCase() == "password" || passEntered == userEntered || passEntered.length < 6 || passEntered.length > 20 ) {
  //Show message that there is an error with the password...
  document.getElementById("passwordError").innerHTML="Bad password."
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.remove("has-success");
  document.getElementById("passwordGroup").classList.add("has-error");
}
  else
{ 
  document.getElementById("passwordGroup").classList.add("hidden-message");
  document.getElementById("passwordGroup").classList.remove("shown-message");
  
  document.getElementById("passwordGroup").classList.remove("has-error");
  document.getElementById("passwordGroup").classList.add("has-success");
  
}
}
function register() {
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  
  alert(userEntered + " " + passEntered);
  
}

function validateUsername() {
  
   var userEntered = document.getElementById("user").value;
   var sln = userEntered.length;
   
  if(sln < 6 || userEntered.search(" ") != -1 ) 
  {
  
  document.getElementById("usernameError").innerHTML ="Bad username.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.remove("has-success");
  document.getElementById("usernameGroup").classList.add("has-error");
  }
  else
  
{
  document.getElementById("usernameGroup").classList.add("hidden-message");
  document.getElementById("usernameGroup").classList.remove("shown-message");
  
  
  document.getElementById("usernameGroup").classList.remove("has-error");
  document.getElementById("usernameGroup").classList.add("has-success");
}


}
function validatePassword() 
{
  var passEntered = document.getElementById("pass").value;
  var userEntered = document.getElementById("user").value;
  
  if(passEntered.toLowerCase() == "password" || passEntered == userEntered || passEntered.length < 6 || passEntered.length > 20 ) 
  {
 
    document.getElementById("passwordError").innerHTML="Bad password."
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
 
    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else
{ 
  document.getElementById("passwordGroup").classList.add("hidden-message");
  document.getElementById("passwordGroup").classList.remove("shown-message");
  
  document.getElementById("passwordGroup").classList.remove("has-error");
  document.getElementById("passwordGroup").classList.add("has-success");
  }

}
