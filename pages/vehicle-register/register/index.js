import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import {useRouter} from 'next/router'
import Button from 'react-bootstrap/Button'
import  { useState, Fragment } from "react";
import RegisterForm from "../../../components/vehicle-register/registerForm";

import Navigation from "../../../components/navigation";
const VehicleRegister = () => {
  
  const router = useRouter()

  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col xs="2">
            <Navigation />
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
                 <Button variant="outline-secondary" onClick={()=> router.push('/vehicle-register')}>Back to Manage</Button>
                </Col>
              </Row>
              <Row>
                <RegisterForm/>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default VehicleRegister;
