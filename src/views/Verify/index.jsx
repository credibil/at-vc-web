import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import { config } from '../../config';

import.meta.env.VITE_APP_API;

const init = {
    method: "GET",
    mode: 'cors',
    headers: {
        Accept: 'application/ json',
        'Content-Type': 'application/json'
    },
}

export const Verify = () => {
    const [qrCode, setQRCode] = useState("");
    const [status, setStatus] = useState({});

    useEffect(() => {
        let intervalId;
        const verifyVC = async () => {
            try {
                const rsp = await fetch(`${import.meta.env.VITE_API_HOST}/verifier/presentation`, init);
                const json = await rsp.json();
                setQRCode(json);
                window.localStorage.setItem("state", JSON.stringify(json.state));

                // set timer to check for state change (every 5 secs)
                intervalId = setInterval(async () => {
                    const state = window.localStorage.getItem("state")
                    const rsp = await fetch(`${import.meta.env.VITE_API_HOST}/verifier/status/${state}`, init);
                    const json = await rsp.json();
                    setStatus(json);
                }, 10000);
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

    console.log("status", status)

    return (
        <Box>
            <Box>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <img src={qrCode.qrCode} alt="qrCode" />
                </Box>
                <Box sx={{ typography: 'h4', mt: 2 }}>
                    Scan QR code to verify yourself with Microsoft Authenticator
                </Box>
                <Box sx={{ typography: 'h4', mt: 2 }}>
                    {status.message}
                </Box>
            </Box>
        </Box>
    )
}

export default Verify;