import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="bg-gray-300 px-4 py-32">
    <div className="container mx-auto text-center">
      <h2 className="font-semibold font-mont text-4xl mb-6">
        The page you're looking for is not found.
      </h2>
      <Link to="/" className="text-lg">
        Back to{' '}
        <button
          type="button"
          className="ml-3 text-white px-4 py-2 bg-green-500"
        >
          Home
        </button>
      </Link>
    </div>
  </div>
);

export default NotFound;
