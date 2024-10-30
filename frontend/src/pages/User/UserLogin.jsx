import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginForm from "../../components/LoginForm";

const UserLogin = () => {
  const [us_name, setUsername] = useState("");
  const [us_password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleUserLogin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_PORT}/auth/user/login`,
        {
          us_name,
          us_password,
        }
      );

      if (response.status === 200) {
        setMessage("Login berhasil");
        navigate("/shop");
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

  useEffect(() => {
    if (message === "User tidak ditemukan") {
      const confirmRegister = window.confirm(
        "User tidak ditemukan. Ingin daftar?"
      );
      if (confirmRegister) {
        navigate("/register");
      }
    }
  }, [message]);

  return (
    <div>
      <LoginForm
        initialUsername={us_name}
        initialPassword={us_password}
        usernameField="us_name"
        passwordField="us_password"
        onSubmit={handleUserLogin}
        setUsername={setUsername}
        setPassword={setPassword}
        message={message}
        role="USER"
      />
    </div>
  );
};

export default UserLogin;
