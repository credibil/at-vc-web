import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme } from '@mui/material/styles';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GroupIcon from '@mui/icons-material/Group';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;
const mainMenu = [
    { title: 'Onboarding', icon: <PersonAddIcon /> },
    { title: 'Insights', icon: <InboxIcon /> },
    { title: 'Customers', icon: <GroupIcon /> },
    { title: 'Transactions', icon: <AttachMoneyIcon /> }
];

const optionsMenu = [
    { title: 'Settings', icon: <SettingsIcon /> },
]

const Header = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export const DrawerHeader = ({ children }) => {
    return (
        <Header>
            {children}
        </Header>
    );
}

export const Drawer = ({ open, onClick }) => {
    const theme = useTheme();

    return (
        <MuiDrawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={onClick}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {mainMenu.map(item =>
                    <ListItem key={item.title} button>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItem>
                )}
            </List>
            <Divider />
            <List>
                {optionsMenu.map(item =>
                    <ListItem key={item.title} button>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItem>
                )}
            </List>
        </MuiDrawer>
    );
}

export default Drawer;