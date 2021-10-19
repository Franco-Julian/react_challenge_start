import React from "react";

export const ContactPicker = (props) => {
  const contacts = props.contacts;
  const handleContactChange = props.handleContactChange;
  return (
      <select onChange={handleContactChange}>
        <option value="No Selected" key={0} selected="selected">No Selected</option>
        {
        contacts.map ((contact,key=1) =>{
          return <option value={contact.name} key={key}>{contact.name}</option>
        }
        )}
      </select>
  );
};
