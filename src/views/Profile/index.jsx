import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import DoneIcon from '@mui/icons-material/Done';
import { useLocation } from "react-router";

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
    const [status, setStatus] = useState({});


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
        <>
            {location.state === null ? 'No data' :
                <>
                    <Box sx={{ typography: 'h3', mb: 2, display: 'flex', justifyContent: 'center' }}> {`Welcome, ${location.state}`}</Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
                    <Box sx={{ typography: 'body2', justifyContent: 'center', mt: 2 }}>
                        {status.message}
                    </Box>


                </>
            }
        </>
    )
}
export default Profile