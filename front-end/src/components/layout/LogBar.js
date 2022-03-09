import * as React from 'react';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";



export default function LogBar() {



    return (
        <div>
            <Button href="/login" variant="contained" sx={{my: 1, mx: 1.5}}>
                Login
            </Button>
            <Button href="/register" variant="contained" sx={{my: 1, mx: 1.5}}>
                Register
            </Button>
        </div>
    )
}

