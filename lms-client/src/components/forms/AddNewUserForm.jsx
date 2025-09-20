import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { CustomInput } from "../custominput/CustomInput";
import { createUserByAdmin } from "../../features/user/userAPI";
import { toast } from "react-toastify";
import { useState } from "react";

const AddNewUserForm = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  let initialState = {
    fullName: "",
    email: "",
    password: "",
    role: "",
    phone: "",
  };

  const { form, handleOnChange } = useForm(initialState);

  let inputFields = [
    {
      id: "fullName",
      label: "Name",
      name: "fullName",
      type: "text",
      placeholder: "Enter Name",
      value: form.fullName,
      required: true,
    },
    {
      id: "email",
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      value: form.email,
      required: true,
    },
    {
      id: "password",
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      value: form.password,
      required: true,
    },
    {
      id: "role",
      label: "Role",
      name: "role",
      type: "select",
      onChange: handleOnChange,
      options: [
        { value: "student", label: "Student" },
        { value: "admin", label: "Admin" },
      ],
      value: form.role,
      required: true,
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

  //   const handleOnClick = () => {
  //     navigate("/user/admins");
  //   };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let data = await createUserByAdmin(form);
      console.log("created by admin info:", data);
      if (data.success) {
        toast.success(data.message);
        onClose();
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("User creation failed!!!");
    }
    setLoading(false);
  };
  return (
    <Container>
      <Form onSubmit={handleOnSubmit}>
        {inputFields.map((item, i) => {
          return <CustomInput key={i} {...item} onChange={handleOnChange} />;
        })}

        <div className="d-flex flex-direction-column gap-2 align-items-center justify-content-center mt-5">
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? "Submitting...." : "Submit"}
          </Button>

          <Button variant="danger" type="button" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddNewUserForm;
