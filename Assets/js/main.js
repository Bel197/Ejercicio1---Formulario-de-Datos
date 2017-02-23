function imprimirResultado() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var dni = document.getElementById("dni").value;
  var direccion = document.getElementById("direccion").value;
if(nombre!="" && apellido!="" && dni!="" && direccion!=""){
    document.getElementById("resultado").innerHTML ='<ul><li>Nombre:' + nombre +
    '</li><li>Apellido:' + apellido +
    '</li><li>DNI:' + dni + '</li><li>Direccion:' + direccion +'</li></ul>';
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("dni").value="";
    document.getElementById("direccion").value="";
  }

}
