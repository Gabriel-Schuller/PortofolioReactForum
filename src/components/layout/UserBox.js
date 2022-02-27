import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import RegisteryContext from "../contexts/registery-context";
import {useContext} from "react";
import {brown, deepPurple, grey, yellow} from "@mui/material/colors";
import {hexToRgb} from "@mui/material";
import {useNavigate} from "react-router";
import LogoutDialog from "../simpleComponents/Modal";


function UserBox() {
    const settings = ['Profile', 'Logout'];
    const registerCtx = useContext(RegisteryContext);
    const navigation = useNavigate();

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [showLogoutModal, setShowLogoutModal] = React.useState(false);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = (event) => {
        setAnchorElUser(null);
        if (event.currentTarget.innerText === "Logout" ) {
            setShowLogoutModal(true)
        } else {
            navigation(`/${event.currentTarget.innerText.toLowerCase()}`)
        }
    };

    return (
        <Box sx={{flexGrow: 0}}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                    <Avatar sx={{bgcolor: "#ff9100"}}
                            variant="rounded">{registerCtx.user.userName[0].toUpperCase()}</Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                sx={{mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
            {showLogoutModal && <LogoutDialog title="error" text="Do you want to log out of your account?"/>}
        </Box>
    )
}

export default UserBox;
