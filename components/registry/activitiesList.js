import useSWR from "swr";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function ActivitiesList({ driverId }) {
  const router = useRouter();
  const { data: activities, error } = useSWR(
    `/api/registry/activities/${driverId}`,
    fetcher
  );

  if (!activities) return <h1>Loading...</h1>;
  return (
    <React.Fragment>
      <Col>
        {activities.map((activity, index) => (
          <Row key={index} className="my-2 pr-3">
            <Col>
              <Row>
                <h4>{activity.date} ---- G1:G3</h4>
              </Row>
              <Row>
                <h6>
                  Entered @ {activity.entranceTime} Exited @ {activity.exitTime}
                </h6>
              </Row>
            </Col>
            <Col sm="4" className="d-flex justify-content-center align-items-center">
              <Button
                className="w-100 h-75"
                variant="primary"
                onClick={() =>
                  router.push(`/data-registry/details?id=${activity.dataId}`)
                }
              >
                VIEW
              </Button>
            </Col>
          </Row>
        ))}
        <Row className="d-flex justify-content-center">
          <Col sm="5" className="d-flex justify-content-start my-2">
            <Button variant="link">VIEW ALL</Button>
          </Col>
        </Row>
      </Col>
    </React.Fragment>
  );
}
