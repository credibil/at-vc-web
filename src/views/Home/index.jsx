import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const tabArray = [
    { label: "Journey Planner", icon: '', value: '1' },
    { label: "Live Departures", icon: '', value: '2' },
    { label: "Timetables", icon: '', value: '3' },
]

export const Home = () => {
    const [value, setValue] = useState('1');

    return (
        <Grid spacing={4} container>
            <Grid item xs={12} sm={6}>
                <Box sx={{
                    // width: '100%',
                    height: 300,
                    backgroundColor: 'primary.dark',
                }}>
                    <ButtonGroup sx={{ width: '100%' }} color="inherit" variant="text">
                        {tabArray.map((item, i) =>
                            <Box component="span" sx={value === item.value ? { p: 2, color: 'background.paper', borderRadius: 0 } : { p: 2, backgroundColor: 'background.paper', borderRadius: 0 }}>
                                <Button onClick={() => (setValue(item.value))} key={i}>{item.label}</Button>
                            </Box>
                        )}
                    </ButtonGroup>
                    {tabArray.map((item, i) => value === item.value &&
                        <Box key={i} sx={{ color: 'background.default' }}>
                            {item.label}
                        </Box>
                    )}
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