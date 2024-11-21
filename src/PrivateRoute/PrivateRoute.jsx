import { useContext } from "react";
import { authContext } from "../Context/Context";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const location = useLocation()

    if (loading) {
        return <p className="text-red-500 text-center text-5xl"> Loading...............................</p>
    }

    if (!user) {
        return <Navigate state={{ from: location.pathname }} to="/login"></Navigate>
    }

    return children;
};


export default PrivateRoute;