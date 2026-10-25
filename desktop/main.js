const {app,BrowserWindow,Menu,shell}=require("electron");
const path=require("path");
function create(){
  const w=new BrowserWindow({width:1100,height:820,minWidth:420,title:"Явка",backgroundColor:"#f3f5f7",webPreferences:{contextIsolation:true}});
  Menu.setApplicationMenu(null);
  w.loadFile(path.join(__dirname,"app","index.html"));
  w.webContents.setWindowOpenHandler(({url})=>{shell.openExternal(url);return {action:"deny"}});
}
app.whenReady().then(create);
app.on("window-all-closed",()=>app.quit());
