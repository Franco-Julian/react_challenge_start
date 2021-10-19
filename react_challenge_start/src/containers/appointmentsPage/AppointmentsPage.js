import React from "react";
import { useState } from "react";
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm'
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const contacts = props.contacts;
  const appointmentsData = props.appointmentsData;
  const newAppointment = props.newAppointment;

  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  
  /*
  Define state variables for 
  appointment info
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    newAppointment(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts} 
          title={title}
          contact={contact}
          date={date}
          time={time}
          setTitle={setTitle}
          setContact={setContact}
          setDate={setDate}
          setTime={setTime}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList 
        data={appointmentsData} />
      </section>
    </div>
  );
};
