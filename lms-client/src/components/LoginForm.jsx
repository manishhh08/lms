import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
// import { loginUser } from "../utils/axiosHelper";s
import { toast } from "react-toastify";
import { useEffect } from "react";
import { loginUser } from "../features/user/userAPI";
// import { useUser } from "../context/userContext";

const LoginForm = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  let initialState = {
    email: "",
    password: "",
  };
  const [form, setForm] = useState(initialState);

  let inputFields = [
    {
      id: "email",
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      value: form.email,
    },

    {
      id: "password",
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      value: form.password,
    },
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // alert("login successful");

    let data = await loginUser(form);
    console.log("response:", data);
    if (data.status) {
      toast.success(data.message);

      setUser(data.user);
      // redirect to dashboard
      navigate("/dashboard");

      //store access token in local storage
      localStorage.setItem("accessToken", data.accessToken);
    } else {
      toast.error(data.message);
    }
  };

  const handleOnChange = (e) => {
    let tempForm = { ...form };
    tempForm[e.target.name] = e.target.value;
    setForm(tempForm);
  };
  return (
    <>
      <h1>Login Here</h1>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        {inputFields.map((item, index) => {
          return (
            // <CustomInput key={index} {...item} onChange={handleOnChange} />
            <CustomInput key={index} {...item} onChange={handleOnChange} />
          );
        })}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
