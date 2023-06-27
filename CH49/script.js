// function submitForm(name1,email1,password1) {
//     // Get form values
//     var name = document.getElementById("name1").value;
//     var email = document.getElementById("email1").value;
//     var password = document.getElementById("password1").value;

//     // Display form values in the browser
//     var resultDiv = document.getElementById("result");
//     resultDiv.innerHTML = "<p>Name: " + name + "</p>" +
//                           "<p>Email: " + email + "</p>" +
//                           "<p>Password: " + password + "</p>";

//     // Clear form inputs
//     document.getElementById("name").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("password").value = "";
//   }
function submitForm(name1, email1, password1) {
  // Get form values
  var name = document.getElementById(name1).value;
  var email = document.getElementById(email1).value;
  var password = document.getElementById(password1).value;

  // Display form values in the browser
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<p>Name: " + name + "</p>" +
    "<p>Email: " + email + "</p>" +
    "<p>Password: " + password + "</p>";

  // Clear form inputs
  document.getElementById(name1).value = "";
  document.getElementById(email1).value = "";
  document.getElementById(password1).value = "";
}
function expand(p2, button){
    let check = document.querySelector('#' + p2)
    let Button = document.getElementById(button)
    if(check.style.display == 'none'){
      check.style.display= 'block';
      Button.innerHTML="Read Less"
    }
    else{
    
        check.style.display='none';
        Button.innerHTML="Read More"
      
    }
}
// function addStd(name, email, password){


//   let name =document.getElementById('name').value
//   let email =document.getElementById('email').value
//   let password =document.getElementById('password').value

//   let newName, newEmail, newPassword;
//   newName.innerHTML="<td>"+name+"</td>"
//   newEmail.innerHTML="<td>"+email+"</td>"
//   newPassword.innerHTML="<td>"+password+"</td>"

// }
  
function openModal(imageSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImg.src = imageSrc;

  var closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = function() {
    modal.style.display = "none";
  }
}

  
  
  
  
  
  
 
  
  



