import ReactDOM from "react-dom/client";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import YoungPersonProfile from "./views/YoungPersonProfile";
import ServiceProfile from "./views/MainServiceProfile";
import TrainingHub from "./views/TrainingHub";
import Policies from "./views/Policies";
import SWProfile from "./views/SWProfile";
import ShiftTracker from "./views/ShiftTracker";
import NoPage from "./components/NoPage";
import SideNavBar from "./components/SideNavBar";
import LoginPage from "./views/LoginPage";
import ServProfile from "./components/serviceProfileCompo/ServiceProfileForm";
import YoungProfileForm from "./components/youngPersons/YoungProfileForm";
import IncidentReport from "./components/IncidentReportList";
import IncidentForm from "./components/otherFormsInServiceProfile/IncidentReport";
import PrevoidForm from "./components/otherFormsInServiceProfile/PrevoidManagement";
import RoomcheckForm from "./components/otherFormsInServiceProfile/RoomCheck";
import MaintenanceForm from "./components/otherFormsInServiceProfile/Maintenace";
import PrevoidManagement from "./components/PrevoidManagementList";
import ManagementList from "./components/ManagementList";
import CaseNote from "./components/otherFormsInYoungPersonProfile/CaseNote";
import Complaints from "./components/otherFormsInYoungPersonProfile/Complaints";
import RiskAssesment from "./components/otherFormsInYoungPersonProfile/RiskAssesment";
import Services from "./components/serviceProfileCompo/Services";
import YoungPersons from "./components/youngPersons/YoungPersons";
import HealthAndSafety from "./components/otherFormsInServiceProfile/HealthAndSafety";
import CompletedLog from "./components/shiftTracker/Completed";
import LiveAvailable from "./components/shiftTracker/LiveAvailable";
import Upcoming from "./components/shiftTracker/Upcoming";
import CreateTimeSheet from "./components/shiftTracker/CreateTimeSheet";

function ProtectedRoute({ children, isAuthenticated, isAdmin, adminOnly = false }) {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  if (adminOnly && !isAdmin) {
    return <Navigate to="/serviceProfile" />;
  }
  return children;
}

function App() {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (adminStatus) => {
    setIsAuthenticated(true);
    setIsAdmin(adminStatus);
  };

  return (
    <>
      <div className="flex gap-5 md:h-screen relative md:static overflow-hidden">
        {location.pathname !== "/" && location.pathname !== "*" && (
          <div className="absolute md:relative md:left-0 md:top-0 top-2 z-50">
            <div className="md:hidden fixed right-4" onClick={() => setShowNav(prevShowNav => !prevShowNav)}>
              <FontAwesomeIcon className={`h-8 w-8 ${showNav ? "hidden" : "block"}`} icon={faBars} />
              <FontAwesomeIcon className={`h-8 w-8 ${showNav ? "block" : "hidden"}`} icon={faXmark} />
            </div>

            <div className={`h-screen md:block ${showNav ? 'block' : 'hidden'} left-0 top-0`}>
              <SideNavBar />
            </div>
          </div>
        )}

        <div className="md:w-[80%] w-full">
          <Routes>
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} />

            <Route path="/serviceProfile" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ServiceProfile />
              </ProtectedRoute>
            } />

            <Route path="/services" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Services />
              </ProtectedRoute>
            } />

            <Route path="/serviceProfile/profile" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ServProfile />
              </ProtectedRoute>
            } />

            <Route path="/incidentReport" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <IncidentReport />
              </ProtectedRoute>
            } />
            <Route path="/prevoidManagement" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <PrevoidManagement />
              </ProtectedRoute>
            } />
            <Route path="/management" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ManagementList />
              </ProtectedRoute>
            } />

            {/* Other forms */}
            <Route path="/incidentForm" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <IncidentForm />
              </ProtectedRoute>
            }
            />

            <Route path="/prevoidForm" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <PrevoidForm />
              </ProtectedRoute>
            } />

            <Route path="/roomCheckForm" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <RoomcheckForm />
              </ProtectedRoute>
            } />

            <Route path="/maintenanceForm" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <MaintenanceForm />
              </ProtectedRoute>
            } />

            <Route path="/healthAndSafetyForm" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <HealthAndSafety />
              </ProtectedRoute>
            } />

            {/* Lorem ipsum dolor sit amet. */}

            <Route path="/YP" element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={isAdmin}>
                <YoungPersonProfile />
              </ProtectedRoute>
            } />

            <Route path="/YP/form" element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={isAdmin} adminOnly={true}>
                <YoungProfileForm />
              </ProtectedRoute>
            } />

            <Route path="/youngPersons" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <YoungPersons />
              </ProtectedRoute>
            } />

            <Route path="/complaints" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Complaints />
              </ProtectedRoute>
            } />
            <Route path="/casenote" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <CaseNote />
              </ProtectedRoute>
            } />
            <Route path="/riskAssesment" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <RiskAssesment />
              </ProtectedRoute>
            } />

            <Route path="/trainingHub" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <TrainingHub />
              </ProtectedRoute>
            } />

            <Route path="/policies" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Policies />
              </ProtectedRoute>
            } />

            <Route path="/SWProfile" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <SWProfile />
              </ProtectedRoute>
            } />
            
            <Route path="/shiftTracker" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ShiftTracker />
              </ProtectedRoute>
            } />

            <Route path="/completedLog" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <CompletedLog />
              </ProtectedRoute>
            } />

            <Route path="/liveAvailable" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <LiveAvailable />
              </ProtectedRoute>
            } />

            <Route path="/Upcoming" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Upcoming />  
              </ProtectedRoute>
            } />

            <Route path="/createTimesheet" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <CreateTimeSheet />
              </ProtectedRoute>
            } />

            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
