function febon1(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return febon1(n - 1) + febon1(n - 2);
}
function febon2(n){
    for(let i=0;i<=n;i++){
        console.log(febon1(i))
    }
}
n=parseInt(prompt("enter the number (>0) :"))
console.log(`febon1 : ${febon1(n)}`)
console.log(`febon2 : `)
febon2(n)