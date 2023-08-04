import css from './App.module.css';
import { HeadText } from './head-text/HeadText';
import { ContactsList } from './contacts-list/ContactsList';
import { PhonebookForm } from './phonebook-form/PhonebookForm';
import { LabelInput } from './label-input/LabelInput';
import { filterChange } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import LoadingOverlay from 'react-loading-overlay-ts';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <LoadingOverlay active={isLoading} spinner text="Loading your content...">
      <div className={css.container}>
        <HeadText title="Phonebook" />
        <PhonebookForm />
        <HeadText title="Contacts" />
        <LabelInput
          handleInputChange={e => {
            dispatch(filterChange(e.target.value));
          }}
          type="text"
          name="filter"
          labelName="Find contacts by name"
        />
        <ContactsList />
      </div>
    </LoadingOverlay>
  );
};
