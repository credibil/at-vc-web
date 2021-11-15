import React, { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import { Link as ActionLink } from 'react-router-dom';
import { ButtonGroup, Typography } from '@mui/material';
import { HomeIcon } from '../Icons';

const MenuItems = [
    { label: 'Bus Train Ferry', link: '/' },
    { label: 'Cycling & Walking', link: '/organisation' },
    { label: 'Driving & Parking', link: '/customers' },
    { label: 'Projects & Roadworks', link: '/customers' },
    { label: 'About us', link: '/customers' },
];

const labels = [
    { label: 'Home', link: '/' },
    { label: 'Contact Us', link: '/contact' },
    { label: ' Create an Account', link: '/account' },
]

export const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (e) => { setAnchorEl(e.currentTarget); };
    const handleClose = () => { setAnchorEl(null); };


    return (
        <AppBar elevation={1} position="static" sx={{ padding: 1 }} color="transparent" data-cy="header">
            <Toolbar sx={{
                // mx: 2,
                display: 'flex',
                justifyContent: { sm: 'center' }
            }}>
                <Box>
                    <Hidden smDown>
                        <Box sx={{ display: 'flex', mb: 1, p: '1rem', height: '4rem' }}>
                            <Link component={ActionLink} sx={{ display: 'flex', '& svg': { fontSize: '3rem' }, flexGrow: 1 }} to="/">
                                <HomeIcon />
                            </Link>
                            <Hidden smDown>
                                <ButtonGroup color="inherit" size="small" variant="text">
                                    {labels.map((p, i) =>
                                        <Button key={i}>
                                            {p.label}
                                        </Button>)}
                                </ButtonGroup>
                            </Hidden>
                            <Button sx={{ ml: 1 }} variant="contained">
                                Login
                            </Button>
                        </Box></Hidden>
                    <Stack direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Hidden smDown>
                            {MenuItems.map((p, index) =>
                                <Button sx={{ mx: 1 }} data-ele={p.label && p.label.toLowerCase()} component={ActionLink} key={index} to={p.link}>
                                    {p.label}
                                </Button>
                            )}
                        </Hidden>
                        <Hidden smUp>
                            <IconButton
                                onClick={handleClick}>
                                <MenuIcon />
                            </IconButton>
                            <Typography>Menu</Typography>
                        </Hidden>
                    </Stack>
                </Box>
            </Toolbar>
        </AppBar>

    );
};
export default Header