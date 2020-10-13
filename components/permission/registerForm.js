import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
export default function RegisterForm() {
  var [disableRoles, setDisableRoles] = useState({
    preRoles: false,
    customRoles: true,
  });
  const handleCustomeRole = (e) => {
    if (e.currentTarget.checked || !e.currentTarget.checked) {
      setDisableRoles({
        preRoles: !disableRoles.preRoles,
        customRoles: !disableRoles.customRoles,
      });
    }
  };
  return (
    <React.Fragment>
      <Form className="p-3">
        <Form.Row className="my-3">
          <p>
            <h3>Create a User</h3>
            Create a user to access the system.
          </p>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Group controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" />
            </Form.Group>
            <Form.Group controlId="formGridFirstName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" />
            </Form.Group>
            <Form.Group controlId="formGridFirstName">
              <Form.Label>UserName</Form.Label>
              <Form.Control type="text" placeholder="Enter User Name" />
            </Form.Group>
            <Form.Group controlId="formGridFirstName">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter a password" />
              <Form.Text className="text-muted">
                Password must be at least 8 characters long.
              </Form.Text>
            </Form.Group>
          </Col>
          <Col className="mx-2">
            <Form.Group controlId="FormUserRole">
              <Form.Label>User Role</Form.Label>
              <Form.Control
                disabled={disableRoles.preRoles}
                as="select"
                defaultValue="Choose Role..."
                onChange={(e) =>
                  e.currentTarget.value == 0
                    ? setDisableRoles({ customRoles: false })
                    : setDisableRoles({ customRoles: true })
                }
              >
                <option value="0">Choose Role...</option>
                <option value="1">Administrator</option>
                <option value="2">Personnel</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Text className="lead my-1">Custom Role</Form.Text>
              <Form.Check
                className="my-3"
                type="checkbox"
                label="Enable Custom Roles"
                onChange={(e) => handleCustomeRole(e)}
              />
              <Form.Check
                disabled={disableRoles.customRoles}
                type="checkbox"
                label="Access Monitoring Activity"
              />
              <Form.Check
                disabled={disableRoles.customRoles}
                type="checkbox"
                label="Access Vehicle Registry"
              />
              <Form.Check
                disabled={disableRoles.customRoles}
                type="checkbox"
                label="Access Data Registry"
              />
              <Form.Text className="text-muted my-2">
                NOTE: Be careful setting roles for a user.
              </Form.Text>
              <Button>
                <strong>REGISTER</strong>
              </Button>
            </Form.Group>
          </Col>
        </Form.Row>
      </Form>
    </React.Fragment>
  );
}
