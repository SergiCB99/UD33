var valores = [true,5,false,"hola","adios",2];

if(valores[3].length<valores[4].length){
    console.log("Adios es mayor que hola");
}else{
    console.log("Hola es mayor que hola");
}

if(valores[0] != valores[2]){
    console.log(valores[0]);
}

if(valores[2] != valores[0]){
    console.log(valores[2]);
}

console.log("Suma:"+(valores[1]+valores[6]));
console.log("Resta:"+(valores[1]-valores[6]));
console.log("Multiplicacion:"+(valores[1]*valores[6]));
console.log("Division:"+(valores[1]/valores[6]));
console.log("Modulo:"+(valores[1]%valores[6]));