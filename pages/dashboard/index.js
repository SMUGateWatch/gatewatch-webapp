import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from  'react-bootstrap/Button'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Form from 'react-bootstrap/Form'


export default function Index(){    
    var [currentGate,setCurrentGate] = useState("1")
    var [entranceGate,setEntrance] = useState("1")
    var [exitGate,setExit] = useState("1")
return(
    <React.Fragment>
    <Container>
        <Row>        
            <Col>
                <Row className="mt-3">  
                <Col>         
                <Jumbotron className="py-3">
                    <h1>Gate Activity Monitoring Dashboard - Gate {currentGate}</h1>
                    <p>
                      Welcome! This is the dashboard for the Gate Control System for monitoring activities
                      in the barrier.
                    </p>
                    <p>
                    <ButtonGroup toggle className="mt-2" >
                                <ToggleButton value="1" variant="secondary" type="radio" name="gateToggle" checked={currentGate === "1"} onChange={(e)=> setCurrentGate(e.currentTarget.value)}>Gate 1</ToggleButton>
                                <ToggleButton value="2" variant="secondary" type="radio" name="gateToggle" checked={currentGate === "2"} onChange={(e)=> setCurrentGate(e.currentTarget.value)}>Gate 2</ToggleButton>    
                                <ToggleButton value="3" variant="secondary" type="radio" name="gateToggle" checked={currentGate === "3"} onChange={(e)=> setCurrentGate(e.currentTarget.value)}>Gate 3</ToggleButton>    
                                <ToggleButton value="4" variant="secondary" type="radio" name="gateToggle" checked={currentGate === "4"} onChange={(e)=> setCurrentGate(e.currentTarget.value)}>Gate 4</ToggleButton>    
                            </ButtonGroup>
                    </p>
                </Jumbotron>
                </Col>
                </Row>
                <Row>
                    <Col> {/* ----- Column for Entrance Gate ---- */}
                    <Row className="d-flex justify-content-center">{/*Entrance Gate Information*/}
                        <Form className="w-75">
                            <Form.Row>
                                <h4 className="mr-5">ENTRANCE GATE</h4>
                                <ButtonGroup toggle>
                                <ToggleButton type="radio" name="entranceGateToggle" checked={entranceGate === "0"} onChange={e=>setEntrance(e.currentTarget.value)} value="0">Off</ToggleButton>
                                <ToggleButton type="radio" name="entranceGateToggle" checked={entranceGate === "1"} onChange={e=>setEntrance(e.currentTarget.value)} value="1">On</ToggleButton>    
                            </ButtonGroup>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group className="w-100">
                                    <Form.Label>Driver Name</Form.Label>
                                    <Form.Control type="text" readOnly Placeholder="Name of the Driver"/>
                                </Form.Group>
                            </Form.Row>   
                            <Form.Row>
                                <Form.Group className="w-100">
                                    <Form.Label>Driver's School ID</Form.Label>
                                    <Form.Control type="text" readOnly Placeholder="ID of the Driver"/>
                                </Form.Group>
                            </Form.Row> 
                            <Form.Row>
                                <Form.Group className="w-100">
                                    <Form.Label>Vehicle Name</Form.Label>
                                    <Form.Control type="text" readOnly Placeholder="Name of the Vehicle"/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group className="w-100">
                                    <Form.Label>Vehicle Plate Number</Form.Label>
                                    <Form.Control type="text" readOnly Placeholder="Plate Number of the Vehicle"/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group className="w-100">
                                    <Button className="mr-2" variant="warning">Manual Lift</Button>
                                    <Form.Text className="d-inline text-secondary">This action needs permission.</Form.Text>
                                </Form.Group>
                            </Form.Row>    
                        </Form>
                    </Row>
                    </Col>
                    <Col>{/* ----- Column for Exit Gate ---- */}
                    
                    <Row className="d-flex justify-content-center">{/*Exit Gate Information*/}
                        <Form className="w-75">
                        <Form.Row>
                        <h4 className="mr-5">EXIT GATE</h4>
                        <ButtonGroup toggle>
                                <ToggleButton name="exitGateActivation" type="radio" checked={exitGate === "0"} onChange={e=>setExit(e.currentTarget.value)} value="0">Off</ToggleButton>
                                <ToggleButton name="exitGateActivation" type="radio" checked={exitGate === "1"} onChange={e=>setExit(e.currentTarget.value)} value="1">On</ToggleButton>    
                            </ButtonGroup>
                        </Form.Row>
                            <Form.Row>
                                <Form.Group className="w-100">
                                    <Form.Label>Driver Name</Form.Label>
                                    <Form.Control type="text" readOnly Placeholder="Name of the Driver"/>
                                </Form.Group>
                            </Form.Row>   
                            <Form.Row>
                                <Form.Group className="w-100">
                                    <Form.Label>Driver's School ID</Form.Label>
                                    <Form.Control type="text" readOnly Placeholder="ID of the Driver"/>
                                </Form.Group>
                            </Form.Row> 
                            <Form.Row>
                                <Form.Group className="w-100">
                                    <Form.Label>Vehicle Name</Form.Label>
                                    <Form.Control type="text" readOnly Placeholder="Name of the Vehicle"/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group className="w-100">
                                    <Form.Label>Vehicle Plate Number</Form.Label>
                                    <Form.Control type="text" readOnly Placeholder="Plate Number of the Vehicle"/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group className="w-100">
                                    <Button className="mr-2" variant="warning">Manual Lift</Button>
                                    <Form.Text className="d-inline text-secondary">This action needs permission.</Form.Text>
                                </Form.Group>
                            </Form.Row>    
                        </Form>
                    </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    </React.Fragment>
)
}
