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
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import TrainIcon from '@mui/icons-material/Train';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import CardMedia from '@mui/material/CardMedia';

import Background from '../../Images/home.jpg';

const TextInput = styled(TextField)({
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    border: 0,
    borderRadius: 4,
    backgroundColor: '#fff',
});

const tabArray = [
    { label: "Journey Planner", icon: <RoomIcon />, value: '1' },
    { label: "Live Departures", icon: <DepartureBoardIcon />, value: '2' },
    { label: "Timetables", icon: <ListAltOutlinedIcon />, value: '3' },
]

const transportArray = [
    { label: "Bus", icon: <DirectionsBusIcon />, value: '1', description: 'Bus or route number', input: 'e.g. 161 or New Lynn' },
    { label: "Train", icon: <TrainIcon />, value: '2', description: 'Train line or destination', input: 'e.g. South or Britomart' },
    { label: "Ferry", icon: <DirectionsBoatIcon />, value: '3', description: 'Ferry route or destination', input: 'e.g. Half moon bay' },
]

export const Home = () => {
    const [value, setValue] = useState('1');
    const [transportVal, setTransportVal] = useState('1');

    return (
        <CardMedia sx={{ py: 10, m: '0 calc(50% - 50vw)', display: 'flex', justifyContent: 'center', height: 500 }} image={Background} alt="">
            <Grid container spacing={4} container sx={{ maxWidth: 'lg' }}>
                <Grid item xs={12} md={6} >
                    <Box sx={{ backgroundColor: 'secondary.main', display: 'flex' }}>
                        {tabArray.map((item, i) =>
                            <Grid
                                container
                                key={i}
                                direction="column"
                                onClick={() => (setValue(item.value))}
                                alignItems="center"
                                sx={value === item.value
                                    ? { p: 2, color: 'background.paper' }
                                    : { p: 2, backgroundColor: 'background.paper', '&:hover': { cursor: 'pointer' }, '& svg': { color: 'primary.main' } }}>
                                {item.icon}
                                <Typography variant="button" sx={{ mt: 2 }}>{item.label}</Typography>
                            </Grid>
                        )}
                    </Box>
                    <Box sx={{ color: 'background.default', backgroundColor: 'secondary.main', p: 4 }}>
                        {value === '1' &&
                            <Box sx={{ display: 'flex' }}>
                                <Box>
                                    <TextInput fullWidth variant="filled" label="Choose starting point" />
                                    <TextInput fullWidth variant="filled" label="Choose destination point" />
                                    <Button size="large" disabled sx={{ my: 2 }} fullWidth variant="contained">Plan my journey</Button>
                                </Box>
                                <ImportExportIcon sx={{ position: 'relative', top: 50, left: 10 }} color="primary" fontSize="large" />
                            </Box>
                        }
                        {value === '2' &&
                            <>
                                <Typography variant='h5' sx={{ pb: 2, color: "background.paper" }} > Search for a stop</Typography>
                                <TextInput fullWidth variant="filled" label="Location or stop number" />
                            </>
                        }
                        {value === '3' &&
                            <>
                                <Typography variant='h5' sx={{ pb: 2, color: "background.paper" }}>Transport mode</Typography>
                                <ButtonGroup fullWidth color="inherit">
                                    {transportArray.map((item, i) =>
                                        <Button
                                            sx={transportVal === item.value
                                                ? { '& svg': { color: 'background.paper' } }
                                                : {
                                                    backgroundColor: 'background.paper', '&:hover': { backgroundColor: 'background.paper' },
                                                    '& svg': { color: 'secondary.main' }
                                                }}
                                            variant={transportVal === item.value ? 'outlined' : 'text'}
                                            onClick={() => (setTransportVal(item.value))}
                                            key={i}>
                                            {item.icon}
                                        </Button>
                                    )}
                                </ButtonGroup>
                                {transportArray.map((item, i) => item.value === transportVal &&
                                    <Box key={i}>
                                        <Typography variant='h5' sx={{ color: "background.paper", pt: 4 }} >{item.description}</Typography>
                                        <TextInput fullWidth variant="filled" label={item.input} />
                                    </Box>
                                )}
                            </>
                        }
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant='h1' sx={{ pb: 2 }} > Kia Ora Auckland,</Typography>
                    <Typography variant='h3' sx={{ pb: 2 }} > Welcome to AT</Typography>
                    <Typography variant='body1' sx={{ width: '85%' }} > AT is responsible for all the region's transport services, from roads and footpaths, to cycling, parking and public transport.</Typography>
                </Grid>
            </Grid >
        </CardMedia>
    )
}
export default Home