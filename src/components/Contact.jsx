import { FaUser } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsOps';
import Button from './Button';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="flex items-center justify-between w-full max-w-[250px] p-3 border-2 border-black rounded-l">
      <div className="flex flex-col justify-center gap-1">
        <p>
          <FaUser className="w-4 h-4" /> <span>{name}</span>
        </p>
        <p>
          <BsTelephoneFill className="w-4 h-4" /> <span>{number}</span>
        </p>
      </div>
      <div>
        <Button type="button" onClick={handleClick}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Contact;
