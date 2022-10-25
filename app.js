function returnBoolean(array){
    return array.map(elem => !!elem)
}

console.log(returnBoolean([0,1,2,3,0]))