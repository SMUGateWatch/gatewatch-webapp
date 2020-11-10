import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import React, { useState } from "react";
import {useRouter} from 'next/router'
import Navigation from "../../components/navigation";

import DataEntryTable from '../../components/vehicle-register/dataEntry'
const VehicleRegister = () => {
  const DefaultEntryDisplay = <h1>There is no data to be shown.</h1>;
  const router = useRouter()
  var [checkedFilter, setCheckedFilter] = useState("Driver");
  var [dataEntry, setDataEntry] = useState(DefaultEntryDisplay);
  var [searchValue, setSearchValue] = useState("")
  const handleSearch =()=>{
    const newDataEntry = <DataEntryTable searchItem={searchValue} filterKey={checkedFilter}/>
    if (searchValue){
      setDataEntry(newDataEntry)
    }
  }
  return (
    <React.Fragment>
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
                {" "}
                {/*SearchBar Location*/}
                <Col>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Search Driver, Vehicle, School ID..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e)=> setSearchValue(e.currentTarget.value)}
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary" onClick={()=>handleSearch()}>Search</Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
                <Col>
                
                  <Form.Check
                    inline
                    checked={checkedFilter == "Driver"}
                    label="Driver"
                    value="Driver"
                    type="radio"
                    onChange={(e) => setCheckedFilter(e.currentTarget.value)}
                  />
                  <Form.Check
                    inline
                    checked={checkedFilter == "Vehicle"}
                    label="Vehicle"
                    value="Vehicle"
                    type="radio"
                    onChange={(e) => setCheckedFilter(e.currentTarget.value)}
                  />
                  <Form.Check
                    inline
                    checked={checkedFilter == "Plate Number"}
                    label="Plate Number"
                    value="Plate Number"
                    type="radio"
                    onChange={(e) => setCheckedFilter(e.currentTarget.value)}
                  />
                  <Button variant="primary" onClick={()=> router.push('/vehicle-register/register')}>Register Vehicle</Button>
                </Col>
              </Row>
              <Row>{/*Data entry*/}
              {dataEntry}
              </Row>
              
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default VehicleRegister;
