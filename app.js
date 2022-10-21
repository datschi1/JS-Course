arr1 = ['A+','A','Fail']
arr2 = ['Fail', 'Fail','B']

function filterFails(array){
    return array.filter(element => element != "Fail")
}

console.log(filterFails(arr1))
console.log(filterFails(arr2))