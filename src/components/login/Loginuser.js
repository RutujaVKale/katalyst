import React from 'react'
import {useState,useEffect} from "react";
import fire from '../Fire'
import LoginComponent from './LoginComponent';
import Navbar from '../Navbar/Navbar';


const Loginuser = () => {
    const[user,setUser] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword]= useState(""); 
    const [emailError,setEmailError]=useState("");
    const [passwordError,setPasswordError]=useState("");
    const [hasAccount,setHasAccount]=useState(false);

    const clearInputs= ()=>{
        setEmail("");
        setPassword("");
    }

    const clearErrors=()=>{
        setEmailError("");
        setPasswordError("");
    }

    //function for login
    const handleLogin = ()=>{
        //console.log("clicked login");
        clearErrors();
            fire
                .auth()
                .signInWithEmailAndPassword(email,password).then(()=>{localStorage.setItem("userid","9U7AbZNaJfV3jqPKLMj3Yc5kCqB3");window.location.reload();})
                .catch(err =>{
                    switch(err.code){
                        case "auth/invalid-email":
                        case "auth/user-disabled":
                        case "auth/user-not-found":
                            setEmailError(err.message);
                            break;
                        case "auth/wrong-password":
                            setPasswordError(err.message);
                            break;
                    }
                });
    };

    //handle sign up
    const handleSignup=()=>{
        //console.log("clicked signup");
        clearErrors();
         fire
                .auth()
                .createUserWithEmailAndPassword(email,password).then(()=>{  localStorage.setItem("userid","9U7AbZNaJfV3jqPKLMj3Yc5kCqB3");window.location.reload();})
                .catch(err =>{
                    switch(err.code){
                        case "auth/email-already-in-use":
                        case "auth/invalid-email":                        
                            setEmailError(err.message);
                            break;
                        case "auth/weak-password":
                            setPasswordError(err.message);
                            break;
                    }
                });
            
    }

    //handle logout
    const handleLogout =()=>{
        fire.auth().signOut();
    }

    const authListener = ()=>{
        fire.auth().onAuthStateChanged(user=>{
            if(user){
                clearInputs();
                setUser(user);
            }
            else{
                setUser("");
            }
        })
    }

    useEffect(()=>{
        authListener()
    },[])
    return (
       <div className="App">
            {
                user ? ( <Navbar handleLogout={handleLogout}/>)
                :
                (                    
                    <div className="first">
                        <span className="image"><img src="katalyst.jpeg"/></span>
                        <LoginComponent 
                    email={email} 
                    setEmail={setEmail} 
                    password={password} 
                    setPassword={setPassword} 
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                    />
                    </div>
                )
            }
            
           
        </div>
    )
}

export default Loginuser
