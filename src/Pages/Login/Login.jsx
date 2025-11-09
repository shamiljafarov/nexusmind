import React, { useState } from "react";
import "./Login.scss"

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agree) {
      alert("Пожалуйста, согласитесь с условиями обработки данных.");
      return;
    }
    console.log("Отправлено:", form);
  };

  return (
    <div className="container">
      <h1>Daxil Ol</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="inputs">
            <label>
                Email*
                <input
                type="email"
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                />
            </label>
            <label>
                Password*
                <input
                type="password"
                placeholder="Password"
                name="password"
                value={form.password}
                onChange={handleChange}/>
            </label>
        </div>
        <div className="actions">
          <button type="submit" id="sendBtn">
            Daxil Ol
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;