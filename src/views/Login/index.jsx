import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import CardMedia from '@mui/material/CardMedia';

import { HomeIcon } from '../../Icons';
import { config } from '../../config';

const TextInput = styled(TextField)({
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    border: 0,
    borderRadius: 4,
    backgroundColor: '#fff',
});


export const Login = () => {
    const [qr, useQr] = useState([])
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleClickOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };
    const appUrl = `${config.url}/issuer/issuance`;
    const reqInit = config.getReqInit;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(appUrl, reqInit);
                const json = await response.json();
                useQr(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box sx={{ backgroundColor: 'primary.dark', width: 500, p: 3, borderRadius: 1 }}>
            <Box sx={{ display: 'flex', typography: 'h2', alignItems: 'center', color: 'background.paper' }}>
                <HomeIcon sx={{ fontSize: 60, mr: 1 }} />
                Log in
            </Box>
            <TextInput sx={{ mt: 5 }} fullWidth variant="filled" label="Email Address" />
            <TextInput fullWidth variant="filled" label="Password" />
            <Button sx={{ px: 3, mt: 2 }} color="primary" variant="contained">Log in</Button>
            <Box sx={{ mt: 4, borderTop: 1, borderColor: 'grey.500' }} />
            <Dialog fullWidth onClose={handleDialogClose} open={dialogOpen}>
                <CardMedia
                    component="img"
                    height="100%"
                    image={qr.qrCode}
                    alt="qr code"
                />
            </Dialog>
            <Button onClick={handleClickOpen}>Scan Here</Button>
        </Box>
    )
}
export default Login