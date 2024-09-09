import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../redux/auth/selectors';

const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <div className="w-full border-b-orange-300 border bg-orange-200 py-5 flex items-center justify-center">
      <nav className="w-[80%] flex justify-between items-center max-sm:">
        <Navigation />

        {!isLoggedIn ? <AuthNav /> : <UserMenu />}
      </nav>
    </div>
  );
};

export default AppBar;
