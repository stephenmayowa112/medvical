import { Link } from 'react-router';
import { AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-700 mb-4">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="text-4xl mb-2">404 - Page Not Found</h1>
        <p className="text-slate-600 mb-6">
          The page you requested is unavailable or has moved. Use the links below to continue.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/services">View Services</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/testimonials">Read Testimonials</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/clinic-registration">Patient Registration</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
