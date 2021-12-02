import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import Background from '../../Images/home.jpg';
import { JpBox } from '../../components/JpBox';


export const Home = () => {

    return (
        <CardMedia sx={{ py: 10, m: '0 calc(50% - 50vw)', display: 'flex', justifyContent: 'center', height: { md: 500 } }} image={Background} alt="">
            <Grid container spacing={4} direction="row"
                justifyContent="center"
                sx={{ maxWidth: 'lg', px: 2 }}>
                <Grid item xs={12} md={6} >
                    <JpBox />
                </Grid>
                <Grid item xs={12} md={6} sx={{ mt: 4 }}>
                    <Typography variant='h1' sx={{ pb: 2 }} > Kia Ora Auckland,</Typography>
                    <Typography variant='h3' sx={{ pb: 2 }} > Welcome to AT</Typography>
                    <Typography variant='body1' sx={{ width: '85%' }} > AT is responsible for all the region's transport services, from roads and footpaths, to cycling, parking and public transport.</Typography>
                </Grid>
            </Grid >
        </CardMedia>
    )
}
export default Home