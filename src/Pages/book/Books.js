import React from "react";
import { PrivateRoute } from "../../Components/private-route/PrivateRoute";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BookTable } from "../../Components/book-table/BookTable";

export const Books = () => {
  return (
    <PrivateRoute>
      <UserLayout>
        <Container>
          <h3>Books</h3>
          <hr />
          <div className="text-end">
            <Link to="/new-book">
              <Button variant="primary">Add new books</Button>
            </Link>
            <div className="mt-3">
              <BookTable />
            </div>
          </div>
        </Container>
      </UserLayout>
    </PrivateRoute>
  );
};
