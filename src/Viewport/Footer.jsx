import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
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
    { title: <img src='https://at.govt.nz/media/1982482/logo-new_zealand_government.svg' /> },
]

export const Footer = () => {
    return (
        <Box display="flex" component="footer" sx={{ px: 6, py: 5, bgcolor: '#152239', width: '100%', mt: 2 }}>
            <Grid container
                direction="row"
                justifyContent="space-around"
                alignItems="center">
                <Box sx={{ display: 'flex' }}>
                    <img alt='' src='https://at.govt.nz/media/1982480/logo-at.svg' />
                    {array.map((item, i) =>
                        <Button key={i} size="small" sx={{ color: 'white' }}>
                            {item.title}
                        </Button>
                    )}
                    <img alt="" src='https://shielded.co.nz/img/custom-logo.png' />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    {iconArray.map((item, i) =>
                        <Button key={i} size="small" sx={{ color: 'white' }}>
                            {item.title}
                        </Button>
                    )}
                </Box>
            </Grid>
        </Box >
    );
}
export default Footer;

