import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VolunteerForm from './pages/VolunterrRegisteration';
import AllVolunteers from './pages/AllVolunteers';
import AddEvent from './pages/AddEvents';
import DonationForm from './pages/DonationForm';
import AllEventsPage from './pages/AllEvents';
import AllDonorsPage from './pages/AllDonors';
import DonateToEvent from './pages/DonateToEvent';
import DonationPage from './pages/DonateToEvent';
import AssignEventPage from './pages/AssignVolunteers';
import ViewAssignmentsPage from './pages/AllAssignments';
import LoginPage from './pages/LoginPage';
import VolunteerDashboard from './pages/VounteerDashboard';
import AdminDashboard from './pages/AdminPage';
import LandingPage from './pages/LandingPage';
import AddItems from './pages/AddItems';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/donation" element={<DonationForm />} />
        <Route path="/volunteer" element={<VolunteerForm />} />
        <Route path="/allvolunteers" element={<AllVolunteers />} />
        <Route path="/addevents" element={<AddEvent />} />
        <Route path="/allevents" element={<AllEventsPage />} />
        <Route path="/alldonors" element={<AllDonorsPage />} />
        <Route path="/don" element={<DonationPage />} />
        <Route path="/assign" element={<AssignEventPage />} />
        <Route path="/assigned" element={<ViewAssignmentsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dash/:token" element={<VolunteerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/" element={<LandingPage/>} />
        <Route path="/additems" element={<AddItems/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
