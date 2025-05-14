import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const handleFilterChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm)
    );
    setFilteredContacts(filtered);
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    setContacts([...contacts, newContact]);
    setFilteredContacts([...contacts, newContact]);
    actions.resetForm();
  };

  const handleDelete = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={handleSubmit} />
        <SearchBox handleFilterChange={handleFilterChange} />
        <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
