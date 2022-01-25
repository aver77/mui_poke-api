import React from 'react';
import styled from 'styled-components';
import clickIcon from '../../../../assets/images/clickIcon.png';
import { Box, Typography } from '@mui/material';

const titleTapWrapper = () => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});
const TitleTapImage = styled.img`
    margin-right: 10px;
    width: 24px;
    height: 30px;
`;
const titleTapTextWrapper = () => ({
    width: '112px'
});
const titleTapText = () => ({
    fontSize: '12px',
    lineHeight: '100%',
});

const TapSection = () => {
    return (
        <Box sx={titleTapWrapper}>
            <TitleTapImage src={clickIcon} alt='click to poke'/>
            <Box sx={titleTapTextWrapper}>
                <Typography sx={titleTapText}>Нажмите на нужного Покемона</Typography>
            </Box>
        </Box>
    );
};

export default TapSection;