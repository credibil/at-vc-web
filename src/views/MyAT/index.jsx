import React from 'react';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { useLocation } from "react-router";
import { Navigate } from 'react-router-dom';

export const MyAT = () => {
    let location = useLocation()

    return (
        <>
            {location.state === null ? <Navigate to="/" /> :
                <>
                    <Box sx={{ display: 'flex', flexDirection: 'flex-start' }}>
                        <Typography variant="h1" >My AT</Typography>
                    </Box>
                    <Typography variant="h4" >Hello {location.state}</Typography>
                    <Card>
                        <CardHeader title={`${location.state}'s card`}
                            subheader={`${<Typography variant="h4" >$59.90</Typography>} card balance`} />
                    </Card>

                </>
            }
        </>
    )
}
export default MyAT