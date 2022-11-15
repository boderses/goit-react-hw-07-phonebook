import { createSelector } from 'reselect';

const contactsStateSelector = state => state.contacts;

export const contactsLoadingSelector = createSelector(
  contactsStateSelector,
  data => data.isLoading
);

export const contactsDataSelector = createSelector(
  contactsStateSelector,
  data => data.contacts
);

export const contactsErrorSelector = createSelector(
  contactsStateSelector,
  data => data.error
);

export const filterSelector = createSelector(
  contactsStateSelector,
  data => data.filter
);
