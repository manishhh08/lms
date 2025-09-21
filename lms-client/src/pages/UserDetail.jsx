import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Form } from "react-bootstrap";
import CustomInput from "../components/CustomInput";
import useForm from "../hooks/useForm";
import { useEffect, useState } from "react";
import {
  getUserDetail,
  updateUserDetailAction,
} from "../features/user/userAction";

const UserDetail = () => {
  const { user } = useSelector((store) => store.userStore);
  const dispatch = useDispatch();
  // const { form, handleOnChange } = useForm({});
  const [form, setForm] = useState(user);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const updatedForm = { ...form };
    if (!updatedForm.password) {
      delete updatedForm.password;
    }
    dispatch(updateUserDetailAction(updatedForm));
  };

  useEffect(() => {
    setForm(user);
  }, [user]);

  let inputFields = [
    {
      id: "fullName",
      label: "Name",
      name: "fullName",
      type: "text",
      placeholder: "Enter your fullname ",
      value: form.fullName,
    },
    {
      id: "email",
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      value: form.email,
      disabled: true,
    },
    {
      id: "role",
      label: "Role",
      name: "role",
      type: "text",
      placeholder: "Your Role",
      value: form.role,
      disabled: true,
    },
    {
      id: "password",
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter new password if you want to change",
      value: form.password || "",
    },

    {
      id: "phone",
      label: "Phone",
      name: "phone",
      type: "text",
      placeholder: "Enter Phone Number",
      value: form.phone || "",
    },
  ];

  return (
    <Container>
      <h2 className="my-4">My Profile</h2>
      <Form onSubmit={handleOnSubmit}>
        {inputFields.map((u, index) => {
          return (
            <Form.Group
              key={index}
              className="mb-3"
              controlId={`formBasic${u.label}`}
            >
              <Form.Label className="form-label">
                {u?.label}
                {u.disabled && (
                  <span className=" text-light" style={{ fontSize: "0.85rem" }}>
                    (disabled)
                  </span>
                )}
              </Form.Label>
              <Form.Control
                type={u?.type}
                placeholder={u?.placeholder}
                name={u?.name}
                value={u?.value}
                disabled={u.disabled || false}
                onChange={(e) => {
                  let updatedForm = {
                    ...form,
                    [e.target.name]: e.target.value,
                  };
                  setForm(updatedForm);
                }}
              />
            </Form.Group>
          );
        })}

        <div className="d-flex gap-2">
          <Button type="submit" variant="primary">
            Save Changes
          </Button>
          <Button
            type="reset"
            variant="secondary"
            onClick={() => setForm(user)}
          >
            Reset
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default UserDetail;
