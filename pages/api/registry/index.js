import {traffic} from '../../../lib/trafficData'
export default function registryHandler(req,res){
    res.status(200).json(traffic)

}