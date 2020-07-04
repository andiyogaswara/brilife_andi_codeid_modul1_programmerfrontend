const styles = theme => ({
    root: {
        padding: theme.spacing(2),
    },
    formButton: {
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'flex-end'
    },
    formField: {
        padding: theme.spacing(2),

    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',

    },

});

export default styles;