//var check = function() {
 // if(document.getElementById('password').value == 
 //   document.getElementById('password2').value) {
  //    document.getElementById('message').style.color = 'green';
      // document.getElementById('message').innerHTML = 'matching';
      
   // }
   // else {
   //   document.getElementById('message').style.color = 'red';
    //  document.getElementById('message').innerHTML = ' not matching';
   // }
//}
function myFunction() {
  var pass1 = document.getElementById('password').value;
  var pass2 = document.getElementById('password2').value;
   if (pass1 == pass2) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';

  }
  else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = '**Passwords do not match**';
  }
  document.getElementById('myform').submit();
}
function check() {
  var ph = document.getElementById('number').value;
  if(ph.length !== 11) {
    document.getElementById('message2').innerHTML = '**Phone number not up to 11 digits**';
   
  }
  if(ph.length > 11) {
    document.getElementById('message2').innerHTML = '**Phone number more than 11 digits**';
  }
}
