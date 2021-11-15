import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://credibil.io" target="_blank" rel="noopener">
                Credibil
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Box display="flex" component="footer" justifyContent="center"
            sx={{ py: 3, px: 2, mt: 'auto', ml: 'auto', mr: 'auto' }}
        >
            <Copyright />
        </Box >
    );
}