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
                    width: '100%',
                    height: 300,
                    backgroundColor: 'primary.dark',
                }}>
                    <ButtonGroup color="inherit" variant="text" >
                        {tabArray.map((item, i) =>
                            <Button sx={value === item.value ? { color: 'background.paper' } : { color: 'text.secondary' }} onClick={() => (setValue(item.value))} key={i}>{item.label}</Button>)}
                    </ButtonGroup>
                    {value === '1' &&
                        <Box>
                            Item One
                        </Box>
                    }
                    {value === '2' &&
                        <Box>
                            Item Two
                        </Box>
                    }
                    {value === '3' &&
                        <Box >
                            Item Three
                        </Box>
                    }
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