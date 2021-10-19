import React from "react";
import { useState, useEffect } from "react";
import {ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';
export const ContactsPage = (props) => {
  const contacts = props.contacts;
  const newContact = props.newContact;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [duplicated, setDuplicated] = useState(false);

  useEffect (() => {
    const result = contacts.find(item => item.name === name);
    if(result !== undefined) {
      setDuplicated(true);
      window.alert("The name is already in the list");
    }
    else{
      setDuplicated(false);
    }
  },[name,contacts]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!duplicated) {
      newContact(name,phone,email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit} /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          data={contacts} />
      </section>
    </div>
  );
};
