import React, { memo } from 'react';
import { Grid, Box } from '@mui/material';
import CardTitle from './CardTitle';
import CardImg from './CardImg';
import CardTextWrap from './CardTextWrap';
import Text from '../../../../../Text';

const cardSectionStyles = () => ({
    backgroundColor: '#000000'
})
const cardSectionWrapper = () => ({
    margin: '44px 44px 16px 44px', 
    width: '100%'
})

const CardSection = ({title, imgSrc, imgAlt, series, id, height, attack}) => {
    return (
        <Grid xl={6} lg={6} md={6} sm={7} xs={8} sx={cardSectionStyles} item>
            <Grid container>
                <Box sx={cardSectionWrapper}> 
                    <CardTitle title={title}/>
                    <CardImg imgSrc={imgSrc} imgAlt={imgAlt}/>
                    <CardTextWrap>
                        <Text series={series} id={id} height={height} attack={attack}/>
                    </CardTextWrap>
                </Box>
            </Grid>
        </Grid>
    );
};

export default memo(CardSection);