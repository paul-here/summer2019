// Paul Whipp
// 5/20/2019
// Shopping List Desktop App
// https://www.youtube.com/watch?v=kN1Czs0m1SU
// Following Tuturial by Traversy

const electron = require('electron');
const path = require('path');
const url = require('url');

const {app, BrowserWindow, Menu, ipcMain} = electron;

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

    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert menu
    Menu.setApplicationMenu(mainMenu);

}); // app ready


// Create menu template
const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Add Item'
            },
            {
                label: 'Clear Items'
            },
            {
                label: 'Quit',
                click(){
                    app.quit();
                }
            }

        ]
    }
];