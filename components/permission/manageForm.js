import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
/**
 * TODO: Map all of the current users
 */


export default function ManageForm() {

  
  var [show, setShow] = useState(false);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleConfirmDelete = () => {}
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
                <td>Administrator</td>
                <td>
                
                  <Button
                    
                    className="mx-1"
                    variant="danger"
                    onClick={handleShow}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
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
