import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { offices } from "../../lib/offices";
import { schools } from "../../lib/schools";
import { useRouter } from "next/router";
/**
 * ! BUG : Field selection doesnt change after events
 * TODO: Change how the selection field interact via events
 * TODO: Make a state that will contain the values for the selections and will change the values after events
 *
 */

const checkEmptyField = (obj) => {
  var numberEmpty = 0;

  Object.keys(obj).map((key) => {
    if (obj[key] === null || obj[key] === "") {
      numberEmpty += 1;
    }
  });
  return numberEmpty;
};

export default function StudentForm() {
  const route = useRouter()
  var [testApi, setTestApi] = useState("Test");
 
  var [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    Gender: "",
    schoolId: "",
    classType: "",
    vehicleName: "",
    plateNumber: "",
    licenseNumber: "",
    UID: "",
  });

  // TO REGISTER
  const postFetch = async (registerForm) => {
    const res = await fetch(`/api/vehicles/register?UID=${registerForm.UID}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...registerForm, dateRegistered: new Date() }),
    });
    const dataParsed = await res.json();
    setTestApi(`MESSAGE : : ${dataParsed.message}`);
    if(dataParsed.id)  route.push("/vehicle-register/register")
  };

  const handleRegister = () => {
     const numberEmpty = checkEmptyField(registerForm);
    
      if(numberEmpty == 0) postFetch(registerForm);
    if(numberEmpty > 0)setTestApi(`EMPTY FIELDS:: ${numberEmpty}`)
  };

  return (
    <React.Fragment>
      <Col>
        <Form className="px-3">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter First Name"
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    firstName: e.currentTarget.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter Last Name"
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    lastName: e.currentTarget.value,
                  })
                }
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter Gender"
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    Gender: e.currentTarget.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridSchoolId">
              <Form.Label>Scdhool ID</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter School ID"
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    schoolId: e.currentTarget.value,
                  })
                }
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
          <Form.Group as={Col} controlId="formGridSchoolId">
              <Form.Label>Class Type</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter Class Type"
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                   classType: e.currentTarget.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridSchoolId">
              <Form.Label>UID</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter UID"
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                   UID: e.currentTarget.value,
                  })
                }
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
          <Form.Group as={Col} controlId="formGridSchoolId">
              <Form.Label>School / Office</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter School / Office"
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                   schoolOffice: e.currentTarget.value,
                  })
                }
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
          <Form.Group as={Col} controlId="formGridSchoolId">
              <Form.Label>Course / Job</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter Course / Job"
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                   courseJob: e.currentTarget.value,
                  })
                }
              />
            </Form.Group>
          </Form.Row>
         
        </Form>
      </Col>
      <Col>
        <Form className="px-3">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridVehicleName">
              <Form.Label>Vehicle Name</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter Vehicle Name"
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    vehicleName: e.currentTarget.value,
                  })
                }
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPlateNumber">
              <Form.Label>Plate Number</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter Plate Number"
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    plateNumber: e.currentTarget.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLicenseNumber">
              <Form.Label>License Number</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter License Number"
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    licenseNumber: e.currentTarget.value,
                  })
                }
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Text className="text-muted">
              NOTE : Please enter your valid credentials for it to be approved.
            </Form.Text>
            <Form.Text className="text-muted">
              TERMS AND AGREEMENT. By registering, you agree to give your
              information for processing of the vehicle permit.
            </Form.Text>
            <Button
              className="my-3"
              variant="primary"
              onClick={() => handleRegister()}
            >
              <strong>REGISTER</strong>
            </Button>
            <Form.Text className="text-muted">{testApi}</Form.Text>
          </Form.Row>
        </Form>
      </Col>
    </React.Fragment>
  );
}
