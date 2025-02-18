function usingWhile(n){
    console.log("using while :")
    i=0
    while(i<n){
        i+=1
        console.log("*".repeat(i))
    }
}
function usingFor(n){
    console.log("using for :")
    for(let i=1;i<=n;i++){
        console.log("*".repeat(i))
    }
}
n=parseInt(prompt("enter the number :"))
usingWhile(n)
usingFor(n)
