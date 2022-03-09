import React, {createContext, useEffect, useLayoutEffect, useState} from 'react';
import axios from "axios";

const RegisterContex = createContext({
    registrationMade: false,
    loginMode: false,
    logStatus: false,
    user: null,
    makeRegistration: () => {
    },
    unmakeRegistration: () => {
    },
    makeLogin: () => {
    },
    unmakeLogin: () => {
    }

})

export function RegisterContextProvider(props) {

    const [registration, setRegistration] = useState(false);
    const [login, setLogin] = useState(false);
    const [isLog, setIsLog] = useState(false);
    const [user, setUser] = useState(null);


    async function axiosGet() {
        setIsLog(prevState => false)
        const response = await axios.get("https://localhost:44338/api/users/user", {withCredentials: true});
        setUser(response.data);
        setIsLog(true);
    }

    useLayoutEffect(() => {
        axiosGet();
    }, [login]);


    function makeLogin() {
        setLogin(prevState => true)
    }

    function unmakeLogin() {
        setLogin(prevState => false)
    }

    function makeRegistration() {
        setRegistration(prevState => true)
    }

    function unmakeRegistration() {
        setRegistration(prevState => false)
    }


    const context = {
        registrationMade: registration,
        loginMode: login,
        logStatus: isLog,
        user: user,
        makeRegistration: makeRegistration,
        unmakeRegistration: unmakeRegistration,
        makeLogin: makeLogin,
        unmakeLogin: unmakeLogin
    };

    return <RegisterContex.Provider value={context}>{props.children}</RegisterContex.Provider>
}


export default RegisterContex;