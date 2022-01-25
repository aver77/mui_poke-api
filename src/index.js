import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
// import GlobalStyles from './styles/globalStyles';
import Stilization from './styles/globalStyles';
import theme from './styles/theme';

ReactDOM.render(
    <React.StrictMode>
        {/* <GlobalStyles/> */}
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Stilization/>
                <App />
            </CssBaseline>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
