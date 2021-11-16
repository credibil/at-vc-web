import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { HomeIcon } from '../../Icons';

const TextInput = styled(TextField)({
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    border: 0,
    borderRadius: 4,
    backgroundColor: '#fff',
});

export const Login = () => {
    return (
        <Box sx={{ backgroundColor: 'primary.dark', width: 500, p: 3, borderRadius: 1 }}>
            <Box sx={{ display: 'flex', typography: 'h2', alignItems: 'center', color: 'background.paper' }}>
                <HomeIcon sx={{ fontSize: 60, mr: 1 }} />
                Log in
            </Box>
            <TextInput sx={{ mt: 5 }} fullWidth variant="filled" label="Email Address" />
            <TextInput fullWidth variant="filled" label="Password" />
            <Button sx={{ px: 3, mt: 2 }} color="primary" variant="contained">Log in</Button>
        </Box>
    )
}
export default Login