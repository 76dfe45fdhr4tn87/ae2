const values = [2,3,6,7,10];

function multipleFactorial(a){
    let resultado = 1;
    for(var i = a; i > 0 ; i--){
        resultado*=i;
    }
    return resultado;
}

const newValues = values.map(multipleFactorial);
console.log(newValues);