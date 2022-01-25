import React, { memo } from 'react';
import { Container, Box } from '@mui/material';

const initialContainer = () => ({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
});
const nestedContainer = () => ({
    display: 'flex',
    justifyContent: 'center'
})
const nestedWrapper = () => ({
    maxWidth: '980px'
})

const PokeWrapper = ({children}) => {
    return (
        <Container maxWidth="xl" sx={initialContainer}>
            <Container sx={nestedContainer} maxWidth="lg">
                <Box sx={nestedWrapper}>
                    {children}
                </Box>
            </Container>
        </Container>
    );
};

export default memo(PokeWrapper);