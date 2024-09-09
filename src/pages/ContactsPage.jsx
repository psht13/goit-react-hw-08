import ContactForm from '../components/ContactForm';
import SearchBox from '../components/SearchBox';
import ContactList from '../components/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { selectAuthIsLoggedIn } from '../redux/auth/selectors';
import Error from '../components/Error';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoggedIn ? (
        <div className="w-full flex flex-col justify-center items-center py-8 gap-4 ">
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      ) : (
        <Error>User should be logged in to view this page.</Error>
      )}
    </>
  );
};

export default ContactsPage;
