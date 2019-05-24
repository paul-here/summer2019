// Adopted from Ed Martin's PAR/PPF/DLI Calculator
// found at: http://dev.edman007.com/~edman007/pub/par-dli-cal.html
// Paul Whipp
// 5/24/2019
// Desktop PAR/PPF/DLI Calculator


const electron = require('electron');
const path = require('path');
const url = require('url');

// should this be const?
var $ = require("jquery");

/*
// code from 'https://www.npmjs.com/package/jquery':
require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }
 
    var $ = require("jquery")(window);
});
*/