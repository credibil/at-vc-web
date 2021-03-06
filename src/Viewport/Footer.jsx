import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { LinkedIn } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import { Instagram } from '@mui/icons-material';
import { YouTube } from '@mui/icons-material';

const array = [
    { title: "Contact us" },
    { title: "Terms of use" },
    { title: "Accessibility" },
    { title: "Privacy" },
    { title: "Careers" },
    { title: "Copyright" },
]

const iconArray = [
    { title: <Twitter sx={{ color: 'white' }} /> },
    { title: <Facebook sx={{ color: 'white' }} /> },
    { title: <Instagram sx={{ color: 'white' }} /> },
    { title: <YouTube sx={{ color: 'white' }} /> },
    { title: <LinkedIn sx={{ color: 'white' }} /> },
]

export const Footer = () => {
    return (
        <Box display="flex" component="footer" sx={{ px: 6, py: 5, bgcolor: 'secondary.dark', width: '100%' }}>
            <Grid container
                direction="row"
                justifyContent="space-around"
                alignItems="center">
                <Box sx={{ display: 'flex' }}>
                    <img alt='' src='https://at.govt.nz/media/1982480/logo-at.svg' />
                    {array.map((item, i) =>
                        <Button key={i} size="small" sx={{ color: 'background.paper', my: 2, mx: 0.5 }}>
                            {item.title}
                        </Button>
                    )}
                    <IconButton size="small">
                        <img width="45" alt="" src='https://shielded.co.nz/img/custom-logo.png' />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    {iconArray.map((item, i) =>
                        <IconButton key={i} size="small" sx={{ color: 'background.paper' }}>
                            {item.title}
                        </IconButton>
                    )}
                    <Button size="small">
                        <img src='https://at.govt.nz/media/1982482/logo-new_zealand_government.svg' alt="" />
                    </Button>
                </Box>
            </Grid>
        </Box >
    );
}
export default Footer;

