import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
export default function StudentForm(){
    var [schoolSelection, setSelection1] = useState()
    var [courseSelection, setSelection2] = useState()

    const school=[
        {
            name: 'SEAIT', 
            value:"1",
            courses: ['BSCOE', 'BSEE', 'BSECE','BSARCHI','BSCE', 'BSIT'],
        },
        {
            name: 'SAB',
            value:"2",
            courses: ['BSA', 'BSAT', 'BSBM','BSFM','BSBA']
        },
        {
            name: 'STEH',
            value:"3",
            courses: []
        },
        {
            name: 'SHANS',
            value:"4",
            courses: []
        }
    ]   
        const handleSchool =(selected)=>{
            if(selected > 0) {
                setSelection2(
                    <React.Fragment>
                    <Form.Label>Field / Major</Form.Label>
                        <Form.Control size="sm" as="select" defaultValue="Choose Field / Major..." >
                            <option value="0">Choose Field / Major...</option>
                            {school[selected-1].courses.map((course, idx)=>(
                                <option key={idx} value={idx+1}>{course}</option>
                            ))}
                    </Form.Control>
                    </React.Fragment>
                )            
            }
            else{
                setSelection2(null)
            }
        }
        const handleClassType =(selected)=>{
            if(selected == 1) {
                setSelection1(
                    <React.Fragment>
                    <Form.Label>School</Form.Label>
                        <Form.Control size="sm" as="select" defaultValue="Choose School..." onChange={(e)=>handleSchool(e.currentTarget.value)}>
                        <option value="0">Choose School...</option>
                        {school.map((s,idx)=>(
                            <option key={idx} value={s.value}>{s.name}</option>
                        ))}
                    </Form.Control>
                    </React.Fragment>
                )            
            }
            else{
                setSelection1(null)
                setSelection2(null)
            }
        }
    
        return(
            <React.Fragment>
                <Col>
                    <Form className="px-3">
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Enter First Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Enter Last Name" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}  controlId="formGridEmail">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control size="sm" type="email" placeholder="Enter Gender" />
                            </Form.Group>  
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Scdhool ID</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Enter School ID" />
                            </Form.Group>  
                        </Form.Row>       
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Class Type</Form.Label>
                                <Form.Control size="sm" as="select" defaultValue="Choose Type..." onChange={(e)=>handleClassType(e.currentTarget.value)}>
                                    <option value="0">Choose Type...</option>
                                    <option value="1">Student</option>
                                    <option value="2">Employee</option>
                                </Form.Control>
                            </Form.Group>
                             <Form.Group as={Col} controlId="formGridEmail">
                                {schoolSelection}
                            </Form.Group>  
                                  
                        </Form.Row>
                        <Form.Row>
                              <Form.Group as={Col} controlId="formGridEmail">
                                {courseSelection}
                            </Form.Group>       
                        </Form.Row>
                    </Form>
                </Col>
                <Col>
                   <Form className="px-3">
                       <Form.Row>
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>Vehicle Name</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Enter Vehicle Name" />
                            </Form.Group>
                       </Form.Row>
                       <Form.Row>
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>Plate Number</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Enter Plate Number" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>License Number</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Enter License Number" />
                            </Form.Group>
                       </Form.Row>
                       <Form.Row>
                           <Form.Text className="text-muted">NOTE : Please enter your valid credentials for it to be approved.</Form.Text>
                           <Form.Text className="text-muted">TERMS AND AGREEMENT. By registering, you agree to give your information
                           for processing of the vehicle permit.       
                           </Form.Text>
                            <Button className="my-3" variant="primary"><strong>REGISTER</strong></Button>
                       </Form.Row>
                   </Form> 
                </Col>
            </React.Fragment>
        )
    
}
