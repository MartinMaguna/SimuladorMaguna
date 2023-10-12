function saludar() {
    let nombreApellido = prompt("ingrese su nombre y apellido");
    alert("Hola " + nombreApellido);
    alert("Bienvenido a JS Inversiones")
}

function calcularRentabilidad() {
    let inversion;
    
    while (isNaN(inversion)) {
        inversion = parseFloat(prompt("Ingrese el monto que desea invertir"));
        
        if (isNaN(inversion)) {
            alert("Por favor, ingrese un número válido");
        }
    }
    
    if (inversion < 2500) {
        alert("Usted podrá ganar hasta USD " + inversion * 1.25 + " mensuales");
    } else if (inversion >= 2500 && inversion < 10000) {
        alert("Usted podrá ganar hasta USD " + inversion * 1.5 + " mensuales");
    } else {
        alert("Usted podrá ganar hasta USD " + inversion * 2 + " mensuales");
    }
}

saludar()
calcularRentabilidad()