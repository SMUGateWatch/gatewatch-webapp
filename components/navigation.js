import Link from 'next/link'
import navStyle from '../styles/index.module.sass'
export default function Navigation(){
return(
    <React.Fragment >
        <div className={navStyle.sidebar}>
                <ul>
                    <li><Link href={`/`}>Dashboard</Link></li>
                    <li><Link href={`/vehicle-register`}>Register</Link></li>
                    <li><Link href={`/data-registry`}>Registry</Link></li>
                    <li><Link href={`/permission`}>Permission</Link></li>
                    <li><Link href={`/settings`}>Settings</Link></li>
                </ul>
                </div>
    </React.Fragment>   
)
}