import React from 'react';
import { Grid } from '@mui/material';
import BtnSection from './components/BtnSection';
import CardSection from './components/CardSection/CardSection';

const sectionStyles = () => ({
    alignItems: 'center',
    marginTop: '54px', 
    height: '500px', 
    width: '100%'
})

const Section = () => {
    return (
        <Grid sx={sectionStyles} container>
            <BtnSection/>
            <CardSection/>
        </Grid>
    );
};

export default Section;