// Paul Whipp
// 5/20/2019
// Shopping List Desktop App
// https://www.youtube.com/watch?v=kN1Czs0m1SU
// Following Tuturial by Traversy

const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

// Listen for the app to be ready
app.on('ready', function(){
    // Create new window
    mainWindow = new BrowserWindow({});
    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file',
        slashes: true
    })); // load url

}); // app ready