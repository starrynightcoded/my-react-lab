import React from 'react';
import './App.css'; // Import global styles
// import Navbar from './components/Navbar';
// import LandingPage from './components/LandingPage';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
function App() {
return (
<div>
<Navbar />
<div >
<LandingPage />
</div>

</div>
);
}
export default App;