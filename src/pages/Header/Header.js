import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-2 items-center">
      <div>
        <h2 className="font-mont font-semibold text-3xl">
          Hero <span className="text-green-500">Rider</span>
        </h2>
      </div>
      <nav>
        <ul className="flex justify-end text-md">
          <Link exact to="/" className="ml-4">
            Home
          </Link>
          <Link to="/login" className="ml-4">
            Login
          </Link>
          <Link to="/register" className="ml-4">
            Register
          </Link>
          <Link to="/contact" className="ml-4">
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
}
