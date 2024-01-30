const fs =require("fs")
fs.readFile("b.txt","utf-8",function (err,data){
    if (err){
        console.log("error")
    }
    else{
        fs.writeFile("b.txt",data.replace(/\s+/g," "),function(err,data){
            if(err){
                console.error("error writing:",err);
            }
            else{
                console.log("filed clean")
            }
        });
      }
    })


   
   
