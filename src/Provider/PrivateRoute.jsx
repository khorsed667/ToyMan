import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {


    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <progress className="progress w-100"></progress>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;