const values = ["Ana",2,"Javi",5,"Roberto",7,"Vanessa"];

/* //a
function esTexto(item){
    if(typeof item === "string"){
        return item;
    }
}

const valuesString = values.filter(esTexto);
console.log(valuesString);  */

//b

function parYnumerico(item){
    if ((item % 2) == 0 && !isNaN(item)){
        return item;
    }
}

const valuesParNum = values.filter(parYnumerico);
console.log(valuesParNum);