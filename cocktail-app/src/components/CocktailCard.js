import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const CocktailCard = ({ cocktail }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/cocktail/${cocktail.idDrink}`);
    };

    return (
        <Card onClick={handleClick} style={{ cursor: 'pointer' }}>
            <CardMedia
                component="img"
                height="140"
                image={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
            />
            <CardContent>
                <Typography variant="h6" component="div">
                    {cocktail.strDrink}
                </Typography>
            </CardContent>
        </Card>
    );
};