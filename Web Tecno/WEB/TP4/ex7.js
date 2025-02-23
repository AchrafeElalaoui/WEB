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
