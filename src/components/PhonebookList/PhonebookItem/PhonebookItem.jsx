import PropTypes from 'prop-types';
import {
  ContactItemElement,
  ItemContent,
  ButtonStyled,
} from './PhonebookItem.styled';

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, phone } = contact;

  return (
    <ContactItemElement>
      <ItemContent>{name}</ItemContent>
      <ItemContent>{phone}</ItemContent>
      <ButtonStyled onClick={() => onDelete(id)}> Delete</ButtonStyled>
    </ContactItemElement>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
