import { useDispatch } from 'react-redux';
import Button from './Button';
import { logout } from '../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <Button type="button" onClick={handleClick} custom={''}>
      Log Out
    </Button>
  );
};

export default UserMenu;
