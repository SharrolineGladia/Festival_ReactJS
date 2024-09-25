import React from 'react';
import GlobalStyle from './styles/globalStyles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EventsDisplay from './components/EventsDisplay';
import LoginSignup from './components/LoginSignup'; // Import your login/signup component
import styled from 'styled-components';

// Styled button for navigation
const NavButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  margin: 20px;
  background-color: #007bff; /* Button color */
  color: white; /* Text color */
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3; /* Darker color on hover */
  }
`;

// Main layout component for the home page
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Events App</h1>
      <NavButton to="/events">Events</NavButton>
      <NavButton to="/login">Login</NavButton> {/* Button to navigate to login/signup page */}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home page with navigation buttons */}
        <Route path="/events" element={<EventsDisplay />} />
        <Route path="/login" element={<LoginSignup />} /> {/* Route for login/signup page */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
