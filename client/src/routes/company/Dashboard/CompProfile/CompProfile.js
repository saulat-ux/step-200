import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';

const CompProfile = () => {

    const [profileImage, setProfileImage] = useState('default_profile_image.jpg');
    const handleProfileImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfileImage(reader.result);
        };
        if (file) {
          reader.readAsDataURL(file);
        }
      };
  
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      address: '',
      country: '',
      city: '',
      zipCode: '',
      linkedInLink: '',
      twitterLink: '',
    });
  
    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      
      const formattedData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phNo: formData.phoneNumber,
        address: formData.address,
        country: formData.country,
        city: formData.city,
        zipCode: formData.zipCode,
        linkednLink: formData.linkedInLink,
        twitterLink: formData.twitterLink,
      };
  
      console.log(formattedData);
  
      const token = localStorage.getItem('token');
      console.log(token);
      const apiUrl = '/user/personalInfo/postData';
  
      const headers = {
        Authorization: token,
      };
      axios.post(apiUrl, formattedData, { headers })
        .then((response) => {
          console.log(response.data);
          toast.success(response.data.message);
        })
        .catch((error) => {
          console.error(error);
          toast.error("Error sending data to the backend.");
        });
    };
  
    return (
      <div className="form-container-compprofile">
        
        <div className="shadow2">
          <form onSubmit={handleSubmit}>
          <div className="compprofile-image-box">
                {/* {profileImage ? (
                <img src={profileImage} alt="Profile Image" />
                ) : ( */}
                <div className="default-compprofile-text">
                CP
                </div>
                {/* )} */}
                <label htmlFor="profile-input" className="compprofile-edit-icon">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                    <path d="M10.8189 3.8318L7.99805 1.22555L8.92728 0.356807C9.18172 0.118936 9.49434 0 9.86514 0C10.236 0 10.5484 0.118936 10.8023 0.356807L11.7316 1.22555C11.986 1.46343 12.1188 1.75053 12.1298 2.08686C12.1409 2.42318 12.0192 2.71008 11.7648 2.94754L10.8189 3.8318ZM9.85652 4.74708L2.82089 11.3247H0V8.68747L7.03563 2.10982L9.85652 4.74708Z" fill="#6D0E9D"/>
                    </svg>
                </label>
                <input
                    type="file"
                    accept="image/*"
                    id="profile-input"
                    onChange={handleProfileImageChange}
                    style={{ display: 'none' }}
                />
                </div>
            <div className="compprofile-heading">
            Upload Picture
            </div>
            <div className="name-container">
              <div className="input-group-profile">
                <label className="label" htmlFor="firstName">
                  Company Name
                  {/* <span className="required">*</span> */}
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="input-field"
                  placeholder="Xyz"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group-profile">
                <label className="label" htmlFor="lastName">
                  Team Size
                 
                </label>
                <select
                    id="speakingLevel"
                    className="input-field-exp"
                    required
                    value={formData.speakingLevel}
                    onChange={handleChange}
                >
                    <option value="">Select One</option>
                    <option value="10-50">10-50</option>
                    <option value="50-100">50-100</option>
                    <option value="100-150">100-150</option>
                </select>
              </div>
            </div>
            
            <div className="email-container">
                <label className="label" htmlFor="emailAddress">
                Email Address
                
                </label>
                <input
                type="email"
                id="emailAddress"
                className="input-field"
                placeholder="@gmail.com"
                required
                value={formData.emailAddress}
                onChange={handleChange}
                />
            </div>
            <div className="phone-container">
            <label className="label" htmlFor="phoneNumber">
              Phone Number
              
            </label>
            <input
              type="phone"
              id="phoneNumber"
              className="input-field"
              placeholder="0000 0000000"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
            <div className="email-container">
                <label className="label" htmlFor="url">
                Website
                
                </label>
                <input
                type="url"
                id="emailAddress"
                className="input-field"
                placeholder="www.xyz.com"
                required
                value={formData.emailAddress}
                onChange={handleChange}
                />
            </div>
            <div className="email-container">
              <label className="label" htmlFor="country">
                Country
                
              </label>
              <select
                    id="country"
                    className="input-field-exp"
                    required
                    value={formData.speakingLevel}
                    onChange={handleChange}
                >
                    <option value="">country</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
            </div>
            <div className="email-container">
              <label className="label" htmlFor="city">
                City
                
              </label>
              <select
                    id="city"
                    className="input-field-exp"
                    required
                    value={formData.speakingLevel}
                    onChange={handleChange}
                >
                    <option value="">city</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="New York">New York</option>
                    <option value="London">London</option>
                </select>
            </div>
        
  
            <div className="address-container">
              <label className="label" htmlFor="address">
                Address
                
              </label>
              <input
                type="text"
                id="address"
                className="input-field"
                placeholder="address"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>
  
            <div className="description-container-exp">
                <label className="label-exp" htmlFor="description">
                  About Company
                  
                </label>
                <input
                  type="description"
                  id="description"
                  className="input-field-exp-1"
                  placeholder=""
                  required
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
  
            <div className="button-container">
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    );
  };
  
  export default CompProfile;