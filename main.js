// Objeto con las tasas de cambio para las monedas
const monedas = {
    UYU: 38.0,  // Peso Uruguayo
    ARS: 550.0, // Peso Argentino
    CLP: 815.0, // Peso Chileno
    BRL: 4.85,  // Real Brasileño
    USD: 1.0,   // Dólar Americano
    EUR: 0.90   // Euro
};

// Función para realizar la conversión de monedas
function convertirMoneda() {
    let continuar = true;

    while (continuar) {
        const dolar = prompt("Ingrese la divisa del precio del producto en mayusculas (ARS, CLP ,COP, EUR, BRL, UYU)").toUpperCase();
        const precio = prompt("Ingrese la moneda de su pais en mayusculas(ARS, CLP ,COP, EUR, BRL, UYU)").toUpperCase();

        if (dolar in monedas && precio in monedas) {
            const cantidadAConvertir = parseInt(prompt("Ingrese la cantidad a convertir:"));
            const cantidadConvertida = cantidadAConvertir * monedas[precio] / monedas[dolar];

            // Mostrar el resultado en un mensaje de alerta
            alert(`${cantidadAConvertir} ${dolar} son equivalentes a ${cantidadConvertida.toFixed(2)} ${precio}`);

            // Preguntar al usuario si desea realizar otra conversión
            const respuesta = prompt("¿Desea realizar otra conversión? (Sí / No)").toUpperCase();
            continuar = respuesta === "SI" || respuesta === "S";
        } else {
            alert("Las monedas ingresadas no son válidas. Intente nuevamente.");
        }
    }
}

// Llamar a la función para realizar la conversión al cargar la página
convertirMoneda();