// requiereds
// const fs = require('fs'); // cuando es libreria de Node
// const express = require('express')  // modulos instalados.
// const express = require('./customlibrery')  // en algun liugar de nuestro proyecto

const { crearArchivo, ListarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');


// try {
// let base = process.argv[2].split('=')[1];

let comando = argv._[0]; // el  _ hace referencia al nombre del array de _[]

switch (comando) {
    case 'Listar':
        ListarTabla(argv.base, argv.limite)
            .then((result) => console.log(result.green))
            .catch(e => console.log(e));

        break;
    case 'Crear':
        crearArchivo(argv.base, argv.limite)
            .then((result) => console.log(result))
            .catch(e => console.log(e));
        break;
    case undefined:
        console.log('No ha introducido comando'.red);
        break;
    default:
        console.log('Comando no reconocido'.red);
        break;

        //     }



        // } catch {
        //     console.log(err);
}