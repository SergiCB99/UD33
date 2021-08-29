
function comprovarCadena(cadena){

    if(cadena == cadena.toLowerCase()){
        alert("Todo minusculas");
    }else if(cadena == cadena.toUpperCase()){
        alert("Todo mayusculas");
    }else{
        alert("Mezclado");
    }
}

var cadena = prompt("Cadena");

comprovarCadena(cadena);