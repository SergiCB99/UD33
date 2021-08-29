do {
    var numero = prompt("Numero");
} while (numero<=0);

var factorial = 1;

for(var i = 1;i<=numero;i++){
    factorial = factorial*i;
}

alert(factorial);