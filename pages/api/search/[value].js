import { vehicles } from "../../../lib/vehicleData";
export default function Filterhandler({query:{value, filter}}, res) {
     
     if (filter == "Driver"){
          const result = vehicles.filter(vehicle => vehicle.driverName == value)
          return res.status(200).json(result)
     }
     if (filter == "Vehicle"){
          const result = vehicles.filter(vehicle => vehicle.vehicleName == value)
          return res.status(200).json(result)
     }
     if (filter == "Plate Number"){
          const result = vehicles.filter(vehicle => vehicle.plateNumber == value)
          return res.status(200).json(result)
     }
}
