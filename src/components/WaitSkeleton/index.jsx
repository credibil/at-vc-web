import React from 'react';

import { Skeleton } from '@mui/material';
import Box from '@mui/material/Box';

export const Outline = ({ variant, visible }) => {

    if (!visible) {
        return <></>;
    }

    switch (variant) {
        case "page":
            return <WaitSkeleton visible={visible} />;
        default:
            return <WaitSkeleton visible={visible} />;
    }
};

export const WaitSkeleton = () => {

    return (
        <Box sx={{ padding: 4 }}>
            <Skeleton height="5rem" />
            <Skeleton variant="rect" height="20rem" />
            <Skeleton height="5rem" />
        </Box>
    );
};

