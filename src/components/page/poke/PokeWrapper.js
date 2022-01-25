import React from 'react';
import { Container, Box } from '@mui/material';

const initialContainer = (theme) => ({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        height: '100%',
        paddingRight: '12px',
        paddingLeft: "12px",
    },
});
const nestedContainer = (theme) => ({
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
        height: '100%',
        paddingRight: "0",
        paddingLeft: "0",
    },
})
const nestedWrapper = () => ({
    width: '980px'
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

export default PokeWrapper;