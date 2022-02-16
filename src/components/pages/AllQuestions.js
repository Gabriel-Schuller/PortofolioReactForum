import React, {useContext} from 'react';
import RegisterContex from "../contexts/registery-context";
import CustomizedSnackbars from "../Snackbar";

function AllQuestionsPage() {
    const registerCtx = useContext(RegisterContex)

    return (
        <div>
            This is the questions page
            {registerCtx.loginMode && <CustomizedSnackbars severity="success" message="Login Successful"/>}
        </div>
    );
};

export default AllQuestionsPage;
