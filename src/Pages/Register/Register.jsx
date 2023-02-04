import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import Icon from "../Icon";
import Input from "../Input";
import "../Login/login.css";
import  Axios  from "axios";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [User, SetUser] = useState({
    emailId: "",
    mobile: "",
    password: "",
  });
  const goToLogin = () => {
    navigate("/login");
  };
  const handleChangeEvent = (e) => {
    let users = {
      email: document.getElementById("email").value,
      mobile: document.getElementById("mobile").value,
      password: document.getElementById("password").value,
    };
    User.emailId = users.email;
    User.mobile = users.mobile;
    User.password = users.password;
    console.log(User);
    Axios.post("http://localhost:9000/api/users/register",{
        emailId:User.emailId,
        mobile:User.mobile,
        password:User.password
    }).then(res=>{
        navigate("/login")
    }).catch(err=>{
        console.log(err);
    })
  };
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  return (
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <Input id="email" type="email" placeholder="Email" name="email" />
        <Input id="mobile" type="text" placeholder="Mobile Number" />
        <Input id="password" type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer onClick={handleChangeEvent}>
        <Button content="Sign Up" />
      </ButtonContainer>
      {
        /* <LoginWith>OR Register WITH</LoginWith>
      <HorizontalRule />
      <IconsContainer>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={TwitterBackground}>
          <FaTwitter />
        </Icon>
      </IconsContainer>
      
       */
        <LoginWith onClick={goToLogin}>LOGIN</LoginWith>
      }
    </MainContainer>
  );
};
const MainContainer = styled.div`
  margin-left: 476px;
  margin-top: 96px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 37vw;
    height: 100vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
  color: black;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 40%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
  margin-top: 26px;
  color: #ccc;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:20px
  margin: 2rem 0 3rem 0;
  width: 60%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
  color: #ccc;
`;
export default Register;
