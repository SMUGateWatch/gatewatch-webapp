import {useState} from 'react'
import localStyle from '../styles/index.module.sass'
import {useRouter} from 'next/router'
import io from 'socket.io-client'

const DOMAIN_SERVER = 'localhost:4000'
const socket = io(DOMAIN_SERVER)

export default function Login(){
    // var [uname, setUsername] = useState(null)
    // var [pass, setPassword] = useState(null)
    // var [permission,setPermission] = useState(false);
    // var [verified,setVerified] = useState(false);
    // const router = useRouter()
    
    // const handleLogin =()=> {
                    
    // }
   

    //   if (verified){
    //       router.push({
    //         pathname: '/',
    //         query: {
    //             userId: `${uname}`,
    //             admin: `${permission}`,
    //             },
    //         }) 
    //     }
        
    
    

    return(
        <div>
            <div id = "main-container" className={localStyle.MainContainer}>
                <div id="login-container" className={localStyle.LoginContainer}>
                    <h1>Login</h1>
                    <h5>This is the page for you to login</h5><br/>
                    <form action="/api/user/login" method="POST">
                    <label for="Uname">Username</label>
                    <input id="Uname" type="text" name="uname" placeholder="Enter your Username"/>
                    <br/>
                    <label for="password">Password</label>
                    <input id="password" type="password" name="pass" placeholder="Enter your Password"/>
                    <br/>
                    <button type="submit" name="login">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}