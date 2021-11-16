import React, { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import { Link as ActionLink } from 'react-router-dom';
import ButtonGroup from '@mui/material/ButtonGroup';
import Menu from '@mui/material/Menu';

import { HomeIcon } from '../Icons';
import { maxWidth } from '@mui/system';
import { Container } from '@mui/material';

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
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <AppBar elevation={1} position="static" sx={{ padding: 1, }} color="transparent" data-cy="header">
            <Container maxwidth="lg">
                <Hidden mdDown>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', mb: 1, mx: 4, height: '4rem' }}>
                        <Link component={ActionLink} sx={{ display: 'flex', '& svg': { fontSize: '3rem' }, flexGrow: 1 }} to="/">
                            <HomeIcon />
                        </Link>
                        <ButtonGroup color="inherit" size="small" variant="text">
                            {labels.map((p, i) =>
                                <Button key={i}>
                                    {p.label}
                                </Button>)}
                        </ButtonGroup>
                        <Button component={ActionLink} sx={{ ml: 1 }} to="/login" variant="contained">
                            Log in
                        </Button>
                    </Toolbar>
                </Hidden>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Hidden mdDown>
                        {MenuItems.map((p, index) =>
                            <Button size="large" data-ele={p.label && p.label.toLowerCase()} component={ActionLink} key={index} to={p.link}>
                                {p.label}
                            </Button>
                        )}
                    </Hidden>
                    <Hidden mdUp>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Button
                                color="inherit"
                                onClick={handleClick}
                                startIcon={<MenuIcon color="primary" />}  >
                                Menu
                            </Button>
                            <Link component={ActionLink} sx={{ '& svg': { fontSize: '2.5rem' } }} to="/">
                                <HomeIcon />
                            </Link>
                            <Button component={ActionLink} to="/login" variant="text">
                                Log in
                            </Button>
                            <Menu
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                {MenuItems.map((p, index) =>
                                    <MenuItem key={index} onClick={handleClose}>{p.label}</MenuItem>
                                )}
                            </Menu>
                        </Grid>
                    </Hidden>
                </Toolbar>
            </Container>
        </AppBar>

    );
};
export default Header