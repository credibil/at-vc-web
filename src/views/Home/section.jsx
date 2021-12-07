import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

import { HopIcon, FineIcon } from '../../Icons'

const tabs = [
    { label: "COVID-19 info", icon: <InfoRoundedIcon /> },
    { label: "Register AT HOP card", icon: <HopIcon /> },
    { label: "Pay a fine", icon: <FineIcon /> },
    { label: "Report a problem", icon: <WarningRoundedIcon /> },
]

export const Section = () => {
    return (
        <Box sx={{ py: 6, backgroundColor: 'grey.100', margin: '0 calc(50% - 50vw)' }}>
            <Container maxWidth="lg">
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center" spacing={2} >
                    {tabs.map((item, i) =>
                        <Grid xs={6} md={3} key={i} item>
                            <Card sx={{ borderLeft: 4, borderColor: 'primary.main' }} >
                                <CardHeader avatar={item.icon} title={item.label} />
                            </Card>
                        </Grid>

                    )}
                </Grid>
            </Container>
        </Box>
    )
}
export default Section;