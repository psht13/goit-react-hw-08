import { useDispatch, useSelector } from 'react-redux';
import NavigationLink from './NavigationLink';
import { selectAuthIsLoggedIn } from '../redux/auth/selectors';
import Button from './Button';
import { logout } from '../redux/auth/operations';

const AppNavigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <div className="w-full border-b-orange-300 border bg-orange-200 h-20 flex items-center justify-center">
      <nav className="w-[80%] flex gap-12 justify-between items-center">
        <div className="flex gap-4">
          <NavigationLink path={'/'}>Home</NavigationLink>
          {isLoggedIn && (
            <NavigationLink path={'/contacts'}>Contacts</NavigationLink>
          )}
        </div>

        <div className="flex gap-4">
          {!isLoggedIn ? (
            <>
              <NavigationLink path={'/login'}>Login</NavigationLink>
              <NavigationLink path={'/register'}>Register</NavigationLink>
            </>
          ) : (
            <Button
              type="button"
              onClick={() => {
                dispatch(logout());
              }}
            >
              Sign Out
            </Button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default AppNavigation;
