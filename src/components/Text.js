import React from 'react';
import { Typography } from '@mui/material';

const textStyles = () => ({
    fontSize: '17px'
})

const Text = ({series, id, height, attack}) => {
    return (
        <>
            <Typography sx={textStyles}>Снялся в {series} сериях</Typography>
            <Typography sx={textStyles}>id: {id}</Typography>
            <Typography sx={textStyles}>height: {height}</Typography>
            <Typography sx={textStyles}>attack: {attack}</Typography>
        </>
    );
};

export default Text;