import React, { useState } from "react";
import "./Login.scss";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form göndərildi:", form);
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Daxil ol</h1>
        <hr />

        <form onSubmit={handleSubmit} className="login__form">
          <label>
            Email*
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Şifrə*
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" id="sendBtn">
            Daxil ol
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;