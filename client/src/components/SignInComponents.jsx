import React from "react";
import {optionalMainDivStyle, optionalDivStyle, signInButton,CreateAccountWhiteBgStyleHover, signInButtonHover, CreateAccountWhiteBgStyle, divStyle, textFieldStyles, textFieldErrorStyles} from "./componentsStyles";

function OptionalDiv() {
    return (
      <div style={optionalMainDivStyle}>
        <div style={optionalDivStyle}></div>
        <p style={{ padding: "10px" }}>Don't have an account?</p>
        <div style={divStyle}></div>
      </div>
    );

}

function EmailTextFieldInput({error, errorMessage, onChange}) {
  return (
    <div>
      <input
        type="email"
        id="email"
        name="emailAddress"
        style={error? textFieldErrorStyles: textFieldStyles}
        placeholder={"Email Address"}
        onChange={onChange}

        required
      />

      {error && <p style={{color: "red", margin: '5px 0 0 0'}}>{errorMessage}</p>}
      
    </div>
  );
}

function PasswordTextFieldInput({error, errorMessage, onChange}) {
  return (
    <div>
      <input
        type="password"
        id="password"
        name="password"
        style={error? textFieldErrorStyles: textFieldStyles}
        placeholder="Password"
        onChange={onChange}

        required
      />
      
      {error && <p style={{color: "red", margin: '5px 0 0 0'}}>{errorMessage}</p>}
    </div>
    
  );
}

function SignInButton() {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div>
      <button style={isHovered ? { ...signInButton, ...signInButtonHover } : signInButton}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        type="submit">
          <b>Create Account</b>
      </button>
    </div>
  );
}


function CreateAccountWhiteBg() {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div>
      
      <button style={isHovered ? { ...CreateAccountWhiteBgStyle, ...CreateAccountWhiteBgStyleHover } : CreateAccountWhiteBgStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <b>Create Account</b>
      </button>
    </div>
  );
}

export default OptionalDiv;

export { PasswordTextFieldInput, EmailTextFieldInput, SignInButton, CreateAccountWhiteBg };