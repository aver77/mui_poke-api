import React, {memo} from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';

const Img = styled.img`
    max-width: 396px ;
    width: 100%;
`;

const CardImg = ({imgSrc, imgAlt}) => {
    return (
        <Grid sx={{mt: '44px'}} item xs={12}>
            <Img src={imgSrc} alt={imgAlt}/>
        </Grid>
    );
};

export default memo(CardImg);