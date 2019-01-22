export function addNumbers(n1,n2){

    return{
        type:"ADD_NUMBERS",
        payload:`Suma: ${n1} + ${n2} = ${n1+n2}`
    };
}

export function multiplyNumbers(n1,n2){
    return{
        type:"MULTIPLY_NUMBERS",
        payload:`Multiplicacion: ${n1} * ${n2} = ${n1*n2}`
    };
}