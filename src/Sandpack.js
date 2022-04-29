import { Sandpack } from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";
import * as ReactDOMServer from 'react-dom/server';
import React, { useState } from "react";

const APP_CODE = `console.log('Hello')`.trim();
const style = ``


export default function App() {
  return (
    <Sandpack
    options={{
      editorHeight: 2000,
      editorWidth: 200
    }}
      customSetup={{
        dependencies: {
          "html-to-image": "^1.9.0",
          "pixelmatch": "latest",
          "react-file-base64": "^1.0.3",
          "react-dom-server": "^0.0.5",
          



        },
        files: {
          "/App.js": APP_CODE,
          "/styles.css": style,
          "/index.js":APP_CODE,
          // "/img.js":targetstring,
          "/DOM.js":APP_CODE,
          "/Render.js":APP_CODE,
        }
      }}
      template="react"
    />
  );
}
