import { useSelector } from 'react-redux';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import PhonebookFilter from './PhonebookFilter/PhonebookFilter';
import PhonebookList from './PhonebookList/PhonebookList';
import Loader from './Loader/Loader';
import * as selectors from '../redux/selectors';
import { StyledContainer } from './App.styled.js';

const App = () => {
  const loading = useSelector(selectors.contactsLoadingSelector);
  const error = useSelector(selectors.contactsErrorSelector);
  return (
    <>
      {!loading && !error && <Loader />}
      {!error && (
        <StyledContainer>
          <h1>Phonebook</h1>
          <PhonebookForm />
          <h2>Contacts</h2>
          <PhonebookFilter />
          <PhonebookList />
        </StyledContainer>
      )}
      {error && <h1>Something is wrong</h1>}
    </>
  );
};

export default App;
