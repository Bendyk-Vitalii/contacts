import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const theme = createTheme({
    spacing: 4,   
});

export const useStyles = makeStyles({
    root: {
        marginTop: theme.spacing(4),
    },
    headContainer: {
        marginBottom: theme.spacing(3),
    }
})

