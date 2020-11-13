import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
/**
 * TODO: Map all of the current users
 */

export default function ManageForm({ userList }) {
  var [show, setShow] = useState(false);
  var [toDelete, setToDelete] = useState();
  var [showAlert, setShowAlert] = useState({
    message: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleConfirmDelete = () => {
    fetch(`/api/delete?isUser=true`, {
      method: "DELETE",
      body: JSON.stringify({
        userId: toDelete,
      }),
    })
      .then((res) => res.json())
      .then((data) => setShowAlert({ message: data.message }));
  };
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
              {userList.map((user, index) => (
                <React.Fragment>
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.schoolId}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.roles}</td>
                    <td>
                      <Button
                        className="mx-1"
                        variant="danger"
                        value={user.schoolId}
                        onClick={(e) => {
                          setToDelete(e.currentTarget.value);
                          handleShow();
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        </Form.Row>
      </Form>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirmDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
