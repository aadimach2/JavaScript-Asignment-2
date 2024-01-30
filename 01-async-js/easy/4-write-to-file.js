const fs=require("fs")
fs.writeFile("a.txt","wrote a srtory","utf-8",function(err,data){
console.log("content has been  updated")
})

const p =new Promise(function(resolve,reject){
    fs.writeFile('a.txt','content successfully','utf-8',(err)=>{
        if (err){
            reject("error while writing a file",err);
        }
        resolve("updated the content");
    })
})

p.then(fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log(data)
}))