import { useSelector } from 'react-redux';
import RegistrationForm from '../components/RegistrationForm';
import { selectAuthError } from '../redux/auth/selectors';
import Error from '../components/Error';

const RegistrationPage = () => {
  const error = useSelector(selectAuthError);
  console.log(error);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center pt-8">
      <RegistrationForm />
      {error && <Error>Oops... {error}</Error>}
    </div>
  );
};

export default RegistrationPage;
