// Los elfos tienen un timestamp secreto: es la fecha y hora exacta 
// en la que Papá Noel despega con el trineo 🛷 para repartir regalos por el mundo. 
// Pero en el Polo Norte usan un formato rarísimo para guardar la hora: 
// YYYY*MM*DD@HH|mm|ss NP (ejemplo: 2025*12*25@00|00|00 NP).

// Tu misión es escribir una función que reciba:

// fromTime → fecha de referencia en formato elfo (YYYY*MM*DD@HH|mm|ss NP).
// takeOffTime → la misma fecha de despegue, también en formato elfo.

// La función debe devolver:
// Los segundos completos que faltan para el despegue.
// Si ya estamos en el despegue exacto → 0.
// Si el despegue ya ocurrió → un número negativo indicando cuántos segundos han pasado desde entonces.
// 🎯 Reglas
// Convierte el formato elfo a un timestamp primero. 
// El sufijo NP indica la hora oficial del Polo Norte 
// (sin husos horarios ni DST), así que puedes tratarlo como si fuera UTC.
// Usa diferencias en segundos, no en milisegundos.
// Redondea siempre hacia abajo (floor): solo segundos completos.

const takeoff = '2025*12*25@00|00|00 NP'

// desde el 24 diciembre 2025, 23:59:30, 30 segundos antes del despegue
timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff)
// 30

// justo en el momento exacto
timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff)
// 0

// 12 segundos después del despegue
timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff)
// -12

/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
    // Formato elfo: YYYY*MM*DD@HH|mm|ss NP
    const regex = /^(\d{4})\*(\d{2})\*(\d{2})@(\d{2})\|(\d{2})\|(\d{2})\s+NP$/;
    let fromParsed = fromTime.match(regex);
    let takeOffTimeParsed = takeOffTime.match(regex);

    if (!fromParsed || !takeOffTimeParsed) {
        return -1;
    }

    let seconds = 0;

    const from = new Date(Date.UTC(fromParsed[1], fromParsed[2] - 1, fromParsed[3], fromParsed[4], fromParsed[5], fromParsed[6]));
    const takeOff = new Date(Date.UTC(takeOffTimeParsed[1], takeOffTimeParsed[2] - 1, takeOffTimeParsed[3], takeOffTimeParsed[4], takeOffTimeParsed[5], takeOffTimeParsed[6]));
    seconds = Math.floor((takeOff - from) / 1000);
    return seconds;
}