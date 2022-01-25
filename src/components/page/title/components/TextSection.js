import React from 'react';
import { Box, Typography } from '@mui/material';

const titleTextWrapper = () => ({
    border: '1px solid #FFFFFF'
});
const titleText = () => ({
    fontSize: '12px',
    padding: '7px'
});

const TextSection = () => {
    return (
        <Box sx={titleTextWrapper}>
            <Typography sx={titleText}>ПОКЕМОНЫ API</Typography>
        </Box>
    );
};

export default TextSection;