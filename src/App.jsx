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

function ProtectedRoute({ children, isAuthenticated }) {
  // If the user is not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
}

function App() {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation(); // Get the current location
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Store auth state

  const handleLogin = () => {
    // Simulate a login action
    setIsAuthenticated(true);
  };

  return (
    <>
      <div className="flex gap-5 md:h-screen relative md:static">
        {/* Sidebar should be hidden on specific paths */}
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

        {/* Main content area where Routes are rendered */}
        <div className="md:w-[80%] w-full">
          <Routes>
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
            
            {/* Protect routes with ProtectedRoute component */}
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
            
            {/* NoPage (404) Route */}
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

// Wrap App with BrowserRouter in the main index file (e.g., index.js)
export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
