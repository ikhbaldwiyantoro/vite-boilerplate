import React from "react";
import { Form } from "react-bootstrap";

const Input = ({ label, value, placeholder, type }) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} value={value} placeholder={placeholder} />
    </Form.Group>
  );
};

export default Input;
