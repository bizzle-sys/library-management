import React from "react";
import { PrivateRoute } from "../../Components/private-route/PrivateRoute";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { Container } from "react-bootstrap";
import { HistoryTable } from "../../Components/history-table/HistoryTable";

export const History = () => {
  return (
    <PrivateRoute>
      <UserLayout>
        <Container>
          <h3>History</h3>
          <hr />
          <HistoryTable />
        </Container>
      </UserLayout>
    </PrivateRoute>
  );
};
