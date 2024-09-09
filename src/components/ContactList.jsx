import Contact from './Contact';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
} from '../redux/contacts/selectors';
import Error from './Error';

const ContactList = () => {
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-5  w-full ">
        {visibleContacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </div>
      {error && <Error>Oops... {error}</Error>}
    </>
  );
};

export default ContactList;
