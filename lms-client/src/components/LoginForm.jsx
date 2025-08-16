import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../features/user/userAction";

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

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

    // let data = await loginUser(form);
    const data = await dispatch(loginUserAction(form));
    console.log("response:", data);
    toast[data.status](data.message);

    if (data.status === "success") {
      // redirect to dashboard
      navigate("/dashboard");
    }
  };

  const handleOnChange = (e) => {
    let tempForm = { ...form };
    tempForm[e.target.name] = e.target.value;
    setForm(tempForm);
  };

  const { user } = useSelector((store) => store.userStore);
  let previousLocation = location.state?.from?.location || "/dashboard";

  useEffect(() => {
    user?._id && navigate(previousLocation);
  }, [user?._id]);
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
