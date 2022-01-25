import React, { memo } from 'react';
import { Grid } from '@mui/material';

const textWrapStyles = () => ({
    marginTop: '44px',
    fontSize: '17px',
    color:' #A0A0A0'
})

const CardTextWrap = ({children}) => {
    return (
        <Grid item sx={textWrapStyles} xs={12}>
            {children}
        </Grid>
    );
};

export default memo(CardTextWrap);