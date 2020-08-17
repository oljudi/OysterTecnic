import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import MyProvider from "./context";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import theme from "./theme";
import './index.css';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

const WhitTheme = () => {
    return (
        <ThemeProvider theme={theme}>
          <CSSReset />
          <Router />
        </ThemeProvider>
    )
}

const WhitContext = () => {
    return (
        <BrowserRouter>
            <MyProvider>
                <WhitTheme/>
            </MyProvider>
        </BrowserRouter>
    )
}

ReactDOM.render(<WhitContext />, document.getElementById('root'));

serviceWorker.unregister();
