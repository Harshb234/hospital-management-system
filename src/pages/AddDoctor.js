import React, { useState } from 'react';

function AddDoctor({ doctors, setDoctors }) {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDoctor = { id: doctors.length + 1, name, specialty };
    setDoctors([...doctors, newDoctor]);
    setName('');
    setSpecialty('');
  };

  return (
    <div className="add-doctor">
      <h2>Add Doctor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Doctor Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          required
        />
        <button type="submit">Add Doctor</button>
      </form>
    </div>
  );
}

export default AddDoctor;
