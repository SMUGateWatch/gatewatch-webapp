import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../../components/layout";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import RegisterForm from "../../components/permission/registerForm";
import ManageForm from "../../components/permission/manageForm";
export default function Permissions() {
  return (
    <Layout fluid>
      <Container>
        {/* <Row>
                    <h1>Permissions</h1>
                    <p className="lead">Assign and limit person who can access and use the system.</p>
                </Row> */}
        <Row>
          <Col>
            <Tabs className="mt-4" defaultActiveKey="manage-permission">
              <Tab eventKey="manage-permission" title="Manage">
                <ManageForm />
              </Tab>
              <Tab eventKey="create-permission" title="Create">
                <Container>
                  <Row>
                    <Col>
                      <RegisterForm />
                    </Col>
                  </Row>
                </Container>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
