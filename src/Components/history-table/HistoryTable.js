import React from "react";
import { Table } from "react-bootstrap";

export const HistoryTable = () => {
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Info</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </div>
  );
};
