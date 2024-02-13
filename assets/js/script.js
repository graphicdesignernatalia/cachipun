// juego cachipun
alert(`¿Juguemos al Cachipun?`);

// explicación del juego.
alert('EXPLICACIÓN: El cachipún es un juego entre dos personas (en este caso, tú y el computador) donde Tijera le gana a Papel; Papel le gana a Piedra; y Piedra le gana a Tijera; Si ambos jugadores eligen la misma opción, es un empate.');

// Cantidad de Jugadas y Variables para Resultados Generales.
var cantidadJugadas = parseInt(prompt('¿Cuántas veces deseas jugar?'));
var empates = 0;
var victorias = 0;
var derrotas = 0;

for (var juego = 0; juego < cantidadJugadas; juego++) {
    alert(`Jugada ${juego + 1} de ${cantidadJugadas}`);

    // Validación Jugada del Jugador.
    do {
        var jugadaJugador = parseInt(prompt('¿Qué vas a jugar?\n0: piedra\n1: papel\n2: tijera'));

        if (jugadaJugador < 1 || jugadaJugador > 3) {
            alert('Jugada no válida');
        }
    } while (jugadaJugador !== 0 && jugadaJugador !== 1 && jugadaJugador !== 2);

    // Jugada del Computador.
    var jugadaComputador = Math.floor(Math.random() * 3);

    // Indicador de Jugadas: Valor Numérico.
    alert(`Jugador elige: ${jugadaJugador}, Computador elige: ${jugadaComputador}`);

    // Convertir Valor Numérico a String.
    var opciones = ["piedra", "papel", "tijera"];
    var jugadaJugadorString = opciones[jugadaJugador];
    var jugadaComputadorString = opciones[jugadaComputador];

    // Indicador de Jugadas: Valor String.
    alert(`Jugador elige: ${jugadaJugadorString}, Computador elige: ${jugadaComputadorString}`);

    // Condiciones para Determinar el Resultado.
    if (jugadaJugadorString === jugadaComputadorString) {
        alert("¡EMPATE!");
        empates++;
    } else if (
        (jugadaJugadorString === "papel" && jugadaComputadorString === "piedra") ||
        (jugadaJugadorString === "tijera" && jugadaComputadorString === "papel") ||
        (jugadaJugadorString === "piedra" && jugadaComputadorString === "tijera")
    ) {
        alert("¡GANASTE!");
        victorias++;
    } else {
        alert("¡PERDISTE!");
        derrotas++;
    }

    // Mostrar Estadísticas después de cada juego.
    alert(`Victorias: ${victorias} - Derrotas: ${derrotas} - Empates: ${empates}`);
}

// Fin del programa
alert("¡Gracias por jugar a Cachipun!");
