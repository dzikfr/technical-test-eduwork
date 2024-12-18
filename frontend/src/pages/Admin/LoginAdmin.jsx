import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginForm from "../../components/LoginForm";

const LoginAdmin = () => {
  const [ad_username, setUsername] = useState("");
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
        localStorage.setItem('isAdminAuthenticated', 'true');
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
      <LoginForm
        initialUsername={ad_username}
        initialPassword={ad_password}
        usernameField="ad_username"
        passwordField="ad_password"
        onSubmit={handleAdminLogin}
        setUsername={setUsername}
        setPassword={setPassword}
        message={message}
        role="ADMIN"
      />
    </div>
  );
};

export default LoginAdmin;
