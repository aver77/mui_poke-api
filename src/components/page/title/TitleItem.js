import React from 'react';
import { Box } from '@mui/material';
import TapSection from './components/TapSection';
import TextSection from './components/TextSection';

const titleWrapper = () => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const TitleItem = () => {
    return (
        <Box sx={titleWrapper}>
            <TextSection/>
            <TapSection/>
        </Box>
    );
};

export default TitleItem;