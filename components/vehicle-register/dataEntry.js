import useSWR from "swr";
import { Fragment } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function dataEntry({ searchItem, filterKey }) {
  const { data , error} = useSWR(`/api/search/${searchItem}?filter=${filterKey}`, fetcher);
  if (!data && !error) return <h1>Loading...</h1>;
  if (error) console.log(error.message);
  if(data.length == 0) return <h1>There's no data present.</h1>;
  return (
    <Table>
      <thead>
        <tr>
          <th>Data ID</th>
          <th>Driver Name</th>
          <th>Vehicle Name</th>
          <th>Plate Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item=>(
                   <Fragment>
              <tr>
                   <td>{item.id}</td>
                   <td>{item.driverName}</td>
                   <td>{item.vehicleName}</td>
                   <td>{item.plateNumber}</td>
                  <td>
                  <Button>View Details</Button>
                </td> 
              </tr>
                </Fragment>
               ))}                                    
      </tbody>
    </Table>
  );
}
