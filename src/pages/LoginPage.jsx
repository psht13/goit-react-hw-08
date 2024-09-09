import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { selectAuthError } from '../redux/auth/selectors';

const LoginPage = () => {
  const error = useSelector(selectAuthError);
  return (
    <div className="w-full h-full flex flex-col gap-4 justify-center items-center pt-8">
      <LoginForm />
      {error && <div>Oops... {error} </div>}
    </div>
  );
};

export default LoginPage;
