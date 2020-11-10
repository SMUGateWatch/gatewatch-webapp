import {traffic} from '../../../lib/trafficData'
export default function dataTrafficHandler({query: {dataId}},res){
     if (dataId){
      var filtered = traffic.filter(data=> data.dataId == dataId)
       var data = {...filtered[0]}
       return res.status(200).json(data)
     }
  
   
}