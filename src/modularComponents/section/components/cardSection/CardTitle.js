import React, { memo } from 'react';
import { Grid, Typography } from '@mui/material';

const cardTitleStyles = (theme) => ({
    fontSize: '44px',
    left: 0,
    color: '#A0A0A0',
    [theme.breakpoints.down('sm')]: {
        fontSize: '24px'
    }
})

const CardTitle = ({title}) => {
    return (
        <Grid item xs={12}>
            <Typography sx={cardTitleStyles}>{title.charAt(0).toUpperCase() + title.slice(1)}</Typography>
        </Grid>
    );
};

export default memo(CardTitle);