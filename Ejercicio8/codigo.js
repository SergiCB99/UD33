
function queEs(numero){
    if(numero%2==0){
        alert("Es par");
    }else{
        alert("Es impar");
    }
}

do {
    var numero = prompt("Numero");
} while (numero<=0);

queEs(numero);