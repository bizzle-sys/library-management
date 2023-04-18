import React from "react";
import { PrivateRoute } from "../../Components/private-route/PrivateRoute";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { Container } from "react-bootstrap";

export const Dashboard = () => {
  return (
    <PrivateRoute>
      <UserLayout>
        <Container>
          <h3>Dashboard</h3>
          <hr />
        </Container>
      </UserLayout>
    </PrivateRoute>
  );
};
