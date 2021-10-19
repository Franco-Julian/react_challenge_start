import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointmentsData, setAppointmentsData] = useState([{}]);

  const newContact = (name, phone, email) => {
    const contact = {
      name: name,
      phone: phone,
      email: email
    };
    setContacts(prev => [...prev, contact]);
  }

  const newAppointment = (title, contact, date, time) => {
    const appointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    };
    setAppointmentsData(prev => [...prev, appointment]);
  }

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };


  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage
             contacts={contacts}
             newContact={newContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
            contacts={contacts}
            appointmentsData={appointmentsData}
            newAppointment={newAppointment}  />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
