import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import axios from "axios";
import {useContext} from "react";
import RegisteryContext from "../contexts/registery-context";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function LogoutDialog({title, text}) {
    const [open, setOpen] = React.useState(true);

    const registerCtx = useContext(RegisteryContext);


    const handleClose = () => {
        setOpen(false);
    };

    const logOut = async () => {
        const response = await axios.post("https://localhost:44338/api/Users/logout", {}, {withCredentials: true})
        let myVar = response.data;
        registerCtx.unmakeLogin();

        setOpen(false);
    }


    return (
        <div>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                fullWidth={true}
                maxWidth={"sm"}
                sx={{textAlign: "center"}}
            >
                <DialogTitle>
                    {title == "error" ? <DoDisturbOnOutlinedIcon color="error" fontSize="large"/>
                        : title}

                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {text}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={logOut} sx={{bgcolor: "#a8a8a8", color: "blue"}}>Log Out</Button>
                    <Button onClick={handleClose} sx={{bgcolor: "#ee3535", color: "purple"}}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
