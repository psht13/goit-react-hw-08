import { Link } from 'react-router-dom';

const NavigationLink = ({ children, path }) => {
  return (
    <Link
      className="rounded-full px-10 bg-orange-50 py-3 hover:bg-orange-100 text-gray-800 outline-orange-900"
      to={path}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
