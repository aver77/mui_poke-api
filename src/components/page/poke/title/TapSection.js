import React, { memo } from 'react';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import clickIcon from '../../../../assets/images/clickIcon.png';

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
const titleTapTextWrapper = theme => ({
    width: '112px'
});
const titleTapText = theme => ({
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

export default memo(TapSection);