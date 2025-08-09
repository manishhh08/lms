const inputFields = [
  {
    id: "name",
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Enter Name",
  },
  {
    id: "email",
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter Email",
  },
  {
    id: "password",
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "******",
  },

  {
    id: "cpassword",
    label: "Confirm",
    name: "cpassword",
    type: "password",
    placeholder: "Confirm Password",
  },
  {
    id: "role",
    label: "Role",
    name: "role",
    type: "select",
    options: [
      { value: "admin", label: "Admin" },
      { value: "student", label: "Student" },
    ],
  },
  {
    id: "phone",
    label: "Phone",
    name: "phone",
    type: "text",
    placeholder: "Enter Phone Number",
  },
];

export default inputFields;
