import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import Button from './Button';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required!'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Password is required!'),
  email: Yup.string().email('Not valid email!').required('Email is required!'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(register(values));
  };
  return (
    <Formik
      validationSchema={ValidationSchema}
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label className={'field'}>
          <span>Name</span>
          <Field type="text" name="name" placeholder="Pavlo Yurchenko" />
          <ErrorMessage
            className={'errorMessage'}
            name="name"
            component="span"
          />
        </label>
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

        <Button type="submit">Sign Up</Button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
