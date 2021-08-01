let number1 = 10
number1 = "Volkan Önder"
let student = {id:1, name:"Volkan"}
console.log(student)

function save(point=10, student) {
    console.log(student.name + " : " + point)
}
save(undefined,student);

//arrays
let students = ["Volkan Önder", "Eren Çifci", "Furkan Tokatlı"]
console.log(students)

let students2 = [student, {id:2, name:"Volkan"}, "Ankara", {city:"Istanbul"}]
console.log(students2)

//rest parameters
//java-varArgs
//c#-params
let showProducts = function(id, ...products) {
    console.log(id)
    console.log(products)
}
console.log(typeof showProducts)
showProducts(10, "Elma", "Armut", "Karpuz")

//spread
let points = [1,2,3,7,12,222,90]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC", "D", ..."EFG", "H")

//destructuring
let populations = [10000,20000,30000, [40000,100000]]
let [small, medium, high, [veryhigh, max]] = populations
console.log(max)

function someFunction([small1, small2],number) {
    console.log(small1)
    console.log(small2)
}
someFunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["id"])

let {id, name} = category
console.log(id)
console.log(name)

