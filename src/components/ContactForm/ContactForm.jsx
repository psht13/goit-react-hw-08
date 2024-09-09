import css from './ContactForm.module.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsOps';

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));

    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
      >
        <Form className={css.form}>
          <label className={css.field}>
            <span>Name</span>
            <Field type="text" name="name" />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="span"
            />
          </label>
          <label className={css.field}>
            <span>Number</span>
            <Field type="text" name="number" />
            <ErrorMessage
              className={css.errorMessage}
              name="number"
              component="span"
            />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
