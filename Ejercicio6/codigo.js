var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

do {
    var numero_dni = prompt("Numero de DNI");
} while (numero_dni < 0 || numero_dni > 99999999);

var letra_dni = prompt("Letra de DNI");

var posicion = numero_dni % 23;

if (letras[posicion] == letra_dni) {
    alert("Las letras coinciden");
} else {
    alert("Las letras no coinciden");
}