import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

import { HopIcon, FineIcon } from '../../Icons'

const tabs = [
    { label: "COVID-19 info", icon: <InfoRoundedIcon /> },
    { label: "Register AT HOP card", icon: <HopIcon /> },
    { label: "Pay a fine", icon: <FineIcon /> },
    { label: "Report a problem", icon: <WarningRoundedIcon /> },
]

export const Section = () => {
    return (
        <Box sx={{ display: 'flex', px: 6, py: 2, backgroundColor: 'grey.100', margin: '0 calc(50% - 50vw)', }}>
            {tabs.map((item, i) =>
                <Card sx={{ borderLeft: 2, borderColor: 'primary.main' }} key={i}>
                    <CardHeader avatar={item.icon} title={item.label} />
                </Card>
            )}
        </Box>
    )
}
export default Section;