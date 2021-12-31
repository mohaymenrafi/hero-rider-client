import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h2>The page you're looking for is not found.</h2>
    <Link to="/">
      Back to <button type="button">Home</button>
    </Link>
  </div>
);

export default NotFound;
