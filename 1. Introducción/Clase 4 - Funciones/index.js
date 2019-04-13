var nombre = 'David', edad = 23;

function imprimirEdad(nombre, edad) {
    console.log(`${nombre} tiene ${edad} años`);
}

imprimirEdad();

imprimirEdad(nombre, edad);
imprimirEdad('Juanito', 45);
imprimirEdad('Andrea', 23);
imprimirEdad('Martin', 34);
imprimirEdad(45, 'Carlos');