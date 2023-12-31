import React from "react";
import PubForm from "./PubForm";
import Sidenav from "../Sidenav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Publications = () => {

    const navigate = useNavigate();
    const handleAuth = () =>{
        const type = localStorage.getItem("userType");
        if (type !== "user")
        {
            navigate("/login");
        }
    }
    useEffect(() => {
        handleAuth();
      }, []);
      
    return(
        <>
        <Sidenav />
        <div className="profile-component-container-multi">
        <PubForm />
        </div>
        
        </>
    );
}

export default Publications;