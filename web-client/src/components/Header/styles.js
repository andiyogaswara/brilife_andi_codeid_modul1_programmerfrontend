import { PlayCircleFilledWhite } from "@material-ui/icons";

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    menulogo: {
        textDecoration: 'none',
        color: 'white'
    }
});

export default styles;