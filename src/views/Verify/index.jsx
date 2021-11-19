import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import { config } from '../../config';



export const Verify = () => {
    const [qr, useQr] = useState([])

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

    console.log(qr)

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
                Scan QR code and Microsoft Authenticator
            </Box>

        </Box>
    )
}

export default Verify