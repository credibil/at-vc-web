import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { HomeIcon } from '@/Icons';
import { config } from '../../config';

const TextInput = styled(TextField)({
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    border: 0,
    borderRadius: 4,
    backgroundColor: '#fff',
});

var reqInit = config.getReqInit;

export const Login = () => {
    const [qrCode, setQRCode] = useState("");
    const [status, setStatus] = useState({});


    // get VC issuance request QR code
    useEffect(() => {
        let intervalId;
        const requestVC = async () => {
            try {
                const rsp = await fetch(`${config.url}/issuer/issuance`, reqInit);
                const json = await rsp.json();
                setQRCode(json);
                console.log(json)
                JSON.stringify(json.state)
                window.localStorage.setItem("state", JSON.stringify(json.state));
                // set timer to check for state change(every 5 secs)
                intervalId = setInterval(async () => {
                    const state = window.localStorage.getItem("state")
                    const rsp = await fetch(`${config.url}/issuer/status/${state}`, reqInit);
                    const json = await rsp.json();
                    setStatus(json);
                }, 5000);
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

    useEffect(() => {
        const func = async () => {
            try {
                // intervalId = setInterval(async () => {
                // const state = window.localStorage.getItem("state")
                const rsp = await fetch(`${config.url}/issuer/status/${qrCode.state}`, reqInit);
                const json = await rsp.json();
                setStatus(json);
                JSON.stringify(json.state)
                // }, 5000);
            } catch (error) {
                console.log("error", error);
            }
        }
        func();


    }, [])
    console.log(status.Status)

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
                <Button sx={{ mx: 1 }} color="primary">Forgotten Password?</Button>
                <Button sx={{ mx: 1 }} color="primary">Create an account</Button>
            </Box>
            <Box sx={{ mt: 4, display: 'flex', pt: 1, justifyContent: 'center', borderTop: 1, borderColor: 'grey.500' }} >
                <img src={qrCode.qrCode} alt="qrCode" />
            </Box>
            {/* <Button onClick={() => onClick()}>Get update</Button> */}
            <Box sx={{ display: 'flex', typography: 'body2', justifyContent: 'center', mt: 2, color: 'background.paper' }}>
                {status.Message}
            </Box>
        </Box>
    )
}

export default Login;

