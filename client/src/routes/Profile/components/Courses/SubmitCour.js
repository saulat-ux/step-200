import React from "react";
import AddCourses from "./AddCourses";
import DisplayCour from "./DisplayCourses";
import Sidenav from "../Sidenav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SubmitCour = () => {

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
        <DisplayCour />
        <div className="profile-component-container-all">
        <AddCourses />
        </div>
        
        
        </>
    );
}

export default SubmitCour;