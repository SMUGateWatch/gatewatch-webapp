
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navigation from './navigation'


export default function Layout(props){
   
    return (
        <Container fluid={props.fluid}>
            <Row>
                <Col xs="2">
                    <Navigation/>
                </Col>
                <Col xs="10">
                    {props.children}
                </Col>
            </Row>
        </Container>
        
    )
}