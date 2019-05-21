// Paul Whipp
// 5/20/2019
// Shopping List Desktop App
// https://www.youtube.com/watch?v=kN1Czs0m1SU
// Following Tuturial by Brad Traversy

const electron = require('electron');
const path = require('path');
const url = require('url');

const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;
let addWindow;

// Listen for the app to be ready
app.on('ready', function(){
    // Create new window
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file',
        slashes: true
    })); // load url

    // Quit app when closed
    mainWindow.on('closed', function(){
        app.quit();
    }); // on closed

    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert menu
    Menu.setApplicationMenu(mainMenu);

}); // app ready

// Handle create add window
function createAddWindow(){
    // Create new window
    addWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 300,
        height: 200,
        title: 'Add Shopping List Item'
    });
    // Load html into window
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'addWindow.html'),
        protocol: 'file',
        slashes: true
    })); // load url
    // Garbage collection handler
    addWindow.on('closed', function(){
        addWindow = null;
    }); // on closed
}

// Catch item:add
ipcMain.on('item:add', function(e, item){
    console.log(item);
    mainWindow.webContents.send('item:add', item);
    addWindow.close();
}); // catch item:add

// Create menu template
const mainMenuTemplate = [
    // File
    {
        label: 'File',
        submenu: [
            {
                label: 'Add Item',
                click(){
                    createAddWindow();
                    // Change focus?
                }
            },
            {
                label: 'Clear Items',
                click(){

                }
            },
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 
                                        'Command+Q' : 'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }
    // Other?
];

// if mac, add empty object to window
if(process.platform == 'darwin'){
    mainMenuTemplate.unshift({});
}

// add developer tools item if not in prod
if(process.env.NODE_ENV !== 'production'){
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [
            {
                label: 'Toggle DevTools',
                accelerator: process.platform == 'darwin' ? 
                                        'Command+I': 'Ctrl+I',
                click(item, focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            },  
            {
                role: 'reload'
            }
        ]
    });
}

// TODO: @ 35:42 mark of tutorial