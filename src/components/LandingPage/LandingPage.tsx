import React from 'react';
import {ButtonContainer, InputContainer, LandingPageContainer, WelcomeText} from "../../styles/Styles";
import Input from "../Input";
import Button from "../Button";

interface ILoginProps {
    setFirstName: (firstName: string) => void;
}

const Login = (props: ILoginProps) => {
    return (
        <LandingPageContainer>
            <WelcomeText>Welcome</WelcomeText>
            <InputContainer><Input type='text' placeholder='First Name' /></InputContainer>
            <ButtonContainer><Button content='submit' /></ButtonContainer>
        </LandingPageContainer>
    )
};

export default Login;