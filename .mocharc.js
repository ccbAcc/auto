const fs = require('fs');
const path = require('path');
require('dotenv').config();

module.exports = {
    reporter : 'mochawesome',
    'reporter-option' : [
        `reportDir=${testRunDir()}`,
        'report-Filename=index',
        'overwrite=true',
        'html=true',
        'json=true'
    ],
    spec : 'test/**/*.js',
    timeout : 300000
};

function testRunDir() {
    try {
        const date = new Date();
        let currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate().toString().padStart(2, '0')}-${date.getHours()}.${date.getMinutes()}.${date.getMilliseconds()}`;

        if(fs.existsSync(`./results/${currentDate}`)) {
            console.log("Existe el directorio");
        }
        else {
            fs.mkdirSync(`./results/${currentDate}`);
            console.log("Se creó el directorio results");
        }

        process.env.REPORT_DIR = `./results/${currentDate}`;
        return `./results/${currentDate}`;
    } catch(err) {
        console.error('Error en la creación de la carpeta: ', err);
    }
}

/*
function resultsDir() {
     try {
        if(fs.existsSync('./results')) {
            console.log("Existe el directorio results");
        }
        else {
            fs.mkdirSync('./results');
            console.log("Se creó el directorio results");
        }
    } catch(err) {
        console.error('Error en la creación de la carpeta: ', err);
    }
}
*/
