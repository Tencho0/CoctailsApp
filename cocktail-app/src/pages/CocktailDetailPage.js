import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, Container, Grid, Paper, Chip, Box, CircularProgress } from '@mui/material';

export const CocktailDetailPage = () => {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const API_URL = process.env.REACT_APP_COCKTAIL_API_BASE_URL;
        axios.get(`${API_URL}/lookup.php?i=${id}`)
            .then(response => {
                setCocktail(response.data.drinks[0]);
            })
            .catch(error => {
                console.error("There was an error fetching the cocktail details!", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <Container style={{ textAlign: 'center', marginTop: '20%' }}>
                <CircularProgress />
                <Typography variant="h6" style={{ marginTop: '20px' }}>
                    Loading cocktail details...
                </Typography>
            </Container>
        );
    }

    if (!cocktail) {
        return (
            <Typography variant="h6" color="error">
                Cocktail not found.
            </Typography>
        );
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom align="center">
                {cocktail.strDrink}
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: '100%', borderRadius: '8px' }} />

                    <Box mt={2}>
                        <Typography variant="h6">
                            Categories
                        </Typography>
                        <Chip label={cocktail.strCategory} sx={{ backgroundColor: '#E8F4FF', color: '#339af0', fontWeight: 'bold' }} />

                        <Typography variant="h6" style={{ marginTop: '10px' }}>
                            Glass
                        </Typography>
                        <Chip label={cocktail.strGlass} sx={{ backgroundColor: '#E8F4FF', color: '#339af0', fontWeight: 'bold' }} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper elevation={0} style={{ backgroundColor: 'transparent' }}>
                        <Typography variant="h6">Ingredients</Typography>

                        <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
                            {Object.keys(cocktail)
                                .filter(key => key.includes('strIngredient') && cocktail[key])
                                .map(key => (
                                    <li key={key} style={{ marginBottom: '10px', padding: '8px', borderRadius: '4px', backgroundColor: '#f9f9f9' }}>
                                        {console.log(cocktail)}
                                        {cocktail[`strMeasure${key.replace('strIngredient', '')}`]} {cocktail[key]}
                                    </li>
                                ))}
                        </ul>

                        <Typography variant="h6" style={{ marginTop: '20px' }}>Instructions</Typography>
                        <Paper
                            elevation={0}
                            sx={{
                                padding: '16px',
                                borderRadius: '8px',
                                backgroundColor: '#f9f9f9',
                                border: '1px solid #e0e0e0',
                                marginTop: '10px'
                            }}
                        >
                            <Typography>
                                {cocktail.strInstructions}
                            </Typography>
                        </Paper>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};