import React from "react";
import { Form } from "react-bootstrap";
import "./style.scss";

const Input = ({ label, value, placeholder, type, isInvalid }) => {
  return (
    <Form.Group>
      <Form.Label className="label">{label}</Form.Label>
      <Form.Control
        className="input-form"
        type={type}
        value={value}
        placeholder={placeholder}
        isInvalid={isInvalid}
      />
      {isInvalid && <p className="mt-1 error">Validasi pesan error</p>}
    </Form.Group>
  );
};

Input.defaultProps = {
  label: "Label",
  value: null,
  placeholder: "Placeholder",
  type: "text",
  isInvalid: false,
};

export default Input;
