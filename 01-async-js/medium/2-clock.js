
function  ff(){
let d=new Date()
let h=d.getHours()
let m=d.getMinutes()
let s=d.getSeconds()
const hh=h.toString().padStart(2,"0");
const mm=m.toString().padStart(2,"0");
const ss=s.toString().padStart(2,"0");
let ampm=hh>=12? 'PM' :'AM';

    console.log(`${hh}:${mm}:${ss} ${ampm}`)

}
setInterval(ff,1000)
