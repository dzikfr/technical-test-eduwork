import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginForm from "../../components/LoginForm";

const LoginAdmin = () => {
  const [ad_username, setUsername] = useState("Admin");
  const [ad_password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_PORT}/auth/admin/login`,
        {
          ad_username,
          ad_password,
        }
      );

      if (response.status === 200) {
        setMessage("Login berhasil");
        navigate("/admin");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Terjadi kesalahan pada server");
      }
    }
  };

  return (
    <div>
      <h2>Login untuk Admin:</h2>
      <LoginForm
        initialUsername={ad_username}
        initialPassword={ad_password}
        usernameField="ad_username"
        passwordField="ad_password"
        onSubmit={handleAdminLogin}
        setUsername={setUsername}
        setPassword={setPassword}
        message={message}
      />
    </div>
  );
};

export default LoginAdmin;
