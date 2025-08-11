import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import { Navigate, useNavigate } from "react-router-dom";
// import { postUser } from "../utils/axiosHelper";
import { toast } from "react-toastify";
// import useForm from "../hooks/useForm";

const SignupForm = () => {
  const navigate = useNavigate();

  let initialState = {
    username: "",
    email: "",
    password: "",
  };
  //console.log(useState(0));
  //   const { form, setForm, handleOnChange } = useForm(initialState);

  let inputFields = [
    {
      id: "name",
      label: "Name",
      name: "username",
      type: "text",
      placeholder: "Enter Name",
      //   value: form.username,
    },
    {
      id: "email",
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      //   value: form.email,
    },
    {
      id: "password",
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      //   value: form.password,
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
      // value: form.phone,
    },
  ];

  //   const handleOnSubmit = async (e) => {
  //     e.preventDefault();
  //     //alert("form submitted");

  //     //make create user post req from axios
  //     if (form.password != form.cpassword) {
  //       toast.error("Email or Password combination incorrect!!! Try again", {
  //         position: "top-right",
  //         theme: "dark",
  //       });
  //     } else {
  //       let data = await postUser(form);
  //       console.log("response from api is:", data);

  //       //if success route to login else show error in toast message
  //       if (data.status) {
  //         toast.success(data.message);
  //         navigate("/login");
  //       } else {
  //         toast.error(data.message);
  //       }
  //     }
  //   };
  // const handleOnChange = (event) => {
  //   let tempForm = { ...form };
  //   tempForm[event.target.name] = event.target.value;

  //   setForm(tempForm);
  // };
  return (
    <div>
      <h1>Signup Form</h1>
      <hr />
      {/* <Form onSubmit={handleOnSubmit}> */}
      <Form>
        {inputFields.map((item) => {
          return <CustomInput {...item} />;
          //   return <CustomInput {...item} onChange={handleOnChange} />;
        })}
        <Form.Group className="mb-3" controlId="formBasicSelect">
          <Form.Label>Select User Type</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="type"
            // onChange={handleOnChange}
            //   defaultValue={"student"}
          >
            {/* <option value="student" selected={form.type == "student"}> */}
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignupForm;
