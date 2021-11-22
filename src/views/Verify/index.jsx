import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import { config } from '../../config';


export const Verify = () => {
    const [qrCode, setQRCode] = useState("");
    const [status, setStatus] = useState({});
    const reqInit = config.getReqInit;

    useEffect(() => {
        let intervalId;

        const verifyVC = async () => {
            try {
                const rsp = await fetch(`${config.urlAlt}/verifier/presentation`, reqInit);
                const json = await rsp.json();
                setQRCode(json.qrCode);
                window.localStorage.setItem("state", JSON.stringify(json.state));

                // set timer to check for state change (every 5 secs)
                intervalId = setInterval(async () => {
                    const state = window.localStorage.getItem("state")
                    const rsp = await fetch(`${config.urlAlt}/verifier/status/${state}`, reqInit);
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


    return (
        <Box>
            <Box>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <img src={qrCode} alt="qrCode" />
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

function useLocalStorage(key) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem([]);
            return item ? JSON.parse(item) : [];
        } catch (error) {
            return [];
        }
    });
    const useQr = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) { }
    };
    return [storedValue, useQr];
}
