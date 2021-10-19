import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleNameChange = (e) =>{
    setName(e.target.value);
  } 

  const handlePhoneChange = (e) =>{
    setPhone(e.target.value);
  } 

  const handleEmailChange = (e) =>{
    setEmail(e.target.value);
  } 

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" 
         value={name}
         onChange={handleNameChange} />
      </label>
      <label>
        Phone:
        <input type="tel"
         value={phone}
         pattern="\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|
          2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|
          4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$"
         onChange={handlePhoneChange}  />
      </label>
      <label>
        Email:
        <input type="email"
         value={email}
         onChange={handleEmailChange}  />
      </label>
      <input type="submit" value="Submit" />
    </form>
//    ContactForm
  );
};
