let i=0
function gg(){
    console.log(i)
    i++
    setTimeout(gg,1000)
}
gg()