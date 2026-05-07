const fs = require('fs');
const path = require('path');
require('dotenv').config();

function setupDir() {
    resultsDir();
    testRunDir();
}

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
        require('mocha/bin/_mocha');
    } catch(err) {
        console.error('Error en la creación de la carpeta: ', err);
    }
}

setupDir();