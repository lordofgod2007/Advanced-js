function sum(a){

var l = a.split("")
var count = 0
for(let i = 0;i<a.length;i++){
count+=parseInt(l[i])
}
return count;
}
var t = sum("435")
console.log(t)
