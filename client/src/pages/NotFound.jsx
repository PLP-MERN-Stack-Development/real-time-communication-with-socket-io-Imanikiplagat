// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
    <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
    <p className="mb-4">Oops! The page you’re looking for doesn’t exist.</p>
    <Link
      to="/"
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Go Home
    </Link>
  </div>
);

export default NotFound;
