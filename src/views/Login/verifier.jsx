import React, { useEffect, useState } from 'react';


import { config } from '../../config';



export const Verifier = () => {
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

}