import React from 'react';

function PatientList({ patients }) {
  return (
    <div className="patient-list">
      <h2>Patient List</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {patient.name} - {patient.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientList;
