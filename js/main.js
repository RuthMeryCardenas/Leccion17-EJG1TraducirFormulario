function translate (){
  document.getElementById('form-signin-heading').innerHTML = "Por favor inicia sesión";
  document.getElementById('inputEmail').placeholder = "Correo Electrónico";
  document.getElementById('inputPassword').placeholder = "Contraseña";
  document.getElementsByTagName('SPAN')[0].innerHTML = "Recordar datos";
  document.getElementsByClassName('btn btn-lg btn-primary btn-block submit-btn')[0].innerHTML = "Iniciar Sesión";
}
translate();
function printData (){
  var data = "El correo eletrónico ingresado es: " + "<br>" + document.getElementById('inputEmail').value + "<br>" +
             "La clave ingresada es: " + "<br>" + document.getElementById('inputPassword').value;
  document.getElementById('data').innerHTML = data;
  document.getElementById("form-signin").reset();
  //alert("hola");
}
// window.onload = function () {
// }
