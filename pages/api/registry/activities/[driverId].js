import {traffic} from '../../../../lib/trafficData'
export default function activityHandler(req,res){
    const {driverId} = req.query

    const activities = traffic.filter(data => data.driverId == driverId)
    if (activities.length >20){
        let lastTwenty = []  
        activities.forEach(activity => {
            lastTwenty.push(activity)
        });
        return res.status(200).json(lastTwenty)
    }
    
    res.status(200).json(activities)
}