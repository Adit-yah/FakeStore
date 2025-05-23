
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Page Not Found</p>
      <Link to="/" className="text-blue-500 underline">
        Go to Home
      </Link>
    </div>
  )
}

export default NotFound