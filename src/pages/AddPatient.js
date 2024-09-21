import React, { useState } from 'react';

function AddPatient({ patients, setPatients }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPatient = { id: patients.length + 1, name, age };
    setPatients([...patients, newPatient]);
    setName('');
    setAge('');
  };

  return (
    <div className="add-patient">
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
}

export default AddPatient;
