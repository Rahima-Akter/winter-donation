import { useContext } from "react";
import { authContext } from "../Context/Context";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user } = useContext(authContext)
    const location = useLocation()
    if (!user) {
        return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
    }

    return children;
};

export default PrivateRoute;