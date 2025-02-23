n=parseInt(prompt("enter the number (>0) :"))
var compt=0
for(i=2;i<n/2;i++){
    if(n%i==0){
        compt++
        console.log(`le nombre ${n} n'est pas premier car est diviseble par ${i}`)
        break
    }
}
if(compt==0){
    console.log(`le nombre ${n} est premier`)
}