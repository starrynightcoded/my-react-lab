import React from 'react';
import './App.css'; // Import global styles
import ProfileCard from './Components/Profile.Card';

function App() {
return (
    <div>
        <ProfileCard name="Safiya" age="19" occupation="Student" location="Karachi" />
    </div>
);
}
export default App;