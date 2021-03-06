import { useContext , useState } from "react";
import  UserContext  from "./UserContext";


const Profile = () => {
    const [loading, setLoading] = useState(false)

    const data = useContext(UserContext)
    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            data.setUser({id : 1, userName : 'natsuhahiko', bio: 'Gumus'})
            setLoading(false)
        }, 1500) 
    }
    const handleLogout = () => {
        data.setUser(null)
    }
    return(
        <div>
            <button onClick={handleLogin}>{loading ? "loading" : "Login"}</button>
            {data.bio}
            <code>{JSON.stringify(data)}</code>
            <br></br>
            {
                data.user && <button onClick={handleLogout}>Logout</button>
            }
        </div>
    )
}
export default Profile