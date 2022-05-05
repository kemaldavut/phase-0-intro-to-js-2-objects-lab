// Write your solution in this file!
let  employee = {
    name: "Jone",
    streetAddress: "London",
}
//1
function updateEmployeeWithKeyAndValue(Object,key,value) {
    let newObject = {...Object}
    newObject[key] = value
    return newObject
}
//2
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
employee[key] = value
return employee
}
//3
function deleteFromEmployeeByKey(Object,key) {
let newObject = {...Object}
delete newObject[key]
return newObject
}
//4
function destructivelyDeleteFromEmployeeByKey(Object,key) {
delete Object[key]
return Object
}