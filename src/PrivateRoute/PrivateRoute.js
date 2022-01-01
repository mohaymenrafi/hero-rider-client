import { Redirect, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
/* eslint-disable react/prop-types */
export default function PrivateRoute({ children, ...rest }) {
  const { user, isLoading } = useAuth();
  if (isLoading) return <h2>Loading ...</h2>;
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
