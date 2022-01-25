import React from 'react';
import { Chip } from '@mui/material';

const btnStyles = () => ({
    margin: '6px 6px 6px 0',
    padding: '20px', 
    color: 'white', 
    backgroundColor: '#1986EC'
})

const Btn = ({text}) => {
    return (
        <Chip 
            label="Clickable" 
            sx={btnStyles} 
        >
            {text}
        </Chip>
    );
};

export default Btn;