import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const PrivateRoute = ({children}) => {


    const {user} = useContext(AuthContext);

    if(user?.email){
        return children;
    }

    // return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;