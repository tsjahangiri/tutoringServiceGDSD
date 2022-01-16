// @flow
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../core/selectors/user";

export const Authorized: React.FC<any> = ({ component: RouteComponent }) => {
  const renderComponent = useSelector(isAuthenticated);

  if (renderComponent) {
    return <RouteComponent />;
  }

  return <Navigate to="/login" />;
};
