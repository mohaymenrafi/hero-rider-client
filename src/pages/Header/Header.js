import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function Header() {
  const { user, isLoading, logOut } = useAuth();
  if (isLoading) return <h2>Loading......</h2>;
  return (
    <header className="container mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-2 items-center">
      <div>
        <Link exact to="/">
          <h2 className="font-mont font-semibold text-3xl">
            Hero <span className="text-green-500">Rider</span>
          </h2>
        </Link>
      </div>
      <nav>
        <ul className="flex justify-end text-md">
          <Link exact to="/" className="ml-4">
            Home
          </Link>
          {!user?.email && (
            <Link to="/login" className="ml-4">
              Login
            </Link>
          )}
          {!user?.email && (
            <Link to="/register" className="ml-4">
              Register
            </Link>
          )}
          <Link to="/my-account" className="ml-4">
            My Account
          </Link>
          <Link to="/contact" className="ml-4">
            Contact
          </Link>
          {user?.email && (
            <button type="button" onClick={logOut} className="ml-4">
              Logout
            </button>
          )}
          <div className="ml-4">
            <span>{user?.displayName}</span>
            <span className="ml-4">{user?.email}</span>
          </div>
        </ul>
      </nav>
    </header>
  );
}
