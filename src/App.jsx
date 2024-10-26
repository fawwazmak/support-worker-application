import ReactDOM from "react-dom/client";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import YoungPersonProfile from "./views/YoungPersonProfile";
import ServiceProfile from "./views/MainServiceProfile";
import Reports from "./views/Reports";
import TrainingHub from "./views/TrainingHub";
import Policies from "./views/Policies";
import SWProfile from "./views/SWProfile";
import Timesheet from "./views/TimeSheet";
import NoPage from "./components/NoPage";
import SideNavBar from "./components/SideNavBar";
import LoginPage from "./views/LoginPage";
import ServProfile from "./components/serviceProfileCompo/Profile";
import StudentList from "./components/serviceProfileCompo/StudentList";

function ProtectedRoute({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
}

function App() {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation(); 
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      <div className="flex gap-5 md:h-screen relative md:static">
        {location.pathname !== "/" && location.pathname !== "*" && (
          <div className="absolute md:relative md:left-0 md:top-0 top-2">
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
            
            
            <Route
              path="/serviceProfile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ServiceProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/serviceProfile/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ServProfile />
                </ProtectedRoute>
              }
            />

            <Route path="/service" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <StudentList />
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
                  <TrainingHub />
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
