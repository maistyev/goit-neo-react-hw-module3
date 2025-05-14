import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ contacts, handleDelete }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact
            name={name}
            number={number}
            handleDelete={() => handleDelete(id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
