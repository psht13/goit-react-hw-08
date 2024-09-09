import NavigationLink from './NavigationLink';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <div className="flex gap-4 flex-wrap">
      <NavigationLink path={'/'}>Home</NavigationLink>
      {isLoggedIn && (
        <NavigationLink path={'/contacts'}>Contacts</NavigationLink>
      )}
    </div>
  );
};

export default Navigation;
