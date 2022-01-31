import { format } from "prettier";
import { useState, useMemo } from "react";
import { FilesViewer } from "./FilesViewer";

// const remote = window.require("@electron/remote");
// const app = window.require("@electron/remote").app;
// const { remote } = window.require("electron");
// window.require("@electron/remote/main").initialize();

const fs = window.require("fs");
const pathModule = window.require("path");

// const remote = window.require("@electron/remote");
// window.require("@electron/remote/main").enable(window.webContents);
// const { BrowserWindow } = window.require("@electron/remote");
// let win = new BrowserWindow({ width: 800, height: 600 });
// win.loadURL("https://github.com");

// const formatSize = (size) => {
//   const i = Math.floor(Math.log(size) / Math.log(1024));
//   return (
//     (size / Math.pow(1024, i).toFixed(2)) * 1 +
//     " " +
//     ["B", "KB", "MB", "GB", "TB"][i]
//   );
// };

function App() {
  // const [path, setPath] = useState(app.getAppPath());
  // console.log(remote);

  // const files = fs.readdirSync(path).map((file) => {
  //   const stats = fs.statSync(pathModule.join(path, file));
  //   return {
  //     name: file,
  //     size: stats.isFile() ? formatSize(stats.size ?? 0) : null,
  //     directory: stats.isDirectory(),
  //   };
  // });

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
