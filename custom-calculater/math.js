function addition (x,y){
    return x+y
}
// subtraction, division , multiplication , square, 
function subtraction(x,y){
    return x-y
}
function division(x,y){
    if(y == 0){
        return 0
    }
    return x/y
}
function multiplication(x,y){
    return x*y
}
function square(x){
    return x*x
}
module.exports = {addition,subtraction, division, multiplication, square}
