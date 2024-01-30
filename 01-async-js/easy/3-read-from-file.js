const fs =require("fs")

fs.readFile("a.txt","utf-8",function(err,data){
    s=0
    for(i=0;i<1000000000;i++){
        s=s+i
    }
    console.log(data);
})