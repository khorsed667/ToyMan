import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const PersonToy = () => {

    const {user} = useContext(AuthContext)

    console.log(user.email);

    useEffect(() =>{
        fetch(`http://localhost:5000/myToys/${user.email}`)
        .then(res => res.json())
        .then(data => console.log(data))
    },[user])

    return (
        <div>
            
        </div>
    );
};

export default PersonToy;