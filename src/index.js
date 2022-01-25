import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import Stilization from './styles/globalStyles';
import theme from './styles/theme';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Stilization/>
                <App />
            </CssBaseline>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
