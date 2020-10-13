import React from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
/**
 * TODO: Map all of the current users
 */

export default function ManageForm() {
  return (
    <React.Fragment>
      <Form className="p-3">
        <Form.Row className="my-3">
          <p>
            <h3>Manage Permissions</h3>
            Edit or delete permissions of a user.
          </p>
        </Form.Row>
        <Form.Row>
          <Table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>pkbr199</td>
                <td>John Bryan</td>
                <td>Delda</td>
                <td>
                  <Form.Control as="select" disabled>
                    <option value="0">Choose Role...</option>
                    <option value="1">Administrator</option>
                    <option value="2">Personnel</option>
                  </Form.Control>
                </td>
                <td>
                  <Button className="mx-1">Edit</Button>
                  <Button className="mx-1"> Delete</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Form.Row>
      </Form>
    </React.Fragment>
  );
}
