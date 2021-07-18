var fs = require("fs")
var k = 1;
function appender()
{
    fs.appendFile(".txt", `75 x ${k} = ${75*k}${"\n"}`, (err)=>{
        if(err)console.log(err);
        else console.log("Table written")
    })
    k++;
}

for(let i=1; i<=100; i++){

    setTimeout(appender, 1000+5*i);
}
 