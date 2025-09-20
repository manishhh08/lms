import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import { Navigate, useNavigate } from "react-router-dom";
// import { postUser } from "../utils/axiosHelper";

import useForm from "../hooks/useForm";
import { createUser } from "../features/user/userAPI";
import { toast } from "react-toastify";

const SignupForm = () => {
  const navigate = useNavigate();

  let initialState = {
    fullName: "",
    email: "",
    password: "",
    phone: "",
  };
  //console.log(useState(0));
  const { form, handleOnChange } = useForm(initialState);

  let inputFields = [
    {
      id: "fullName",
      label: "Name",
      name: "fullName",
      type: "text",
      placeholder: "Enter Name",
      value: form.fullName,
    },
    {
      id: "email",
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      value: form.email,
    },
    {
      id: "password",
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      value: form.password,
    },

    {
      id: "cpassword",
      label: "Confirm",
      name: "cpassword",
      type: "password",
      placeholder: "Confirm Password",
    },
    {
      id: "phone",
      label: "Phone",
      name: "phone",
      type: "text",
      placeholder: "Enter Phone Number",
      value: form.phone,
    },
  ];

  //  handle on submit here
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // alert("Form submitted");

    //make create user post req from axios
    if (form.password != form.cpassword) {
      toast.error("Email or Password combination incorrect!!! Try again", {
        position: "top-right",
        theme: "dark",
      });
    } else {
      let data = await createUser(form);
      console.log("response from api is:", data);

      //if success route to login else show error in toast message
      if (data.status) {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    }
  };

  return (
    <div>
      <h1>Signup Form</h1>
      <hr />

      <Form onSubmit={handleOnSubmit}>
        {inputFields.map((item) => {
          return <CustomInput {...item} onChange={handleOnChange} />;
        })}
        {/* <Form.Group className="mb-3" controlId="formBasicSelect">
          <Form.Label>Select User Type</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="type"
            onChange={handleOnChange}
              defaultValue={"student"}
          >
            <option value="student" selected={form.type == "student"}>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </Form.Select>
        </Form.Group> */}

        <Button variant="primary" type="submit" className="mb-2 pt-2">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignupForm;
