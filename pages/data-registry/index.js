import React, { useState } from "react";
import Layout from "../../components/layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

/**
 * TODO: Make a map for all data to be fed in the table
 * TODO: Make a filter for data by category
 * TODO: Fetch data needed to show to users
 */
export default function DataRegistry() {
  return (
    <Layout fluid>
      <Row>
        <Col>
          <Jumbotron className="py-3">
            <h1>Data Registry</h1>
            <p className="lead"> Limited people can only access these.</p>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Driver Name</th>
                <th>Vehicle Name</th>
                <th>Plate Number</th>
                <th>Entrance Time</th>
                <th>Exit Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Bryan Delda</td>
                <td>Porsche</td>
                <td>VSX09881</td>
                <td>19:31 @ 10/13/20</td>
                <td>20:03 @ 10/13/20</td>
                <td>
                  <Button>View Details</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Layout>
  );
}
