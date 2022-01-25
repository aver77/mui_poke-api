import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

const LoadingWrapper = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
}));
const LoadingSpinner = styled(CircularProgress)(() => ({
}));

const Loading = () => {
    return (
        <LoadingWrapper>
            <LoadingSpinner/>
        </LoadingWrapper>
    );
};

export default Loading;