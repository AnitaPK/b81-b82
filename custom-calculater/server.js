const math = require("./math")

n1 = 10 
n2 = 20

const add = math.addition(n1,n2)
console.log(n1 , " + ",n2 ," = ", add)

const mul = math.multiplication(n1,n2)
console.log(n1 , " * ",n2 ," = ", mul)

const sub = math.subtraction(n1,n2)
console.log(n1 , " - ",n2 ," = ", sub)

const div = math.division(n1,n2)
console.log(n1 , " / ",n2 ," = ", div)

const sq = math.square(n1,n2)
console.log(n1 , " ** ",n2 ," = ", sq)