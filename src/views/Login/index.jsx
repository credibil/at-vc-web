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

    const appUrl = `${config.url}/issuer/issuance`;
    const reqInit = config.getReqInit;

    const handleClickOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

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

    console.log(qr)

    return (
        <Box sx={{ backgroundColor: 'secondary.main', width: 500, p: 3, borderRadius: 1 }}>
            <Box sx={{ display: 'flex', typography: 'h2', alignItems: 'center', color: 'background.paper' }}>
                <HomeIcon sx={{ fontSize: 60, mr: 1 }} />
                Log in
            </Box>
            <TextInput sx={{ mt: 5 }} fullWidth variant="filled" label="Email Address" />
            <TextInput fullWidth variant="filled" label="Password" />
            <Box sx={{ display: 'flex', mt: 2 }}>
                <Button sx={{ px: 3 }} color="primary" variant="contained">Log in</Button>
                <Button sx={{ mx: 1 }} color="primary" >Forgotten Password?</Button>
                <Button sx={{ mx: 1 }} color="primary" >Create an account</Button>
            </Box>
            <Box sx={{ mt: 4, borderTop: 1, borderColor: 'grey.500' }} />
            <Dialog fullWidth onClose={handleDialogClose} open={dialogOpen}>
                <CardMedia
                    component="img"
                    height="100%"
                    image={qr.qrCode}
                    alt="qr code"
                />
            </Dialog>
            <Box sx={{ typography: 'body2', mt: 2, color: 'background.paper' }}>
                Open QR code and scan with microsoft authenticator
            </Box>
            <Button onClick={handleClickOpen}>Scan Here</Button>
        </Box>
    )
}
export default Login