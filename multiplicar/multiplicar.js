const fs = require('fs');
const colors = require('colors');


let ListarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (Number(base) && Number(limite)) {

            let data = '';

            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${(base * i)} \n`;
            }
            resolve(data);

        } else {
            reject(`Alguno de los paramtros: ${base} o ${limite} no es un numero`.red);
            return;
        }
    });
}



let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (Number(base) && Number(limite)) {

            let data = '';

            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${(base * i)} \n`;
            }


            fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                if (err)
                    reject(err)
                else
                    resolve('Archivo creado: ' + `tabla-${base}.txt`.red);
            })
        } else {
            reject(`Alguno de los paramtros: ${base} o ${limite} no es un numero`.red);
            return;
        }
    });
}


module.exports = {
    crearArchivo, // igual a crearArchvio : crearArchivo()
    ListarTabla
}