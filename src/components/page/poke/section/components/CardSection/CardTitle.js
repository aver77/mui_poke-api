import React from 'react';
import { Grid, Typography } from '@mui/material';

const cardTitleStyles = () => ({
    fontSize: '48px',
    left: 0,
    color: '#A0A0A0'
})

const CardTitle = ({title}) => {
    return (
        <Grid item xs={12}>
            <Typography sx={cardTitleStyles}>{title}</Typography>
        </Grid>
    );
};

export default CardTitle;