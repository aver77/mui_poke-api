import React, { memo } from 'react';
import { Chip } from '@mui/material';

const btnStyles = (theme) => ({
    margin: '6px 6px 6px 0',
    padding: '20px', 
    color: 'white', 
    fontSize: '17px',
    backgroundColor: '#1986EC',
    [theme.breakpoints.down('sm')]: {
        fontSize: '10px',
        padding: '4px'
    }
})

const Btn = ({text, nameHandler}) => {

    const clickHandler = () => {
        nameHandler(text)
    }

    return (
        <Chip 
            label={text} 
            sx={btnStyles}
            onClick={clickHandler} 
        />
    );
};

export default memo(Btn);