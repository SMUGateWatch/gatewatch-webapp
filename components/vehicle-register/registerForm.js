import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { offices } from "../../lib/offices";
import { schools } from "../../lib/schools";

/**
 * ! BUG : Field selection doesnt change after events
 * TODO: Change how the selection field interact via events
 * TODO: Make a state that will contain the values for the selections and will change the values after events
 * 
 */

const checkEmptyField = (obj) => {
  var EmptyField = 0;
  Object.keys(obj).map((key) => {
    if (obj[key] === null || obj[key] === "") EmptyField = EmptyField + 1;
  });
  return EmptyField
};

export default function StudentForm() {
  var [testApi, setTestApi] = useState("Test");
  var [schoolSelection, setSelection1] = useState();
  var [courseSelection, setSelection2] = useState();
  var [selectedSchool, setSelectedSchool] = useState("0");
  var [classType, setClassType] = useState({
    name: "none",
  });
  var [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    Gender: "",
    schoolId: "",
    classType: "",
    vehicleName: "",
    plateNumber: "",
    licenseNumber: "",
  });
  
  // TO REGISTER
  const postFetch = () => {
    fetch(`/api/vehicles/register`, {
      method: "POST",
      body: JSON.stringify({ ...registerForm }),
    })
      .then((res) => res.json())
      .then((data) => setTestApi(data.message));
  };
  const handleRegister = () => {
    const EmptyField = checkEmptyField(registerForm);
    if (EmptyField == 0) postFetch();
    if (EmptyField > 0) setTestApi("empty Field detected");
  };

  const FieldSelection = () => {
    return (
      <React.Fragment>
        <Form.Label>Field / Major</Form.Label>
        <Form.Control
          size="sm"
          as="select"
          defaultValue="Choose Field / Major..."
        >
          <option value="0">Choose Field / Major...</option>
          {schools[parseInt(selectedSchool)].courses.map((course, idx) => (
            <option key={idx} value={idx + 1}>
              {course}
            </option>
          ))}
        </Form.Control>
      </React.Fragment>
    );
  };
  const SchoolSelection = () => {
    return (
      <React.Fragment>
        <Form.Label>School</Form.Label>
        <Form.Control
          size="sm"
          as="select"
          defaultValue="Choose School..."
          onChange={(e) => handleSchool(e.currentTarget.value)}
        >
          <option value="0">Choose School...</option>
          {schools.map((school, index) => (
            <option key={index} value={school.value}>
              {school.name}
            </option>
          ))}
        </Form.Control>
      </React.Fragment>
    );
  };
  const OfficeSelection = () => {
    return (
      <React.Fragment>
        <Form.Label>Office</Form.Label>
        <Form.Control
          size="sm"
          as="select"
          defaultValue="Choose School..."
          onChange={(e) => handleSchool(e.currentTarget.value)}
        >
          <option value="0">Choose Office...</option>
          {offices.map((office, index) => (
            <option key={index} value={office.value}>
              {office.name}
            </option>
          ))}
        </Form.Control>
      </React.Fragment>
    );
  };
  const handleSchool = (selected) => {
    setSelectedSchool(selected);
    if (selected > 0) {
      setSelection2(null);
      setSelection2(
        <React.Fragment>
          <Form.Label>Field / Major</Form.Label>
          <Form.Control
            size="sm"
            as="select"
            defaultValue="Choose Field / Major..."
          >
            <option value="" disabled selected>Choose Field / Major...</option>
            {schools[parseInt(selectedSchool)].courses.map((course, idx) => (
              <option key={idx} value={idx + 1}>
                {course}
              </option>
            ))}
          </Form.Control>
        </React.Fragment>
      );
    }
    if (selected == "0") setSelection2(null);
  };

  const handleClassType = (selected) => {
      setRegisterForm({
          classType: selected
      })
    if (selected == "1") setSelection1(SchoolSelection);
    if (selected == "2") setSelection1(OfficeSelection);
    if (selected == "0") {
      setSelection1(null);
      setSelection2(null);
    }
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
                  setRegisterForm({ firstName: e.currentTarget.value })
                }
                value={registerForm.firstName}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter Last Name"
                onChange={(e) =>
                  setRegisterForm({ lastName: e.currentTarget.value })
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
                  setRegisterForm({ gender: e.currentTarget.value })
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
                  setRegisterForm({ schoolId: e.currentTarget.value })
                }
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formClassType">
              <Form.Label>Class Type</Form.Label>
              <Form.Control
                size="sm"
                as="select"
                defaultValue="Choose Type..."
                onChange={(e) => handleClassType(e.currentTarget.value)}
              >
                <option value="0">Choose Type...</option>
                <option value="1">Student</option>
                <option value="2">Employee</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          {schoolSelection}
          {courseSelection}
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
                  setRegisterForm({ vehicleName: e.currentTarget.value })
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
                  setRegisterForm({ plateNumber: e.currentTarget.value })
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
                  setRegisterForm({ licenseNumber: e.currentTarget.value })
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
