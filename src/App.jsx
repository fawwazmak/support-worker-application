import ReactDOM from "react-dom/client";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import YoungPersonProfile from "./views/YoungPersonProfile";
import ServiceProfile from "./views/MainServiceProfile";
import Reports from "./components/otherFormsInServiceProfile/FormsInService";
import TrainingHub from "./views/TrainingHub";
import Policies from "./views/Policies";
import SWProfile from "./views/SWProfile";
import Timesheet from "./views/TimeSheet";
import NoPage from "./components/NoPage";
import SideNavBar from "./components/SideNavBar";
import LoginPage from "./views/LoginPage";
import ServProfile from "./components/serviceProfileCompo/ServiceProfileForm";
import YoungProfileForm from "./components/youngPersons/YoungProfileForm";
import FormsInYP from "./components/otherFormsInYoungPersonProfile/FormsInYP";
import IncidentReport from "./components/IncidentReportList";
import PrevoidManagement from "./components/PrevoidManagementList";
import ManagementList from "./components/ManagementList";
import CaseNote from "./components/CaseNote";
import Complaints from "./components/ComplaintsList";
import RiskAssesment from "./components/RiskAssesment";

function ProtectedRoute({ children, isAuthenticated, isAdmin, adminOnly }) {
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

  const activePath = location.pathname === "/service" ? "/serviceProfile" : location.pathname;
  return (
    <>
      <div className="flex gap-5 md:h-screen relative md:static">
        {location.pathname !== "/" && location.pathname !== "*" && (
          <div className="absolute md:relative md:left-0 md:top-0 top-2 z-50">
            <div className="md:hidden fixed right-4" onClick={() => setShowNav(prevShowNav => !prevShowNav)}>
              <FontAwesomeIcon className={`h-8 w-8 ${showNav ? "hidden" : "block"}`} icon={faBars} />
              <FontAwesomeIcon className={`h-8 w-8 ${showNav ? "block" : "hidden"}`} icon={faXmark} />
            </div>

            <div className={`h-screen md:block ${showNav ? 'block' : 'hidden'} left-0 top-0`}>
              <SideNavBar activePath={activePath} />
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

            <Route
              path="/YP"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <YoungPersonProfile />
                </ProtectedRoute>
              }
            />

            <Route path="/YP/form" element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={isAdmin} >
                <YoungProfileForm />
              </ProtectedRoute>
            } />

            <Route path="/complaints" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Complaints />
              </ProtectedRoute>
              }  />
            <Route path="/casenote" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <CaseNote />
              </ProtectedRoute>
              }  />
            <Route path="/riskAssesment" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <RiskAssesment />
              </ProtectedRoute>
              }  />

            <Route
              path="/reports"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Reports />
                </ProtectedRoute>
              }
            />

            <Route
              path="/trainingHub"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <FormsInYP />
                </ProtectedRoute>
              }
            />

            <Route
              path="/policies"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Policies />
                </ProtectedRoute>
              }
            />

            <Route
              path="/SWProfile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <SWProfile />
                </ProtectedRoute>
              }
            />
            
            <Route
              path="/timesheet"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Timesheet />
                </ProtectedRoute>
              }
            />

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
