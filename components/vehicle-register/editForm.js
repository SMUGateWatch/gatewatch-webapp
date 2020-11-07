import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import useSWR from 'swr'

const searchFetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function StudentForm(){
        var [editable, setEditable] = useState(false)
        var [searchValue, setSearchValue] = useState()
        var [isLoading,setIsLoading] = useState(false)
        var [errorMsg, setErrorMsg] = useState({
          message:"",
          hidden: true,
        })
        var [dataForm, setDataForm] = useState({
          FullName:"",
          Id: "",
          classType: "",
          email: "",
          vehicleName : "",
          plateNumber : "",
          licenseNumber: "",
        })
        const handleSearch =()=> {
          const {data, error} = useSWR(`/api/vehicles/${searchValue}`,searchFetcher)
          
          data ? setDataForm({...data}) : setIsLoading(true) 
          if (error) setErrorMsg({message: error.message})
        }
        return(
            <React.Fragment>
                <Col>
                    <InputGroup className="mb-3">
                        <Form.Control
                          placeholder="Search Driver, Vehicle, School ID..."
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                          onChange={(e)=> setSearchValue(e.currentTarget.value)}
                          value ={searchValue}
                        />
                        <InputGroup.Append>
                          <Button variant="outline-secondary" onClick={()=>handleSearch()}>Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <Form>
                        
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                             Name
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control plaintext readOnly defaultValue="Name of the Owner" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                              ID
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control plaintext readOnly defaultValue="296-121-50" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                              Type
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control plaintext readOnly defaultValue="Class Type" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                              Email
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control plaintext readOnly defaultValue="email@example.com" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                              Email
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control plaintext readOnly defaultValue="email@example.com" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                              Email
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control plaintext readOnly defaultValue="email@example.com" />
                            </Col>
                        </Form.Group>
                        
                    </Form>
                </Col>
                <Col>
                   <Form className="px-3">
                       <Form.Row>
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>Vehicle Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Vehicle Name" readOnly={!editable}/>
                            </Form.Group>
                       </Form.Row>
                       <Form.Row>
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>Plate Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter Plate Number" readOnly={!editable}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>License Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter License Number" readOnly={!editable}/>
                            </Form.Group>
                       </Form.Row>
                       <Form.Row>
                           
                            <Button className="mx-1" variant="primary" onClick={()=>setEditable(!editable)}><strong>EDIT</strong></Button>
                            <Button className="mx-1" variant="primary" disabled={editable}><strong>SAVE</strong></Button>
                            <Button className="mx-1" variant="primary" disabled={editable}><strong>DELETE</strong></Button>
                            <Form.Control type="text" readonly placeholder="Enter License Number" value={isLoading}/>
                            <Form.Control type="text" readonly placeholder="Enter License Number" value={errorMsg}/>
                       </Form.Row>
                   </Form> 
                </Col>
            </React.Fragment>
        )
    
}
