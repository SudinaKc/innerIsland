import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
const PrivateRoute = ({ children, user }) => {
  if (user) {
    return children
  } else {
    toast.error("not logged In");
    return <Navigate to={"/login"} />
  }
}

export default PrivateRoute
PrivateRoute.propTypes = {
  user: PropTypes.object,
  // children: PropTypes.node,
};
