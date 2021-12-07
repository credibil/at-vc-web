import React from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useLocation } from "react-router";
import { Navigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import PersonIcon from '@mui/icons-material/Person';

export const MyAT = () => {
    let location = useLocation()

    return (
        <>
            {location.state === null ? <Navigate to="/" /> :
                <>
                    <Box sx={{ my: 3, display: 'flex', py: 3, justifyContent: 'space-between' }}>
                        <Typography variant="h1" >MyAT</Typography>
                        <Button sx={{ height: '2rem' }} variant="contained" endIcon={<PersonIcon />}>My details</Button>
                    </Box>
                    <Typography variant="subtitle1" >Hello {location.state}</Typography>
                    <Grid spacing={4} container>
                        <Grid item xs={12} md={5} >
                            <Box sx={{ backgroundColor: 'grey.100', px: 5, py: 2, mt: 2 }}>
                                <Typography sx={{ my: 1, color: 'primary.main' }} variant="h2">My AT HOP Cards</Typography>
                                <Card sx={{ p: 2 }}>
                                    <Typography sx={{ my: 1 }} variant="h3">{`${location.state}'s card`}</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <Typography variant="h2">$59.90</Typography>
                                        <Typography variant="body2">card balance</Typography>
                                    </Box>
                                    <Button endIcon={<ArrowForwardIosIcon fontSize="small" />} sx={{ my: 1 }} >How is my balance calculated? </Button>
                                    <Button sx={{ my: 1 }} fullWidth variant="contained" >Top up online</Button>
                                    <Button fullWidth variant="outlined">Top up in person</Button>
                                    <Typography sx={{ my: 1 }} variant="body2"> You’ll need to top up in person for instant access</Typography>
                                    <Divider />
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5} >
                            <Box sx={{ backgroundColor: 'grey.100', px: 5, py: 2, mt: 2 }}>
                                <Typography sx={{ my: 1, color: 'primary.main' }} variant="h2">AT Park</Typography>
                                <Card sx={{ p: 2 }}>
                                    <Typography sx={{ my: 1 }} variant="h4">Pay as you go parking</Typography>
                                    <Button variant="contained" sx={{ my: 1 }} >Manage account </Button>
                                    <Divider />
                                    <Typography sx={{ my: 1 }} variant="h4">Parking permits</Typography>
                                    <Typography sx={{ my: 1 }} variant="body2"> Apply for and manage your parking permits.</Typography>
                                    <Button variant="contained" sx={{ my: 1 }} >Parking permits</Button>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                </>
            }
        </>
    )
}
export default MyAT