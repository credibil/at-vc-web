import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useLocation } from "react-router";
import { Navigate } from 'react-router-dom';

export const MyAT = () => {
    let location = useLocation()

    return (
        <>
            {location.state === null ? <Navigate to="/" /> :
                <Card sx={{ p: 1.5, mt: 10 }}>
                    <Box sx={{ typography: 'h3', mb: 2, display: 'flex', justifyContent: 'center' }}> {location.state}</Box>
                </Card>
            }
        </>
    )
}
export default MyAT