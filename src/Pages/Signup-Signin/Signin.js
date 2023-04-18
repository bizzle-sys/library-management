import React, { useState, useEffect } from "react";
import { MainLayout } from "../../Components/Layout/MainLayout";
import { CustomInput } from "../../Components/Layout/CustomInput/CustomInput";
import { Button, Container, Form } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Config/Firebase-config/firebase-config";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./userAction";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    user?.uid && navigate("/dashboard");
  }, [user.uid]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    dispatch(loginUser(form));
  };

  const inputs = [
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
  ];
  return (
    <MainLayout>
      <Container className="mt-5">
        <Form
          onSubmit={handleOnSubmit}
          className="border p-5 shadow-lg rounded m-auto mb-4 bg-light"
          style={{ width: "400px" }}>
          <h3 className="text-dark fw-bolder mb-3">Welcome Back!</h3>

          <div className="mt-4">
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}
            <div className="d-grid">
              <Button type="submit" variant="dark">
                Login Now
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    </MainLayout>
  );
};

export default Signin;
