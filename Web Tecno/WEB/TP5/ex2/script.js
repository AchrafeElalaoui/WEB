function calculate(operator) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultField = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        resultField.value = "Entrée invalide";
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultField.value = "Erreur : Division par 0";
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = "Opération inconnue";
    }

    resultField.value = result;
}
