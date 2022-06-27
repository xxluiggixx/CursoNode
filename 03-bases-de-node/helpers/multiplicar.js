/* const { writeFileSync } = require("fs") */
const fs = require('fs');
const createTableFile=async(base=5,listar=false,hasta=10)=>{

    try {
        
        let salida=''
        for (let index = 1; index <= hasta; index++) {
            salida+=` ${base} x ${index} = ${base*index}\n`;
        }
        fs.writeFileSync(`./output/Tabla_${base}.txt`,salida);
        if (listar){
            console.log('=================================')
            console.log(`          Tabla del ${base}`)
            console.log('=================================')
            console.log(salida);
        }
        return `Tabla_${base}`
    } catch (error) {
        throw error
    }
}

module.exports={
    createTableFile
}