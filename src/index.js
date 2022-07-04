import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { createRoot } from 'react-dom/client';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <App />
  </Router>
);
