import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <Container style={{ textAlign: 'center', marginTop: '10%' }}>
            <Box>
                <Typography variant="h2" component="h1" gutterBottom>
                    404
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    Oops! This page doesn't exist.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate('/')}
                    sx={{ marginTop: '20px' }}
                >
                    Go Back Home
                </Button>
            </Box>
        </Container>
    );
};