import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import App from "./components/App.jsx"
import Header from "./components/Header.jsx"

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header/>
            <App/>
        </BrowserRouter>
    </React.StrictMode>);
