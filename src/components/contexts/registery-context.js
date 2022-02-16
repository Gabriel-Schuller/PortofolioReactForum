import React, {createContext, useState} from 'react';

const RegisterContex = createContext({
    registrationMade: false,
    loginMode: false,
    makeRegistration: () => {},
    unmakeRegistration: () => {},
    makeLogin: () => {},
    unmakeLogin: () => {}

})

export function RegisterContextProvider(props) {
    const [registration, setRegistration] = useState(false);
    const [login, setLogin] = useState(false);


    function makeLogin(){
        setLogin(prevState => true)
    }

    function unmakeLogin() {
        setLogin(prevState => false)
    }

    function makeRegistration(){
        setRegistration(prevState => true)
    }

    function unmakeRegistration() {
        setRegistration(prevState => false)
    }

    const context = {
        registrationMade: registration,
        loginMode: login,
        makeRegistration: makeRegistration,
        unmakeRegistration: unmakeRegistration,
        makeLogin: makeLogin,
        unmakeLogin: unmakeLogin
    };

    return <RegisterContex.Provider value={context}>{props.children}</RegisterContex.Provider>
}


export default RegisterContex;