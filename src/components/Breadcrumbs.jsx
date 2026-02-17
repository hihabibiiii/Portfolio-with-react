import { Link, useLocation } from 'react-router-dom';

function capitalize(segment) {
  if (!segment) return '';
  return segment.charAt(0).toUpperCase() + segment.slice(1);
}

export default function Breadcrumbs() {
  const location = useLocation();
  const path = location.pathname;
  const segments = path === '/' ? [] : path.split('/').filter(Boolean);

  return (
    <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-400 py-3" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="text-cyan-300 hover:text-cyan-200">Home</Link>
        </li>
        {segments.map((seg, idx) => {
          const to = '/' + segments.slice(0, idx + 1).join('/');
          return (
            <li key={to} className="flex items-center">
              <span className="mx-2">/</span>
              <Link to={to} className="hover:text-cyan-200 text-gray-300">
                {capitalize(seg)}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
