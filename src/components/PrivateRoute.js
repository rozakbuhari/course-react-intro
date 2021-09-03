import { Route, Redirect } from "react-router-dom";

const isAuthed = false;

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return isAuthed ? children : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
