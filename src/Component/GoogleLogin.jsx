import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const GoogleLoginComponent = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    const userData = jwtDecode(token);
    const name = userData.name || userData.given_name || "User";

    localStorage.setItem("userName", name);
    console.log("Google Login Success:", userData);

    navigate("/dashboard");
  };

  return (
    <div className="bg-white px-4 py-2 rounded">
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={(err) => console.log("Google Login Failed:", err)}
      />
    </div>
  );
};

export default GoogleLoginComponent;
