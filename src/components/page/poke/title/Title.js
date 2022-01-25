import React from 'react';
import { Box } from '@mui/material';
import TapSection from './TapSection';
import TextSection from './TextSection';

const titleWrapper = () => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const Title = () => {
    return (
        <Box sx={titleWrapper}>
            <TextSection/>
            <TapSection/>
        </Box>
    );
};

export default Title;