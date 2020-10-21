import Link from "next/link";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
export default function Navigation() {
  return (
    <React.Fragment>
      <Row className="d-flex justify-content-center align-items-center my-3 flex-column">
        <Image src="/profile.jpg" width="120px" height="120px" roundedCircle />
        <h4 className="mt-3 lead">John Bryan Delda</h4>
        <p>
          <small>Admin</small>
        </p>
      </Row>
      <Row className="d-flex justify-content-center">
        <Nav defaultActiveKey="/" variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link>
              <Link href={`/`}>Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link href={`/vehicle-register`}>Vehicles</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link href={`/data-registry`}>Registry</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link href={`/permission`}>Permission</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link href={`/settings`}>Settings </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
    </React.Fragment>
  );
}
