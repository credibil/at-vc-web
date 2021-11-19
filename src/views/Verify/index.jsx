import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import { config } from '../../config';



export const Verify = () => {
    const [qr, useQr] = useState([])
    const [status, setStatus] = useState();
    const appUrl = `${config.urlAlt}/verifier/presentation`;
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

    console.log("****", qr)


    const appStatus = `${config.urlAlt}/verifier/status/${qr.state}`;
    useEffect(() => {
        const fetchState = async () => {
            try {
                const response = await fetch(appStatus, reqInit);
                const json = await response.json();
                setStatus(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchState();
    }, []);

    console.log("STATUS", status)
    return (
        <Box>

            <Box>
                <CardMedia
                    component="img"
                    height="100%"
                    image={qr.qrCode}
                    alt="qr code"
                />
            </Box>
            <Box sx={{ typography: 'h4', mt: 2 }}>
                Scan QR code to verify yourself with Microsoft Authenticator
            </Box>

        </Box>
    )
}

export default Verify