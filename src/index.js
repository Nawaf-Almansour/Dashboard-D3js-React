import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { Suspense, lazy, StrictMode } from "react";
import { retry } from "./utils/commonFunctions";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";


const App = lazy(() => retry(() => import("./App")));
const rootElement = document.getElementById("root");
const main = () =>
    render(
        <Suspense fallback={<div />}>
            <Router>
                <StrictMode>
                    <App />
                </StrictMode>
            </Router>
        </Suspense>,
        rootElement
);

const browserSupportsAllFeatures = () => {
    return window.requestIdleCallback && window.IntersectionObserver;
};

const loadScript = (src, done) => {
    const js = document.createElement("script");
    js.src = src;
    js.onload = function () {
        done();
    };
    js.onerror = function () {
        done(new Error("Failed to load script " + src));
    };
    document.head.appendChild(js);
};

if (browserSupportsAllFeatures()) {
    main();
} else {
    loadScript(
        "https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=requestIdleCallback%2CIntersectionObserver",
        main
    );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
