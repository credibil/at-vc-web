import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import DoneIcon from '@mui/icons-material/Done';
import { useLocation } from "react-router";
import { Navigate } from 'react-router-dom';
import { Outline } from '../../components/WaitSkeleton';

import.meta.env.VITE_APP_API;

const init = {
    method: "GET",
    mode: 'cors',
    headers: {
        Accept: 'application/ json',
        'Content-Type': 'application/json'
    },
}

export const Profile = () => {
    let location = useLocation()
    const [qrCode, setQRCode] = useState("");
    const [status, setStatus] = useState('');

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

    // console.log("status", status)

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {location.state === null ? <Navigate to="/login" /> :
                status &&
                <>
                    <Box sx={{ paddingTop: 5, typography: 'h3', mb: 2, display: 'flex', justifyContent: 'center' }}> {`${location.state}`}</Box>
                    <Card sx={{ p: 1.5, mt: 5, width: { md: '30%' } }}>

                        <Typography sx={{ textAlign: 'center', mt: 2 }} gutterBottom variant='h4'>
                            Scan this image using Microsoft Authenticator
                        </Typography>
                        <Typography sx={{ textAlign: 'center' }} variant='body2'>
                            Scan QR code to set up passwordless login
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', padding: 5 }}>
                            {status.status === 'awaiting_issuance' &&
                                <img src={qrCode.qrCode} alt="qrCode" />
                            }
                            {status.status === 'request_retrieved' &&
                                <CircularProgress />
                            }
                            {status.status === 'issuance_successful' &&
                                <DoneIcon color="success" fontSize="large" />
                            }
                        </Box>
                        <Typography sx={{ textAlign: 'center' }} gutterBottom variant='body2'>
                            {status.message}
                        </Typography>
                    </Card>
                </>
            }
            <Outline visible={!status} />
        </Box >
    )
}
export default Profile