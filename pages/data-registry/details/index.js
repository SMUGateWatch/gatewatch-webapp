import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useSWR from "swr";
import Activities from "../../../components/registry/activitiesList"
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function VehicleDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`/api/registry/${id}`,fetcher );
  if (!data) return <h1>Loading...</h1>;
 
  return (
    <Layout fluid>
      <Row>
        <Col sm="8">
          <Form className="px-4 pt-2">
            <Form.Row>
              <Form.Group as={Col} sm="8">
                <Form.Text className="h3">Traffic Details</Form.Text>
              </Form.Group>
              <Form.Group as={Col} sm="4" className="d-flex justify-content-center align-items-center">
                <Button className="m-1" variant="outline-danger" onClick={()=> router.push(`/data-registry`)}>Go Back</Button>
              </Form.Group>
            </Form.Row>
            <Form.Group as={Row} sm="3">
              <Form.Label column sm="2">
                DATA ID
              </Form.Label>
              <Col sm="8">
                <Form.Control plaintext readonly value={data.dataId} />
              </Col>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="h6">Date</Form.Label>
                <Form.Text className="h5">{data.date}</Form.Text>
                <hr />
              </Form.Group>
              <Form.Group as={Col} sm="3">
                <Form.Label className="h6">Entrance Time</Form.Label>
                <Form.Text className="h5">{data.entranceTime}</Form.Text>
                <hr />
              </Form.Group>
              <Form.Group as={Col} sm="3">
                <Form.Label className="h6">Exit Time</Form.Label>
                <Form.Text className="h5">{data.exitTime}</Form.Text>
                <hr />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="h6">Vehicle Name</Form.Label>
                <Form.Text className="h5">{data.vehicleName}</Form.Text>
                <hr />
              </Form.Group>
              <Form.Group as={Col} sm="3">
                <Form.Label className="h6">Plate Number</Form.Label>
                <Form.Text className="h5">{data.plateNumber}</Form.Text>
                <hr />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="h6">Driver's Name</Form.Label>
                <Form.Text className="h5">{data.driverName}</Form.Text>
                <hr />
              </Form.Group>
              <Form.Group as={Col} sm="5">
                <Form.Label className="h6">Driver's ID</Form.Label>
                <Form.Text className="h5">{data.driverId}</Form.Text>
                <hr />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} sm="3">
                <Form.Label className="h6">Type</Form.Label>
                <Form.Text className="h5">{data.type}</Form.Text>
                <hr />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="h6">Field</Form.Label>
                <Form.Text className="h5">{data.Field}</Form.Text>
                <hr />
              </Form.Group>
              <Form.Group as={Col} sm="2">
                <Form.Label className="h6">Year</Form.Label>
                <Form.Text className="h5">{data.classYear}</Form.Text>
                <hr />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="h6">School</Form.Label>
                <Form.Text className="h5">
                  {data.School}
                </Form.Text>
                <hr />
              </Form.Group>
            </Form.Row>
          </Form>
        </Col>
        <Col sm ="4" className="mt-2">
        <Row>
        <h3>Last 10 Traffic</h3>
        </Row>
        <Row className="mt-2">
         <Activities driverId={data.driverId}/>
         </Row>
        </Col>
      </Row>
    </Layout>
  );
}
