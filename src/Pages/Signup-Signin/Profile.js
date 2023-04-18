import React from "react";
import { PrivateRoute } from "../../Components/private-route/PrivateRoute";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { Container } from "react-bootstrap";

export const Profile = () => {
  return (
    <PrivateRoute>
      <UserLayout>
        <Container>
          <h3>Profile</h3>
          <hr />
        </Container>
      </UserLayout>
    </PrivateRoute>
  );
};
