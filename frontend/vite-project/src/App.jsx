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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
