let tempF = parseFloat(prompt("Entrez la température en Fahrenheit :"));
if (!isNaN(tempF)) {
    let tempC = (5 / 9) * (tempF - 32);
    console.log(`Cette température en Celsius est : ${tempC.toFixed(2)}°C`);
} else {
    console.log("Veuillez entrer un nombre valide !");
}