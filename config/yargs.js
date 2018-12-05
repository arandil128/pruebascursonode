const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('Listar', 'Lista en pantalla la tabla de multiplicar', opt)
    .command('Crear', 'Crea un archivo con la tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
}