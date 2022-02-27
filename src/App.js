
import './App.css';
import Login from "./components/pages/Login";
import {Route, Routes} from "react-router-dom";
import Register from "./components/pages/Register";
import NavBar from "./components/layout/NavBar";


import * as React from "react";
import AllQuestionsPage from "./components/pages/AllQuestions";
import SignInSide from "./components/layout/LogBar";
import ConditionalModal from "./components/simpleComponents/Modal";
import LogoutDialog from "./components/simpleComponents/Modal";
import QuestionList from "./components/questions/QuestionList";
import GutterlessList from "./components/questions/QuestionItem";


function App() {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path='/' element={<AllQuestionsPage/>}>
                </Route>


                <Route path='/a' element={<QuestionList/>}>
                </Route>

                <Route path='/login' element={<Login/>}>
                </Route>

                <Route path='/register' element={<Register/>}>
                </Route>
            </Routes>
        </div>
    )
}

export default App;
