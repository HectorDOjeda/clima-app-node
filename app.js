const argv = require('./config/yargs').argv;

const lugar = require('./lugar/lugar');
const temp = require('./clima/clima');

let getInfo = async(direccion) => {

    try {

        let coors = await lugar.getLugarLatLng(direccion);
        let clima = await temp.getClima(coors.lat, coors.lng);
        return (`El clima en ${coors.direccion} es de ${clima} grados`)

    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));