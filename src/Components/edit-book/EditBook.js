import React, { useState } from "react";

import { CustomInput } from "../Layout/CustomInput/CustomInput";
import { Button, Container, Form } from "react-bootstrap";
import { addNewBookAction } from "../../Pages/book/BookAction";
import { useDispatch } from "react-redux";

export const EditBooks = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // dispatch(addNewBookAction(form));
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
    <Container>
      <h3>Edit Book</h3>

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
              Update Book
            </Button>
          </div>
        </div>
      </Form>
    </Container>
  );
};
