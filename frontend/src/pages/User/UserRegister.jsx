import React, { useState } from "react";
import RegisterForm from "../../components/RegisterForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserRegister = () => {
  const [us_name, setUsername] = useState("");
  const [us_password, setPassword] = useState("");
  const [us_email, setEmail] = useState("");
  const [us_phone_number, setPhoneNumber] = useState("");
  const [us_address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleUserRegister = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_PORT}/auth/user/register`,
        {
          us_name,
          us_password,
          us_email,
          us_phone_number,
          us_address,
        }
      );
      setMessage(response.data.message);

      if (response.status === 200) {
        alert("User registered successfully");
        navigate("/login");
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
      <h2>Register User:</h2>
      {message && <p>{message}</p>}
      <RegisterForm
        initialUsername={us_name}
        initialPassword={us_password}
        initialEmail={us_email}
        initialPhoneNumber={us_phone_number}
        initialAddress={us_address}
        usernameField="us_name"
        passwordField="us_password"
        onSubmit={handleUserRegister}
        setUsername={setUsername}
        setPassword={setPassword}
        setEmail={setEmail}
        setPhoneNumber={setPhoneNumber}
        setAddress={setAddress}
        message={message}
      />
    </div>
  );
};

export default UserRegister;
