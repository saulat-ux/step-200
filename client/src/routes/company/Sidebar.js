import React, { useState } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import Navbar from "./Navbar";
import Footer from "../Home/components/footer";
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar />
      <div
        className={`hamburger ${isSidebarOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        <AiOutlineMenu
          size={30}
          style={isSidebarOpen ? { color: "white" } : { color: "#6d0e9d" }}
        />
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="dashboard-heading">
          <NavLink
            to="/companydashboard"
            activeClassName="head"
            className="sidebar-head-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
            >
              <path
                d="M7.4 15.8374C8.60205 15.8374 9.575 16.8077 9.575 18.0386V22.2999C9.575 23.5203 8.60002 24.4999 7.4 24.4999H3.175C1.98492 24.4999 1 23.5178 1 22.2999V18.0386C1 16.8103 1.9829 15.8374 3.175 15.8374H7.4ZM21.8251 15.8374C23.0172 15.8374 24.0001 16.8103 24.0001 18.0386V22.2999C24.0001 23.5178 23.0152 24.4999 21.8251 24.4999H17.6001C16.4001 24.4999 15.4251 23.5203 15.4251 22.2999V18.0386C15.4251 16.8077 16.3981 15.8374 17.6001 15.8374H21.8251ZM7.4 1.50024C8.59977 1.50024 9.575 2.47953 9.575 3.70149V7.96274C9.575 9.19315 8.60256 10.1627 7.4 10.1627H3.175C1.98239 10.1627 1 9.19058 1 7.96274V3.70149C1 2.4821 1.98518 1.50024 3.175 1.50024H7.4ZM21.8251 1.50024C23.0149 1.50024 24.0001 2.4821 24.0001 3.70149V7.96274C24.0001 9.19058 23.0177 10.1627 21.8251 10.1627H17.6001C16.3976 10.1627 15.4251 9.19315 15.4251 7.96274V3.70149C15.4251 2.47953 16.4004 1.50024 17.6001 1.50024H21.8251Z"
                stroke="white"
                stroke-width="2"
              />
            </svg>
            &nbsp;&nbsp;&nbsp;Dashboard
          </NavLink>
        </div>
        <div className="sidebar-buttons">
          <NavLink
            to="/compprofile"
            activeClassName="active"
            className="sidebar-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M1 25H25M3.66667 25V6.33333L14.3333 1V25M22.3333 25V11.6667L14.3333 6.33333M9 9V9.01333M9 13V13.0133M9 17V17.0133M9 21V21.0133"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            &nbsp;&nbsp;&nbsp;Company Profile
          </NavLink>
          <NavLink
            to="/company/jobbasics"
            activeClassName="active"
            className="sidebar-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M17 10L11.6667 16L19.6667 25L25 1L1 11.5L6.33333 14.5L9 23.5L13 17.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            &nbsp;&nbsp;&nbsp; Post new job
          </NavLink>
          <NavLink
            to="/allapplicants"
            activeClassName="active"
            className="sidebar-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M7.66667 25V23.6667C7.66667 22.9594 7.94762 22.2811 8.44772 21.781C8.94781 21.281 9.62609 21 10.3333 21H15.6667C16.3739 21 17.0522 21.281 17.5523 21.781C18.0524 22.2811 18.3333 22.9594 18.3333 23.6667V25M19.6667 10.3333H22.3333C23.0406 10.3333 23.7189 10.6143 24.219 11.1144C24.719 11.6145 25 12.2928 25 13V14.3333M1 14.3333V13C1 12.2928 1.28095 11.6145 1.78105 11.1144C2.28115 10.6143 2.95942 10.3333 3.66667 10.3333H6.33333M10.3333 14.3333C10.3333 15.0406 10.6143 15.7189 11.1144 16.219C11.6145 16.719 12.2928 17 13 17C13.7072 17 14.3855 16.719 14.8856 16.219C15.3857 15.7189 15.6667 15.0406 15.6667 14.3333C15.6667 13.6261 15.3857 12.9478 14.8856 12.4477C14.3855 11.9476 13.7072 11.6667 13 11.6667C12.2928 11.6667 11.6145 11.9476 11.1144 12.4477C10.6143 12.9478 10.3333 13.6261 10.3333 14.3333ZM17 3.66667C17 4.37391 17.281 5.05219 17.781 5.55229C18.2811 6.05238 18.9594 6.33333 19.6667 6.33333C20.3739 6.33333 21.0522 6.05238 21.5523 5.55229C22.0524 5.05219 22.3333 4.37391 22.3333 3.66667C22.3333 2.95942 22.0524 2.28115 21.5523 1.78105C21.0522 1.28095 20.3739 1 19.6667 1C18.9594 1 18.2811 1.28095 17.781 1.78105C17.281 2.28115 17 2.95942 17 3.66667ZM3.66667 3.66667C3.66667 4.37391 3.94762 5.05219 4.44772 5.55229C4.94781 6.05238 5.62609 6.33333 6.33333 6.33333C7.04058 6.33333 7.71885 6.05238 8.21895 5.55229C8.71905 5.05219 9 4.37391 9 3.66667C9 2.95942 8.71905 2.28115 8.21895 1.78105C7.71885 1.28095 7.04058 1 6.33333 1C5.62609 1 4.94781 1.28095 4.44772 1.78105C3.94762 2.28115 3.66667 2.95942 3.66667 3.66667Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            &nbsp;&nbsp;&nbsp;All Applicants
          </NavLink>
          {/* <NavLink to="/courses/submit-cour" activeClassName="active" className="sidebar-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.43945 5.23994V3.43994C6.43945 2.64434 6.75508 1.88114 7.31788 1.31954C7.88068 0.756743 8.64385 0.439941 9.43945 0.439941H15.4395C16.2351 0.439941 16.9971 0.756743 17.5599 1.31954C18.1227 1.88114 18.4395 2.64434 18.4395 3.43994V5.23994H21.4395C22.2351 5.23994 22.9971 5.55674 23.5599 6.11954C24.1227 6.68114 24.4395 7.44434 24.4395 8.23994V21.4399C24.4395 22.2355 24.1227 22.9987 23.5599 23.5615C22.9971 24.1243 22.2351 24.4399 21.4395 24.4399C17.3715 24.4399 7.50745 24.4399 3.43945 24.4399C2.64385 24.4399 1.88068 24.1243 1.31788 23.5615C0.755083 22.9987 0.439453 22.2355 0.439453 21.4399V8.23994C0.439453 7.44434 0.755083 6.68114 1.31788 6.11954C1.88068 5.55674 2.64385 5.23994 3.43945 5.23994H6.43945ZM2.83945 12.9055V21.4399C2.83945 21.5995 2.90185 21.7519 3.01465 21.8647C3.12745 21.9775 3.27985 22.0399 3.43945 22.0399H21.4395C21.5979 22.0399 21.7502 21.9775 21.8631 21.8647C21.9759 21.7519 22.0395 21.5995 22.0395 21.4399V12.9895L12.8091 15.9823C12.5655 16.0603 12.3027 16.0603 12.0591 15.9787L2.83945 12.9055ZM22.0395 10.4659V8.23994C22.0395 8.08154 21.9759 7.92914 21.8631 7.81634C21.7502 7.70354 21.5979 7.63994 21.4395 7.63994C17.3715 7.63994 7.50745 7.63994 3.43945 7.63994C3.27985 7.63994 3.12745 7.70354 3.01465 7.81634C2.90185 7.92914 2.83945 8.08154 2.83945 8.23994V10.3759L12.4443 13.5775L22.0395 10.4659ZM16.0395 5.23994V3.43994C16.0395 3.28154 15.9759 3.12914 15.863 3.01634C15.7502 2.90354 15.5979 2.83994 15.4395 2.83994C13.7235 2.83994 11.1543 2.83994 9.43945 2.83994C9.27985 2.83994 9.12745 2.90354 9.01465 3.01634C8.90185 3.12914 8.83945 3.28154 8.83945 3.43994V5.23994H16.0395Z" fill="white"/>
                        </svg>&nbsp;&nbsp;&nbsp;Manage Job
                        </NavLink> */}
          <NavLink
            to="/joblistings"
            activeClassName="active"
            className="sidebar-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M7.85714 6.33333H18.1429M7.85714 11.6667H18.1429M14.7143 17H18.1429M1 25V3.66667C1 2.95942 1.36122 2.28115 2.00421 1.78105C2.64719 1.28095 3.51926 1 4.42857 1H21.5714C22.4807 1 23.3528 1.28095 23.9958 1.78105C24.6388 2.28115 25 2.95942 25 3.66667V25L19.8571 22.3333L16.4286 25L13 22.3333L9.57143 25L6.14286 22.3333L1 25Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            &nbsp;&nbsp;&nbsp;Job Listing
          </NavLink>
          <NavLink
            to="/managehiring"
            activeClassName="active"
            className="sidebar-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M1.2 24H22.8C23.1183 24 23.4235 23.8669 23.6485 23.63C23.8736 23.3931 24 23.0719 24 22.7368C24 22.4018 23.8736 22.0805 23.6485 21.8437C23.4235 21.6068 23.1183 21.4737 22.8 21.4737H13.2V18.9474H21.6C21.9183 18.9474 22.2235 18.8143 22.4485 18.5774C22.6736 18.3405 22.8 18.0192 22.8 17.6842V1.26318C22.8 0.928168 22.6736 0.606879 22.4485 0.369991C22.2235 0.133103 21.9183 2.11128e-05 21.6 2.11128e-05H14.4C14.2421 -0.000940014 14.0855 0.0309232 13.9393 0.0937837C13.7931 0.156644 13.6601 0.249265 13.548 0.366337L11.508 2.52633H2.4C2.08174 2.52633 1.77652 2.65942 1.55147 2.8963C1.32643 3.13319 1.2 3.45448 1.2 3.78949V17.6842C1.2 18.0192 1.32643 18.3405 1.55147 18.5774C1.77652 18.8143 2.08174 18.9474 2.4 18.9474H10.8V21.4737H1.2C0.88174 21.4737 0.576515 21.6068 0.351472 21.8437C0.126428 22.0805 0 22.4018 0 22.7368C0 23.0719 0.126428 23.3931 0.351472 23.63C0.576515 23.8669 0.88174 24 1.2 24ZM3.6 16.4211V5.05265H12C12.1579 5.05361 12.3145 5.02175 12.4607 4.95889C12.6069 4.89603 12.7399 4.8034 12.852 4.68633L14.892 2.52633H20.4V16.4211H3.6Z"
                fill="white"
              />
            </svg>
            &nbsp;&nbsp;&nbsp;Manage Hirings
          </NavLink>
        </div>
      </div>
      {/* <div className='footer-container-dashboard'>
                    <Footer />
            </div> */}
    </>
  );
};

export default Sidebar;
