import React from "react";
import { GlobalStyles } from "@mui/material";

const Stilization = () => {
    return (
        <GlobalStyles styles={{
            body: { 
                background: '#131313',
                color: 'white',
                padding: 0,
                margin: 0,
                boxSizing: 'border-box',
                '*, *::before, *::after': {
                    boxSizing: 'border-box'
                }
            }
        }}
      />
    )
}
export default Stilization