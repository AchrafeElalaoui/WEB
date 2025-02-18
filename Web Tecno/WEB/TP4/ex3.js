let nbr1 = parseInt(prompt("number 1 :"));
let nbr2 = parseInt(prompt("number 2 :"));
let nbr3 = parseInt(prompt("number 3 :"));

let l = [nbr1,nbr2,nbr3];
l.sort( (a,b) => a - b )
console.log("les nombers dans l'order crossant"+l)

