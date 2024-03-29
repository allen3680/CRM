import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let win;

function createWindow() {
  // 创建浏览器窗口
  win = new BrowserWindow({ width: 1920, height: 1080 });

  //然后加载app的index.html
  let indexPath = path.join(__dirname, '../views/pages/login.html');
  win.loadFile(indexPath);

  // win.webContents.openDevTools();

  // 当 window 被关闭，这个事件会被触发。
  win.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    win = null;
  });
}

app.on('ready', createWindow);

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
