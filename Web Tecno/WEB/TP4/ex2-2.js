function hjms(sec){

    var j=parseInt(sec/86400 )
    if(j==0){
        var jour=""
    }else{
        var jour=`${j} jour `
    }
    
    var rj=sec%86400
    var h=parseInt(rj/3600)
    if(h==0){
        var hour=""
    }else{
        var hour=`${h} hour `
    }
    var rh=rj%3600
    var m=parseInt(rh/60)
    if(m==0){
        var min=""
    }else{
        var min=`${m} min `
    }
    var s=rh%60
    if(s==0){
        var secend=""
    }else{
        var secend=`${s} sec`
    }

    console.log(`${jour}${hour}${min}${secend}`)
}
s=parseInt(prompt("enter the sec :"))
hjms(s)