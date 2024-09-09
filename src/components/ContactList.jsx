import Contact from './Contact';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../redux/contactsSlice';

const ContactList = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <div className="flex flex-wrap gap-4">
      {loading && <div>Loading...</div>}
      {error && <div>Error fetching contacts</div>}
      {visibleContacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </div>
  );
};

export default ContactList;
