import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link as ActionLink } from 'react-router-dom';

import.meta.env.VITE_APP_API;
import { HomeIcon } from '@/Icons';

const TextInput = styled(TextField)({
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    border: 0,
    borderRadius: 4,
    backgroundColor: '#fff',
});


export const Login = () => {
    const [login, setLogin] = useState();
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const formValid = () => {
        if (!value) {
            return false;
        }
        return true;
    };


    return (
        <>
            <Box sx={{ backgroundColor: 'secondary.main', width: 500, p: 3, borderRadius: 1 }}>
                <Box sx={{ display: 'flex', typography: 'h2', alignItems: 'center', color: 'background.paper' }}>
                    <HomeIcon sx={{ fontSize: 60, mr: 1 }} />
                    Log in
                </Box>
                <TextInput onChange={handleChange} value={value} sx={{ mt: 5 }} fullWidth variant="filled" label="Username" />
                <TextInput type="password" fullWidth variant="filled" label="Password" />
                <Box sx={{ display: 'flex', mt: 2 }}>
                    <Button disabled={!formValid()} sx={{ px: 3 }} state={value} onClick={() => setLogin()} component={ActionLink} to="/profile" color="primary" variant="contained">Log in</Button>
                    <Button sx={{ mx: 1 }} color="primary">Forgotten Password?</Button>
                    <Button sx={{ mx: 1 }} color="primary">Create an account</Button>
                </Box>
            </Box>
            {login === false && value}
        </>
    )
}

export default Login;

