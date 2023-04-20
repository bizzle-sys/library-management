import React, { useState } from "react";
import { PrivateRoute } from "../../Components/private-route/PrivateRoute";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { Link } from "react-router-dom";
import { MainLayout } from "../../Components/Layout/MainLayout";
import { CustomInput } from "../../Components/Layout/CustomInput/CustomInput";
import { Button, Container, Form } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Config/Firebase-config/firebase-config";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";

export const NewBooks = () => {
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
  };

  const inputs = [
    {
      label: "Book Title",
      name: "title",
      type: "text",
      placeholder: "Clean Code",
      required: true,
    },
    {
      label: "Author Name",
      name: "name",
      type: "text",
      placeholder: "John",
      required: true,
    },
    {
      label: "Published Year",
      name: "year",
      type: "number",
      placeholder: "2020",
      required: true,
    },

    {
      label: "Image Url",
      name: "url",
      type: "url",
      placeholder: "http://image-url.com",
      required: true,
    },
    {
      label: "Summary",
      name: "summary",
      type: "text",
      as: "textarea",
      rows: 5,
      required: true,
    },
  ];
  return (
    <PrivateRoute>
      <UserLayout>
        <Container>
          <h3>New books</h3>
          <Link to="/books">
            <Button variant="secondary">&lt;Back</Button>
          </Link>
          <hr />
          <Form
            onSubmit={handleOnSubmit}
            className="border p-5 shadow-lg rounded m-auto mb-4 bg-light"
            style={{ width: "500px" }}>
            <h3 className="text-dark fw-bolder mb-3">Add New books!</h3>

            <div className="mt-4">
              {inputs.map((item, i) => (
                <CustomInput key={i} {...item} onChange={handleOnChange} />
              ))}
              <div className="d-grid">
                <Button type="submit" variant="dark">
                  Add Books
                </Button>
              </div>
            </div>
          </Form>
        </Container>
      </UserLayout>
    </PrivateRoute>
  );
};
