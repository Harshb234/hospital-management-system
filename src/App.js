import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import AddPatient from './pages/AddPatient';
import PatientList from './pages/PatientList';
import AddDoctor from './pages/AddDoctor';
import Appointments from './pages/Appointments';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Header from './pages/Header';

import './App.css';

function App() {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/add-patient">Add Patient</Link>
            </li>
            <li>
              <Link to="/patient-list">Patient List</Link>
            </li>
            <li>
              <Link to="/add-doctor">Add Doctor</Link>
            </li>
            <li>
              <Link to="/appointments">Appointments</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
           
            </li>
          </ul>
        </nav>

        <div className="container">
          <Routes>
            <Route
              path="/add-patient"
              element={<AddPatient patients={patients} setPatients={setPatients} />}
            />
            <Route
              path="/patient-list"
              element={<PatientList patients={patients} />}
            />
            <Route
              path="/add-doctor"
              element={<AddDoctor doctors={doctors} setDoctors={setDoctors} />}
            />
            <Route
              path="/appointments"
              element={
                <Appointments
                  patients={patients}
                  doctors={doctors}
                  appointments={appointments}
                  setAppointments={setAppointments}
                />
              }
            />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
