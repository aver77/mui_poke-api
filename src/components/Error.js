import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import { Error as ErrorIcon } from '@mui/icons-material';

const ErrorWrapper = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
}));
const ErrorPic = styled(ErrorIcon)(() => ({
    height: 64,
    width: 64,
    color: 'red'
}));
const ErrorText = styled(Typography)(() => ({
    marginTop: '12px',
    fontSize: '20px'
}))

const Error = () => {
    return (
        <ErrorWrapper>
            <ErrorPic/>
            <ErrorText>Error occured</ErrorText>
        </ErrorWrapper>
    );
};

export default Error;