import React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'

export const Home = () => {
    return (
        <Grid spacing={4} container>
            <Grid item xs={12} sm={6}>
                <Box sx={{
                    width: '100%',
                    height: 300,
                    backgroundColor: 'primary.dark',
                }}>

                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box sx={{ typography: 'h1', pb: 2 }} > Kia Ora Auckland,</Box>
                <Box sx={{ typography: 'h3', pb: 2 }} > Welcome to AT</Box>
                <Box sx={{ typography: 'body1', width: '85%' }} > AT is responsible for all the region's transport services, from roads and footpaths, to cycling, parking and public transport.</Box>
            </Grid>

        </Grid>
    )
}
export default Home