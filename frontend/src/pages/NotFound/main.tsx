import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-2 text-xl text-gray-600">Page Not Found</p>
      <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
