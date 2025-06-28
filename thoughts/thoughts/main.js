const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 700,
    height: 520,
    resizable: false,
    title: 'THOUGHTS',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js') // Optional, for later use
    }
  });

  win.loadFile('index.html'); // This will load your index.html

  // Remove the default menu bar (File, Edit, etc.)
  Menu.setApplicationMenu(null);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
