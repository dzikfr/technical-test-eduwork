import React, { useState } from "react";

const RegisterForm = ({
  initialUsername = "",
  initialPassword = "",
  initialEmail = "",
  initialPhoneNumber = "",
  initialAddress = "",
  usernameField = "username",
  passwordField = "password",
  onSubmit,
  setUsername,
  setPassword,
  setEmail,
  setPhoneNumber,
  setAddress,
}) => {
  const [username, setLocalUsername] = useState(initialUsername);
  const [password, setLocalPassword] = useState(initialPassword);
  const [email, setLocalEmail] = useState(initialEmail);
  const [phoneNumber, setLocalPhoneNumber] = useState(initialPhoneNumber);
  const [address, setLocalAddress] = useState(initialAddress);

  const handleUsernameChange = (e) => {
    setLocalUsername(e.target.value);
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setLocalPassword(e.target.value);
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setLocalEmail(e.target.value);
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setLocalPhoneNumber(e.target.value);
    setPhoneNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setLocalAddress(e.target.value);
    setAddress(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Masukkan username"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Masukkan password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Masukkan Email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Masukkan Phone Number"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={handleAddressChange}
                placeholder="Masukkan Address"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
