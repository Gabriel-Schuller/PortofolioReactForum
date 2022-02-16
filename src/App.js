import logo from './logo.svg';
import './App.css';
import SignInSide from "./components/pages/SignIn";
import {Route, Routes} from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import NavBar from "./components/layout/NavBar";

import CustomizedSnackbars from "./components/Snackbar";
import * as React from "react";
import AllQuestionsPage from "./components/pages/AllQuestions";

function App() {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path='/' element={<AllQuestionsPage/>}>
                </Route>

                <Route path='/login' element={<SignInSide/>}>
                </Route>

                <Route path='/register' element={<SignUp/>}>
                </Route>
            </Routes>
        </div>
    )
}

export default App;
