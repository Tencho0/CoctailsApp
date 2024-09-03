import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Typography, CircularProgress, Box } from '@mui/material';
import { CocktailCard } from '../components/CocktailCard';

const API_BASE_URL = process.env.REACT_APP_COCKTAIL_API_BASE_URL;

export const CocktailList = () => {
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${API_BASE_URL}/filter.php?c=Ordinary_Drink`)
            .then(response => {
                setCocktails(response.data.drinks);
            })
            .catch(error => {
                console.error("There was an Error fetching the cocktails!", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
                <Typography variant="h6" style={{ marginLeft: '20px' }}>
                    Loading cocktails...
                </Typography>
            </Box>
        );
    }

    return (
        <div>
            <Typography variant="h4" align="center" gutterBottom>
                Cocktails
            </Typography>
            <Grid container spacing={3}>
                {cocktails.map(cocktail => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={cocktail.idDrink}>
                        <CocktailCard cocktail={cocktail} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
