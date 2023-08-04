import { ContactListItem } from 'components/contact-list-item/ContactsListItem';
import css from './ContactsList.module.css';
import { Button } from 'components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { NoContactsMessage } from 'components/noContactsMessage/noContactsMessage';
import { deleteContactThunk } from 'redux/operations';
import { selectFilteredContacts } from '../../redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {contacts.length ? (
        contacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact}>
            <Button
              type="button"
              text="Delete"
              id={contact.id}
              onClick={e => {
                dispatch(deleteContactThunk(e.target.getAttribute('id')));
              }}
            />
          </ContactListItem>
        ))
      ) : (
        <NoContactsMessage name={filter} />
      )}
    </ul>
  );
};
