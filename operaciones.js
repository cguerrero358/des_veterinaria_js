const fs = require('fs')

const registrar = (nombre, edad, animal, color, enfermedad ) => {

    try {
        const registros = JSON.parse(fs.readFileSync('./citas.json', 'utf8'));

        const nuevoRegistro = {
            nombre,
            edad,
            animal,
            color,
            enfermedad
        };

        registros.push(nuevoRegistro);

        fs.writeFileSync('./citas.json', JSON.stringify(registros, null, 2)); 
        console.log('Registro agregado con éxito.');
    } catch (err) {
        console.error('Error al registrar la cita:', err);
    }
};


const leer = () => {
    try {
        const registros = JSON.parse(fs.readFileSync('./citas.json', 'utf8'));
        if (registros.length === 0) {
            console.log('No hay citas registradas.');
        } else {
            console.log('Citas registradas:');
            registros.forEach(registro => {
                console.log(registro);
            });
        }
    } catch (err) {
        console.error('Error al leer las citas:', err);
    }
};



module.exports = {registrar, leer};