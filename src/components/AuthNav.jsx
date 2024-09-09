import { useDispatch, useSelector } from 'react-redux';
import NavigationLink from './NavigationLink';
import { selectAuthIsLoggedIn, selectAuthUser } from '../redux/auth/selectors';
import Button from './Button';
import { logout } from '../redux/auth/operations';

const AuthNav = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const user = useSelector(selectAuthUser);
  return (
    <>
      {' '}
      {!isLoggedIn ? (
        <div className="flex gap-4">
          <NavigationLink path={'/login'}>Login</NavigationLink>
          <NavigationLink path={'/register'}>Register</NavigationLink>
        </div>
      ) : (
        <Button
          type="button"
          onClick={() => {
            dispatch(logout());
          }}
        >
          Log Out {user.name !== undefined && `| ${user.name}`}
        </Button>
      )}
    </>
  );
};

export default AuthNav;
