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
    
    </div>
  );
};

export default Login;