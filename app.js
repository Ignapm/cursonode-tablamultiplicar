

const {crearArchivo} = require('./helpers/multiplicar');
require('colors');
const argv = require('yargs')
        .option('n', {
            alias: 'numero',
            type: 'number',
            demandOption: true,

        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            demandOption: true,
            default: true
        })
        .option('h',{
            alias: 'hasta',
            type: 'number',
            default: 5
        })
        .check((argv, options)=>{
            if( isNaN ( argv.n)){
                throw 'el numero debe ser un numero'
            }
            return true;
        })
        .argv;

console.clear();



console.log(process.argv);
console.log(argv);

console.log('argv.numero = ', argv.numero)



crearArchivo( argv.n, argv.l, argv.h)
    .then (nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch (err => console.log(err));

// console.log(process.argv);
// const[,, arg3 = 'numero=5'] = process.argv;
// const [, numero = 5] = arg3.split('=');
// console.log( numero )


//const numero = 9;