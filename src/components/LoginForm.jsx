import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import Button from './Button';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/operations';

const ValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Password is required!'),
  email: Yup.string().email('Not valid email!').required('Email is required!'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(login(values));
  };
  return (
    <Formik
      validationSchema={ValidationSchema}
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label className={'field'}>
          <span>Email</span>
          <Field
            type="text"
            name="email"
            placeholder="pavlo.yurchenko@gmail.com"
          />

          <ErrorMessage
            className={'errorMessage'}
            name="email"
            component="span"
          />
        </label>
        <label className={'field'}>
          <span>Password</span>
          <Field type="password" name="password" placeholder="Enter password" />
          <ErrorMessage
            className={'errorMessage'}
            name="password"
            component="span"
          />
        </label>

        <Button type="submit">Log In</Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
