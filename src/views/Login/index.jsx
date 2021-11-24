import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import.meta.env.VITE_APP_API;
import { HomeIcon } from '@/Icons';

const TextInput = styled(TextField)({
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    border: 0,
    borderRadius: 4,
    backgroundColor: '#fff',
});

const init = {
    method: "GET",
    mode: 'cors',
    headers: {
        Accept: 'application/ json',
        'Content-Type': 'application/json'
    },
}

export const Login = () => {
    const [qrCode, setQRCode] = useState("");
    const [status, setStatus] = useState({});

    // get VC issuance request QR code
    useEffect(() => {
        let intervalId;
        const requestVC = async () => {
            try {
                const rsp = await fetch(`${import.meta.env.VITE_API_HOST}/issuer/issuance`, init);
                const json = await rsp.json();
                setQRCode(json);
                window.localStorage.setItem("state", json.state);

                // set timer to check for state change(every 5 secs)
                intervalId = setInterval(async () => {
                    const state = window.localStorage.getItem("state")
                    const rsp = await fetch(`${import.meta.env.VITE_API_HOST}/issuer/status/${state}`, init);
                    const json = await rsp.json();
                    setStatus(json);
                }, 10000);
            } catch (error) {
                console.log("error", error);
            }
        };
        requestVC();
        // cleanup timer when component is unloaded
        return () => {
            clearInterval(intervalId);
        }
    }, [])

    // console.log("status", status)

    return (
        <>
            <Box sx={{ backgroundColor: 'secondary.main', width: 500, p: 3, borderRadius: 1 }}>
                <Box sx={{ display: 'flex', typography: 'h2', alignItems: 'center', color: 'background.paper' }}>
                    <HomeIcon sx={{ fontSize: 60, mr: 1 }} />
                    Log in
                </Box>
                <TextInput sx={{ mt: 5 }} fullWidth variant="filled" label="Email Address" />
                <TextInput fullWidth variant="filled" label="Password" />
                <Box sx={{ display: 'flex', mt: 2 }}>
                    <Button sx={{ px: 3 }} color="primary" variant="contained">Log in</Button>
                    <Button sx={{ mx: 1 }} color="primary">Forgotten Password?</Button>
                    <Button sx={{ mx: 1 }} color="primary">Create an account</Button>
                </Box>
                <Box sx={{ mt: 4, display: 'flex', pt: 1, justifyContent: 'center', borderTop: 1, borderColor: 'grey.500' }} >
                    <img src={qrCode.qrCode} alt="qrCode" />
                </Box>
                <Box sx={{ color: 'background.paper', display: 'flex', typography: 'body2', justifyContent: 'center', mt: 2 }}>
                    {status.message}
                </Box>
            </Box>
        </>
    )
}

export default Login;

