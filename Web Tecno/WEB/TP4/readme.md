# tp4
In this tp we will use javascript to answer some programming exercises , to see th TP [Click here](TP4.pdf).
## Exercise 1:
```javascript
let tempF = parseFloat(prompt("Entrez la température en Fahrenheit :"));
if (!isNaN(tempF)) {
let tempC = (5 / 9) * (tempF - 32);
console.log(`Cette température en Celsius est : ${tempC.toFixed(2)}°C`);
} else {
console.log("Veuillez entrer un nombre valide !");
}
```
## Exercise 2-1:
```javascript
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
```
## Exercise 2-2:
```javascript
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
```
## Exercise 3:
```javascript
let nbr1 = parseInt(prompt("number 1 :"));
let nbr2 = parseInt(prompt("number 2 :"));
let nbr3 = parseInt(prompt("number 3 :"));

let l = [nbr1,nbr2,nbr3];
l.sort( (a,b) => a - b )
console.log("les nombers dans l'order crossant"+l)

```
## Exercise 4:
```javascript
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
```
## Exercise 5-1:
```javascript
n=parseInt(prompt("enter the number :"))
for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}
```
## Exercise 5-2:
```javascript
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
```
## Exercise 6:
```javascript
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
```
## Exercise 7:
```javascript
function Rac1(A) {
    if (A < 1 || A > 100) {
        console.log("A must be between 1 and 100.");
        return;
    }

    let u_n = A / 2;  // Initial value
    while (Math.abs(u_n * u_n - A) >= 1e-5) {
        u_n = 0.5 * (u_n + A / u_n);  // Iterative formula
    }

    console.log(`Valeur approchée de la racine carrée = ${u_n}`);
}
A=parseInt(prompt("Pour un nombre A entre 1 et 100 :"))
// Example usage:
Rac1(A);
```
To use all thows scripts we need an html file to call them.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="ex7.js"></script> <!-- change the name of the script to test the other scripts -->
</body>
</html>
```

