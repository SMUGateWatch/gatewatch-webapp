import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const evalPasswordLength =(password)=>{
      let length = password.length
      if( length >= 0 && length < 8 ) {
        return {
        helpText: 'Your password is less than the minimum(8) required characters .',
        textStyle: "text-danger"
      }}
      if(length >= 8) {
        return {
        helpText: 'Your password is greater than the minimum(8) required characters.',
        textStyle: "text-success"
      }}
    }

export default function RegisterForm() {
  var [passwordHelpText, setPasswordHelpText] = useState({
    text:'Password must be at least 8 characters long.',
    style: "text-muted"
  })
  var [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    userName: '',
    password: '',
  })
  var [formRole,setFormRole]= useState({
    enabled:true,
    value:"",
  })
  var [customPermissions, setCustomPermissions]= useState({
    enabled: false,
    permissions:[]
  })
  var [enableCustomRole, setCustomRoleDisable] = useState(false)
  
  
  const handleCustomRoleEnabler = (e) => {
    if(e.currentTarget.checked) {
      setCustomPermissions({
      enabled: true,
      permissions:[]
      }) 
      setFormRole({
        enabled:false
      })
    } 
    if(!e.currentTarget.checked) {
      setCustomPermissions ({
        enabled:false
      })
      setFormRole({
        enabled:true
      })
    }
  };
  const handleFormRoleSelection =(e)=> {
    setFormRole({
      value: e.currentTarget.value
    })
  }
  const handlePasswordInput=(inputPassword)=>{  
    let {helpText, textStyle} = evalPasswordLength(inputPassword)
    setFormData({
      password: inputPassword
    })
    setPasswordHelpText({
      text: helpText,
      style: textStyle
    })
  }

  const handleAddPermission=(e)=>{
    let permission = e.currentTarget.value
    setCustomRole({
      permissions: [...customRole.permissions,permission]
    })
  }
  
  return (
    <React.Fragment>
      <Form className="p-3">
        <Form.Row className="my-3">
          <p>
            <h3>Create a User</h3>
            Create a user to access the system.
          </p>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Group controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" onChange={(e)=>setFormData({firstName: e.currentTarget.value})}/>
            </Form.Group>
            <Form.Group controlId="formGridFirstName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name"  onChange={(e)=>setFormData({lastName: e.currentTarget.value})}/>
            </Form.Group>
            <Form.Group controlId="formGridFirstName">
              <Form.Label>UserName</Form.Label>
              <Form.Control type="text" placeholder="Enter User Name"  onChange={(e)=>setFormData({userName: e.currentTarget.value})}/>
            </Form.Group>
            <Form.Group controlId="formGridFirstName">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter a password"  onChange={(e)=>handlePasswordInput(e.currentTarget.value)}/>
              <Form.Text className={passwordHelpText.style}>
                {passwordHelpText.text}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col className="mx-2">
            <Form.Group controlId="FormUserRole">
              <Form.Label>User Role</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose Role..."
                onChange={e=>handleFormRoleSelection(e)}
              >
                <option value="none">Choose Role...</option>
                <option value="admin">Administrator</option>
                <option value="personnel">Personnel</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Text className="lead my-1">Custom Role</Form.Text>
              <Form.Check
                disable={enableCustomRole}
                className="my-3"
                type="checkbox"
                label="Enable Custom Roles"
                onChange={(e) => handleCustomRoleEnabler(e)}
              />
              <Form.Check
                disabled={customPermissions.enabled}
                type="checkbox"
                label="Access Monitoring Activity"
                value="monitoring-access"
                onChange={e=> handleAddPermission(e)}
              />
              <Form.Check
                disabled={customPermissions.enabled}
                type="checkbox"
                label="Access Vehicle Registry"
                value="vehicle-access"
                onChange={e=> handleAddPermission(e)}
              />
              <Form.Check
                disabled={customPermissions.enabled}
                type="checkbox"
                label="Access Data Registry"
                value="data-access"
                onChange={e=> handleAddPermission(e)}
              />
              <Form.Text className="text-muted my-2">
                NOTE: Be careful setting roles for a user.
              </Form.Text>
              <Button>
                <strong>REGISTER</strong>
              </Button>
            </Form.Group>
          </Col>
        </Form.Row>
      </Form>
    </React.Fragment>
  );
}
