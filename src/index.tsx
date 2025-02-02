import App from "./App";
import "./react-jsx-runtime-polyfill";
import { createRoot } from "@wordpress/element";
import "./globals.css";
import React from 'react';

const rootElement = document.getElementById("onyx-root");

if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Root element #onyx-root not found.");
}
