import React from "react";
import SignInForm from "../components/SignInForm";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const signInScreenDiv = {
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "90vh",
  display: "flex",
};

function SignInScreen() {
  

  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <div style={signInScreenDiv}>
        <SignInForm />
      </div>
    </div>
  );
}

export default SignInScreen;
