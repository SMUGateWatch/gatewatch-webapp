import React, { useState } from "react";
import Layout from "../../components/layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useSWR from 'swr'

import {useRouter} from 'next/router'
/**
 * TODO: Make a map for all data to be fed in the table
 * TODO: Make a filter for data by category
 * TODO: Fetch data needed to show to users
 */
const fetcher=(url)=> fetch(url).then(res=>res.json())
export default function DataRegistry() {
  const router = useRouter()
  const {data: trafficData, error} = useSWR(`/api/registry`,fetcher)
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
      <Row>{/*Row for Searchbar and filter*/}

      </Row>
      <Row> 
        <Col>
          <Table>
            <thead>
              <tr>
                <th>Data ID</th>
                <th>Driver Name</th>
                <th>Vehicle Name</th>
                <th>Plate Number</th>
                <th>Date</th>
                <th>Entrance Time</th>
                <th>Exit Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {trafficData.map((dataset, index)=>(
              <tr key={index}>
                <td>{dataset.dataId}</td>
                <td>{dataset.driverName}</td>
                <td>{dataset.vehicleName}</td>
                <td>{dataset.plateNumber}</td>
                <td>{dataset.date}</td>
                <td>{dataset.entranceTime}</td>
                <td>{dataset.exitTime}</td>
                <td>
                  <Button onClick={()=> router.push(`/data-registry/details?id=${dataset.dataId}`)}>View Details</Button>
                </td>
              </tr>
))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Layout>
  );
}

