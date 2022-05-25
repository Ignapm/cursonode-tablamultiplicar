
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( numero = 5, l  = false, h ) => {

    try {
        if(l){
            console.log('============='.green)
            console.log(`tabla del ${numero}`)
            console.log('============='.yellow)
            let salida = '';
            for (let index = 1; index <= h; index++) {
                salida += `${numero} x ${index} =  ${index * numero}  \n`;
            }
            console.log(salida)

            fs.writeFileSync( `salida/tabla-${numero}.txt`, salida);
    
            return 'la tabla del número ' + numero +'.txt se ha'
        }else{
            return 'no me dejan sacar nada'
        }
        
    } catch (e ) {
        throw (e)
    }
    
}

module.exports = {
    crearArchivo
}