import React from 'react';
import { Typography } from '@mui/material';

const Text = ({series, id, height, attack}) => {
    return (
        <>
            <Typography sx={{fontSize: '17px', color:' #A0A0A0'}}>Снялся в {series} сериях</Typography>
            <Typography sx={{fontSize: '17px', color:' #A0A0A0'}}>id: {id}</Typography>
            <Typography sx={{fontSize: '17px', color:' #A0A0A0'}}>height: {height}</Typography>
            <Typography sx={{fontSize: '17px', color:' #A0A0A0'}}>attck: {attack}</Typography>
        </>
    );
};

export default Text;