var fs = require("fs")
function deleted(err){
fs.unlink("delete.txt",(error)=>{
    if(err)
    console.log(err)
    else
    console.log("File deleted successfully")
})
}
deleted()