function hjms(sec){

    var j=parseInt(sec/86400 )
    var rj=sec%86400
    var h=parseInt(rj/3600)
    var rh=rj%3600
    var m=parseInt(rh/60)
    var s=rh%60
    console.log(`${j} jour : ${h} hour : ${m} min : ${s} sec`)
}
s=parseInt(prompt("enter the sec :"))
hjms(s)