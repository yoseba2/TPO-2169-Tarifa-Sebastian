function validar() {
    var nombre, apellido, correo;
    nombre = document.getElementById("fname").value;
    apellido = document.getElementById("lname").value;
    correo = document.getElementById("correo").value;

    if (nombre === "" || apellido === "" || correo === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }
}