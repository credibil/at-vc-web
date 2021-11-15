import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import RoomIcon from '@mui/icons-material/Room';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';



export const Home = () => {
    const [value, setValue] = useState('1');
    const tabArray = [
        { label: "Journey Planner", icon: <RoomIcon />, value: '1' },
        { label: "Live Departures", icon: <DepartureBoardIcon />, value: '2' },
        { label: "Timetables", icon: <ListAltOutlinedIcon />, value: '3' },
    ]

    return (
        <Grid spacing={4} container>
            <Grid item xs={12} sm={6}>
                <Box sx={{
                    height: 300,
                    backgroundColor: 'primary.dark',
                }}>
                    <Box sx={{ width: '100%', display: 'flex' }} color="inherit" >
                        {tabArray.map((item, i) =>
                            <Grid container
                                key={i}
                                direction="column"
                                justifyContent="center"
                                onClick={() => (setValue(item.value))}
                                alignItems="center" sx={value === item.value ? { p: 2, color: 'background.paper', borderRadius: 0 } : { p: 2, backgroundColor: 'background.paper', '&:hover': { cursor: 'pointer' }, borderRadius: 0, '& svg': { color: 'primary.main' } }}>
                                {item.icon}
                                <Box sx={{ typography: "button", mt: 2 }}  >{item.label}</Box>
                            </Grid>
                        )}
                    </Box>
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