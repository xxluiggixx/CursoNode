/* const { writeFileSync } = require("fs") */
const fs = require('fs');
const createTableFile=async(base=5)=>{

    try {
        
        console.log('=================================')
        console.log(`          Tabla del ${base}`)
        console.log('=================================')
        let salida
        for (let index = 1; index < 11; index++) {
            salida+=` ${base} x ${index} = ${base*index}\n`;
        }
        fs.writeFileSync(`Tabla_${base}`,salida);

        return `Tabla_${base}`
    } catch (error) {
        throw error
    }
}

module.exports={
    createTableFile
}