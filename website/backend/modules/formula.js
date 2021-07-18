var circle = "22/7*r*r"
var square = "s*s"
var rectangle = "l*b"
var rhombus = "1/2*p*q"
var triangle = "1/2*b*h "
function area_of_circle(g){
    return 3.14*g*g
}
function area_square(l){
    return l*l
}

function area_rectangle(l,b){
    return l*b
}

function area_rhombus(p,q){
    return 1/2*p*q
}

function area_triangle(b,h){
    return 1/2* b*h
}

module.exports = {circle, square, rectangle, rhombus, triangle,area_of_circle}