export function addNumbers(n1,n2){
    return{
        type:"ADD_NUMBERS",
        payload:{n1,n2}
    };
}

export function multiplyNumbers(n1,n2){
    return{
        type:"MULTIPLY_NUMBERS",
        payload:{n1,n2}
    };
}