import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import RoomIcon from '@mui/icons-material/Room';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { styled } from '@mui/material/styles';

const TextInput = styled(TextField)({
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    border: 0,
    borderRadius: 4,
    backgroundColor: '#fff',
});

export const Home = () => {
    const [value, setValue] = useState('1');
    const tabArray = [
        { label: "Journey Planner", icon: <RoomIcon />, value: '1' },
        { label: "Live Departures", icon: <DepartureBoardIcon />, value: '2' },
        { label: "Timetables", icon: <ListAltOutlinedIcon />, value: '3' },
    ]

    return (
        <Grid spacing={4} container>
            <Grid item xs={12} md={6}>
                <Box sx={{ backgroundColor: 'primary.dark' }} color="inherit" >
                    <Box sx={{ display: 'flex' }}>
                        {tabArray.map((item, i) =>
                            <Grid
                                container
                                key={i}
                                direction="column"
                                justifyContent="center"
                                onClick={() => (setValue(item.value))}
                                alignItems="center"
                                sx={value === item.value
                                    ? { p: 2, color: 'background.paper' }
                                    : { p: 2, backgroundColor: 'background.paper', '&:hover': { cursor: 'pointer' }, '& svg': { color: 'primary.main' } }}>
                                {item.icon}
                                <Box sx={{ typography: "button", mt: 2 }}>{item.label}</Box>
                            </Grid>
                        )}
                    </Box>
                    {value === '1' &&
                        <Grid container>
                            <Grid item xs={10} >
                                <Box sx={{ color: 'background.default', p: 2 }}>
                                    <TextInput fullWidth variant="filled" label="Chopose starting point" />
                                    <TextInput fullWidth variant="filled" label="Chopose destination point" />
                                    <Button size="large" disabled sx={{ my: 2 }} fullWidth variant="contained">Plan my journey</Button>
                                </Box>
                            </Grid>
                            <Grid item xs={2} >
                                <ImportExportIcon sx={{ position: 'relative', top: '30%', left: 10 }} color="primary" fontSize="large" />
                            </Grid>
                        </Grid>
                    }
                    {value === '2' &&
                        <Box sx={{ color: 'background.default', p: 4 }}>
                            <Box sx={{ typography: 'h4', pb: 2, color: "background.paper" }} > Search for a stop</Box>
                            <TextInput fullWidth variant="filled" label="Location or stop number" />
                        </Box>
                    }
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box sx={{ typography: 'h1', pb: 2 }} > Kia Ora Auckland,</Box>
                <Box sx={{ typography: 'h3', pb: 2 }} > Welcome to AT</Box>
                <Box sx={{ typography: 'body1', width: '85%' }} > AT is responsible for all the region's transport services, from roads and footpaths, to cycling, parking and public transport.</Box>
            </Grid>
        </Grid>
    )
}
export default Home