import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Insert your email..."
        value={userData.email}
        onChange={handleChange}
      />
      <p>{userData.email}</p>
      <p>{errors.email}</p>
      <label>Password:</label>
      <input
        type="text"
        name="password"
        id="password"
        placeholder="Insert your password..."
        value={userData.password}
        onChange={handleChange}
      />
      <p>{errors.password ? errors.password : null}</p>
      <button type="submit">SUBMIT</button>
    </form>
  );
}

// errors.email ? errors.email:null
