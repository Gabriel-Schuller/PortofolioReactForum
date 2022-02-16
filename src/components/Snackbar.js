import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {useContext} from "react";
import RegisterContex from "./contexts/registery-context";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({severity, message}) {
    const [open, setOpen] = React.useState(true);
    const registerCtx = useContext(RegisterContex);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway' || event.currentTarget.title === 'Close') {
            setOpen(false);
        }
        registerCtx.unmakeRegistration();
        registerCtx.unmakeLogin();
    };

    return (
        <Stack spacing={2} sx={{width: '100%'}}>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{width: '100%'}}>
                    {message}
                </Alert>
            </Snackbar>

        </Stack>
    );
}
