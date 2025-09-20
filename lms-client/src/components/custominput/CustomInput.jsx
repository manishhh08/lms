import React from "react";
import { Form } from "react-bootstrap";

export const CustomInput = ({
  label,
  inputRef,
  type = "text",
  options = [],
  value,
  onChange,
  ...rest
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>

      {type === "select" ? (
        <Form.Select value={value} onChange={onChange} {...rest}>
          <option value="">-- Select --</option>
          {options.map((opt) => {
            return (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            );
          })}
        </Form.Select>
      ) : (
        <Form.Control
          {...rest}
          ref={inputRef}
          // type={type === "password" ? "password" : "text"}
          type={type}
          value={value}
          onChange={onChange}
        />
      )}
    </Form.Group>
  );
};
