import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { Link as ActionLink, Navigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import CardMedia from '@mui/material/CardMedia';

import Background from '../../Images/login.png';
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
    const [login, setLogin] = useState();
    const [value, setValue] = useState('');
    const [qrCode, setQRCode] = useState('');
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const formValid = () => {
        if (!value) {
            return false;
        }
        return true;
    };

    useEffect(() => {
        let intervalId;
        const verifyVC = async () => {
            try {
                const rsp = await fetch(`${import.meta.env.VITE_API_HOST}/verifier/presentation`, init);
                const json = await rsp.json();
                setQRCode(json);
                window.localStorage.setItem("state", json.state);

                // set timer to check for state change (every 5 secs)
                intervalId = setInterval(async () => {
                    const state = window.localStorage.getItem("state")
                    const rsp = await fetch(`${import.meta.env.VITE_API_HOST}/verifier/status/${state}`, init);
                    const json = await rsp.json();
                    setStatus(json);
                }, 5000);
            } catch (error) {
                console.log("error", error);
            }
        };
        verifyVC();
        // cleanup timer when component is unloaded
        return () => {
            clearInterval(intervalId);
        }
    }, [])
    // console.log(status)

    return (
        <Dialog fullScreen open={true}>
            <CardMedia sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center', height: '100%', alignItems: 'center' }} image={Background} alt="">
                {status ?
                    <Box sx={{ backgroundColor: 'secondary.main', p: 3, borderRadius: 1, mx: 2 }}>
                        <Box sx={{ display: 'flex', typography: 'h2', alignItems: 'center', color: 'background.paper' }}>
                            <HomeIcon sx={{ fontSize: 60, mr: 1 }} />
                            Log in
                        </Box>
                        {status.Status === '' &&
                            <>
                                <TextInput onChange={handleChange} value={value} sx={{ mt: 5 }} fullWidth variant="filled" label="Username" />
                                <TextInput type="password" fullWidth variant="filled" label="Password" />
                                <Box sx={{ display: 'flex', mt: 2 }}>
                                    <Button disabled={!formValid()}
                                        sx={{ px: 3, '&:hover': { backgroundColor: 'green' }, "&.Mui-disabled": { backgroundColor: 'grey.400' } }}
                                        state={value} onClick={() => setLogin()}
                                        component={ActionLink}
                                        to="/dashboard"
                                        color="primary"
                                        variant="contained">Log in</Button>
                                    <Button sx={{ mx: { md: 1 } }} color="primary">Forgotten Password?</Button>
                                    <Button sx={{ mx: { md: 1 } }} color="primary">Create an account</Button>
                                </Box>
                                <Box display='flex' justifyContent='center' alignItems='center' sx={{ typography: 'h5', pt: 1, mt: 2, color: 'background.paper', borderTop: 1, borderColor: 'background.paper' }}>
                                    Scan QR code with Microsoft Authenticator to login
                                </Box>
                            </>
                        }
                        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }} >
                            {status.Status === '' &&
                                <img src={qrCode.qrCode} alt="qrCode" />
                            }
                            {status.Status === 'request_retrieved' &&
                                <CircularProgress />
                            }
                        </Box>
                        {status.Status === 'presentation_verified' &&
                            <Navigate state={`${status.GivenName} ${status.FamilyName}`} to="/dashboard" />
                        }
                        <Box display='flex' justifyContent='center' alignItems='center' sx={{ typography: 'body', mt: 2, color: 'background.paper' }}>
                            {status.Message}
                        </Box>
                        {login === false && value}
                    </Box>
                    :
                    <CircularProgress />
                }
            </CardMedia>
        </Dialog>
    )
}

export default Login;

