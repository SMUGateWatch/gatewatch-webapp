import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Jumbotron from "react-bootstrap/Jumbotron";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import React, { useState } from "react";
import RegisterForm from "../../components/vehicle-register/registerForm";
import EditForm from "../../components/vehicle-register/editForm";
const VehicleRegister = () => {
  var [currentForm, setForm] = useState(<RegisterForm />);
  var [selectedForm, setSelectedForm] = useState("1");

  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col xs="2">
            <Row className="d-flex justify-content-center align-items-center my-3 flex-column">
              <Image
                src="/profile.jpg"
                width="120px"
                height="120px"
                roundedCircle
              />
              <h4 className="mt-3 lead">John Bryan Delda</h4>
              <p>
                <small>Admin</small>
              </p>
            </Row>
            <Row className="d-flex justify-content-center">
              <Nav defaultActiveKey="/" variant="pills" className="flex-column">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/dashboard" target="_blank">
                  Monitor
                </Nav.Link>
                <Nav.Link href="/vehicle-register">Vehicles</Nav.Link>
                <Nav.Link href="/data-registry">Data</Nav.Link>
                <Nav.Link href="/permission">Permission</Nav.Link>
              </Nav>
            </Row>
          </Col>
          <Col xs="10">
            <Row>
              <Col>
                <Jumbotron className="py-3 mt-3">
                  <h3>Vehicle Registry</h3>
                  <p>
                    A place where you can register vehicles permitted to enter
                    the vicinity
                  </p>
                </Jumbotron>
              </Col>
            </Row>
            <Row className="flex-column">
              <Row>
                <Col>
                  <ButtonGroup toggle>
                    <ToggleButton
                      variant="secondary"
                      type="radio"
                      name="actionToggle"
                      value="1"
                      checked={selectedForm === "1"}
                      onChange={(e) => {
                        setForm(<RegisterForm />);
                        setSelectedForm(e.currentTarget.value);
                      }}
                    >
                      Register Vehicle
                    </ToggleButton>
                    <ToggleButton
                      variant="secondary"
                      type="radio"
                      name="actionToggle"
                      value="2"
                      checked={selectedForm === "2"}
                      onChange={(e) => {
                        setForm(<EditForm />);
                        setSelectedForm(e.currentTarget.value);
                      }}
                    >
                      Manage Vehicle
                    </ToggleButton>
                  </ButtonGroup>
                </Col>
              </Row>
              <Row>
                {" "}
                {/*This is the field area*/}
                {currentForm}
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default VehicleRegister;
