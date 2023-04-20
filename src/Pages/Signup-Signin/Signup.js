import React, { useState } from "react";
import { MainLayout } from "../../Components/Layout/MainLayout";
import { CustomInput } from "../../Components/Layout/CustomInput/CustomInput";
import { Button, Container, Form } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Config/Firebase-config/firebase-config";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(form);

      const { confirmPassword, password, ...rest } = form;
      if (confirmPassword !== password)
        return toast.error("password do not match");
      const pendingUser = createUserWithEmailAndPassword(
        auth,
        rest.email,
        password
      );
      toast.promise(pendingUser, {
        pending: "Please Wait....",
      });
      const { user } = await pendingUser;
      if (user?.uid) {
        await setDoc(doc(db, "users", user.uid), rest);

        return (
          toast.success("Account created. Please login") && navigate("/signin")
        );
      }
      return toast.error("Error, please try again");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const inputs = [
    {
      label: "First Name",
      name: "fname",
      type: "text",
      placeholder: "John",
      required: true,
    },
    {
      label: "Last Name",
      name: "lname",
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
      placeholder: "xxx",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "xxx",
      required: true,
    },
  ];
  return (
    <MainLayout>
      <Container className="mt-5">
        <Form
          onSubmit={handleOnSubmit}
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
              <Form.Select onChange={handleOnChange} name="role">
                <option value="">--Select user--</option>
                <option value="Admin">--Admin--</option>
                <option value="User">--User--</option>
              </Form.Select>
            </Form.Group>
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}
            <div className="d-grid">
              <Button type="submit" variant="dark">
                Register Now
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    </MainLayout>
  );
};

export default Signup;
