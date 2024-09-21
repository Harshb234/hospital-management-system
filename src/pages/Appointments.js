import React, { useState } from 'react';

function Appointments({ patients, doctors, appointments, setAppointments }) {
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: appointments.length + 1,
      patient: selectedPatient,
      doctor: selectedDoctor,
      date,
    };
    setAppointments([...appointments, newAppointment]);
    setSelectedPatient('');
    setSelectedDoctor('');
    setDate('');
  };

  return (
    <div className="appointments">
      <h2>Schedule Appointment</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedPatient}
          onChange={(e) => setSelectedPatient(e.target.value)}
          required
        >
          <option value="">Select Patient</option>
          {patients.map((patient) => (
            <option key={patient.id} value={patient.name}>
              {patient.name}
            </option>
          ))}
        </select>

        <select
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
          required
        >
          <option value="">Select Doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.name}>
              Dr. {doctor.name} ({doctor.specialty})
            </option>
          ))}
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button type="submit">Schedule Appointment</button>
      </form>

      <h3>Appointments</h3>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.patient} with {appointment.doctor} on {appointment.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Appointments;
