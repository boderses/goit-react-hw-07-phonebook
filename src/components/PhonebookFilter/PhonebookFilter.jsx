import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/reducers';
import { filterSelector } from '../../redux/selectors';
import { FilterForm, FilterInput } from './PhonebookFilter.styled';

const PhonebookFilter = () => {
  const getFilter = useSelector(filterSelector);
  const dispatch = useDispatch();
  return (
    <FilterForm>
      <label>
        Search contact by name
        <br />
        <FilterInput
          type="text"
          value={getFilter}
          onChange={event => dispatch(changeFilter(event.currentTarget.value))}
        />
      </label>
    </FilterForm>
  );
};

export default PhonebookFilter;
