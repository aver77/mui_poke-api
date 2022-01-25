import React, {memo} from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';

const cardContainer = () => ({
    minHeight: '240px'
})

const Img = styled.img`
    max-width: 240px;
    min-height: 240px;
    width: 100%;
`;

const CardImg = ({imgSrc, imgAlt}) => {
    return (
        <Grid sx={cardContainer} item xs={12}>
            <Img src={imgSrc} alt={imgAlt}/>
        </Grid>
    );
};

export default memo(CardImg);