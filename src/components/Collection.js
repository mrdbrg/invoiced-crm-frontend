import React from 'react';
import { useSelector } from 'react-redux';
import Contact from './Contact';
import AddContactForm from './AddContactForm';

const Collection = (props) => {

  const contacts = useSelector(state => state.contact.contacts)

  const renderContacts = () => {
    console.log("RENDER CONTACTS FROM COLLECTION:", contacts)
    return contacts.map(info => (
      <Contact key={info.id} { ...info } />
    ))
  }

  return (
    <div id="Collection" className="pure-container">
      <AddContactForm addContact={props.addContact}/>
      <div className="pure-g">
        {renderContacts()}
      </div>
    </div>
  );
}

export default Collection;
