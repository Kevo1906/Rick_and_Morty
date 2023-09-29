import { useState } from "react";
import style from "./Form.module.css"

export default function Form(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    
    setUserData({ ...userData, [event.target.name]: event.target.value });
    validation({...userData, [event.target.name]: event.target.value},event);
  };

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const emailValidation =
    /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

  const validation = (input, event) => {
    if (event.target.name === "email") {
      if (input.email.length === 0) {
        setErrors({ ...errors, email: "Usuario no debe estar vacio" });
      } else if (!emailValidation.test(input.email)) {
        setErrors({ ...errors, email: "Usuario no valido" });
      } else if (input.email.length > 35) {
        setErrors({
          ...errors,
          email: "EL usuario no debe tener mas de 35 caracteres",
        });
      } else {
        setErrors({ ...errors, email: "" });
      }
    }

    if (event.target.name === "password") {
    if (!/[0-9]/gm.test(input.password)) {
      setErrors({ ...errors, password: "Debe contener al menos un número" });
    } else if (input.password.length < 6 || input.password.length > 10) {
      setErrors({
        ...errors,
        password:
          "La contraseña debe tener una longitud entre 6 y 10 caracteres",
      });
    } else {
      setErrors({ ...errors, password: "" });
    }}
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className={style.conteiner}>
    <form onSubmit={handleSubmit} className={style.form}>
      {/* <label>Email:</label> */}
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Insert your email..."
        value={userData.email}
        onChange={handleChange}
        className={style.input}
      />
      <p>{errors.email}</p>
      {/* <label>Password:</label> */}
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Insert your password..."
        value={userData.password}
        onChange={handleChange}
        className={style.input}
      />
      <p>{errors.password ? errors.password : null}</p>
      <button type="submit" className={style.button_submit}>SUBMIT</button>
    </form>
    </div>
  );
}

// errors.email ? errors.email:null
