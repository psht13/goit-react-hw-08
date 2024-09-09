import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { addContact } from '../redux/contacts/operations';
import Button from './Button';

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
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
      >
        <Form className="form">
          <div></div>
          <label className="field">
            <span>Name</span>
            <Field className="input" type="text" name="name" />
            <ErrorMessage
              className="errorMessage"
              name="name"
              component="span"
            />
          </label>
          <label className="field">
            <span>Number</span>
            <Field className="input" type="text" name="number" />
            <ErrorMessage
              className="errorMessage"
              name="number"
              component="span"
            />
          </label>

          <Button type="submit" custom={'w-full'}>
            Add contact
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
