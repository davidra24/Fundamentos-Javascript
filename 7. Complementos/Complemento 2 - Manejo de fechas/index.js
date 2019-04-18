function diasEntreFechas(fecha1, fecha2){
    const unDia = 1000 * 60 * 60 * 24;
    const diferencia = Math.abs(fecha1 - fecha2)
    return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimiento = new Date(1995, 7, 24);

console.log(`Los días entre las fechas ${hoy} y ${nacimiento} son ${diasEntreFechas(hoy, nacimiento)}`);