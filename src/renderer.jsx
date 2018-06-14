// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import React from 'react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './renderer.css';

const rootElement = document.body.appendChild(document.createElement('div'));

render(
  <div className="container">
    <div className="jumbotron">
      <h1>Hello World<i className="glyphicon glyphicon-heart" /></h1>
      <p>
        We are using Node.js {process.versions.node},
        Chromium {process.versions.chrome},
        and Electron {process.versions.electron}.
      </p>
      <p lang="ja">
        これは<em>日本語</em>の文章です。
      </p>
    </div>
  </div>,
  rootElement
);
