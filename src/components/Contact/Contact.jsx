import { FaPhone, FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
import { MdLocalPhone } from "react-icons/md";
import { MdPerson } from "react-icons/md";

function Contact({ name, number, handleDelete }) {
  return (
    <div className={css.contactItem}>
      <div className={css.contactInfo}>
        <div className={css.contactName}>
          <FaUser className={css.contactIcon} />
          <p>{name}</p>
        </div>
        <div className={css.contactPhone}>
          <FaPhone className={css.phoneIcon} />
          <p>{number}</p>
        </div>
      </div>
      <button className={css.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
