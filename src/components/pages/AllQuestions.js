import React, {useContext} from 'react';
import RegisterContex from "../contexts/registery-context";
import CustomizedSnackbars from "../Snackbar";
import QuestionList from "../questions/QuestionList";

function AllQuestionsPage() {
    const registerCtx = useContext(RegisterContex)

    return (
        <div>
            <QuestionList/>
            {registerCtx.loginMode && <CustomizedSnackbars severity="success" message="Login Successful"/>}

        </div>
    );
};

export default AllQuestionsPage;
