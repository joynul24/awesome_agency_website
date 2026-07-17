import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
      </Helmet>
      <section
        className="min-h-screen flex items-center justify-center relative"
        style={{ background: 'linear-gradient(135deg, #0d1128 0%, #1a2040 100%)' }}
      >
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />
        <div className="relative text-center px-6">
          <p className="text-9xl font-bold font-heading text-primary-500 mb-4">404</p>
          <h1 className="text-3xl font-bold font-heading text-white mb-4">Page Not Found</h1>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="btn-primary-custom inline-flex items-center gap-2">
            <FaHome /> Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
