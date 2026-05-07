const fs = require('fs');
const path = require('path');
require('dotenv').config();


const reportDir = process.env.REPORT_DIR;

module.exports = {
    reporter : 'mochawesome',
    'reporter-option' : [
        `reportDir=${reportDir}`,
        'report-Filename=index',
        'overwrite=true',
        'html=true',
        'json=true'
    ],
    spec : 'test/**/*.js',
    timeout : 60000
};