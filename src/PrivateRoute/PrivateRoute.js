import { Redirect, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Loader from '../pages/Message/Loader';
/* eslint-disable react/prop-types */
export default function PrivateRoute({ children, ...rest }) {
  const { user, isLoading } = useAuth();
  if (isLoading) return <Loader />;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
