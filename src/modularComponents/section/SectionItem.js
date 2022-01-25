import React, { useCallback, useState } from 'react';
import { Grid } from '@mui/material';
import BtnSection from './BtnSection';
import CardSection from './components/cardSection/CardSection';

const sectionStyles = () => ({
    alignItems: 'center',
    marginTop: '54px', 
    height: '500px', 
    width: '100%'
})

const SectionItem = () => {
    const [currentName, setCurrentName] = useState('bulbasaur');
    const nameHandler = useCallback((value) => {
        setCurrentName(value)
    }, [])

    return (
        <Grid sx={sectionStyles} container>
            <BtnSection nameHandler={nameHandler}/>
            <CardSection name={currentName}/>
        </Grid>
    );
};

export default SectionItem;