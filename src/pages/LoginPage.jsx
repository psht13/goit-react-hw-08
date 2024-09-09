import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { selectAuthError } from '../redux/auth/selectors';
import Error from '../components/Error';

const LoginPage = () => {
  const error = useSelector(selectAuthError);
  return (
    <div className="w-full h-full flex flex-col gap-4 justify-center items-center pt-8">
      <LoginForm />
      {error && <Error>Oops... {error}</Error>}
    </div>
  );
};

export default LoginPage;
