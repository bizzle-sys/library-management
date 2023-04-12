import React from "react";
import { MainLayout } from "../../Components/Layout/MainLayout";
import { CustomInput } from "../../Components/Layout/CustomInput/CustomInput";
import { Button, Container, Form } from "react-bootstrap";

const Signup = () => {
  const inputs = [
    {
      label: "First Name",
      fname: "name",
      type: "text",
      placeholder: "John",
      required: true,
    },
    {
      label: "Last Name",
      lname: "name",
      type: "text",
      placeholder: "Cena",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "John@email.com",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "",
      required: true,
    },
  ];
  return (
    <MainLayout>
      <Container className="mt-5">
        <Form
          className="border p-5 shadow-lg rounded m-auto mb-4 bg-light"
          style={{ width: "400px" }}>
          <h3 className="text-dark fw-bolder mb-3">Join Us!</h3>
          <Form.Text className="text-dark">
            Anyone can Join us
            <br />
            <br />
            Register Now
          </Form.Text>
          <div className="mt-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Account Type</Form.Label>
              <Form.Select name="role">
                <option value="">--Select user--</option>
                <option value="">--Admin--</option>
                <option value="">--User--</option>
              </Form.Select>
            </Form.Group>
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} />
            ))}
            <div className="d-grid">
              <Button variant="dark">Register Now</Button>
            </div>
          </div>
        </Form>
      </Container>
    </MainLayout>
  );
};

export default Signup;
