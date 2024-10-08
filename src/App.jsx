import ReactDOM from "react-dom/client";
import { useState } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import YoungPersonProfile from "./views/YoungPersonProfile";
import ServiceProfile from "./views/ServiceProfile";
import Reports from "./views/Reports";
import TrainingHub from "./views/TrainingHub";
import Policies from "./views/Policies";
import SWProfile from "./views/SWProfile";
import Timesheet from "./views/TimeSheet";
import NoPage from "./components/NoPage"
import SideNavBar from "./components/SideNavBar";
import LoginPage from "./views/LoginPage";


function App() {
  const [showNav, setShowNav] = useState(false);
  const [noSideBar, setNoSideBar] = useState(true);


  const viewSideBar = () => {
    setNoSideBar(false);
  };


  return (
    <>
      <BrowserRouter>
        <div className="flex gap-5 md:h-screen relative md:static">
          {!noSideBar &&
          <div className="absolute md:relative md:left-0 md:top-0 top-2">
            <div className="md:hidden fixed right-4" onClick={() => setShowNav(prevShowNav => !prevShowNav)}>
              <FontAwesomeIcon className={`h-8 w-8 ${showNav? "hidden" : "block"}`} icon={faBars} />
              <FontAwesomeIcon className={`h-8 w-8 ${showNav? "block" : "hidden"}`} icon={faXmark} />
            </div>
            <div className={`h-screen md:block ${showNav? 'block' : 'hidden'} left-0 top-0`}>
              <SideNavBar noSideBar={noSideBar} changeValue={viewSideBar} />
            </div>
          </div>
          }
          {/* Other Components  */}
          <div className="md:w-[80%] w-full">
            <Routes>
              <Route path="/" element={<LoginPage noSideBar={noSideBar} changeValue={viewSideBar} />} />
              <Route path="/serviceProfile" element={<ServiceProfile />} />
              <Route path="/YP" element={<YoungPersonProfile />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/trainingHub" element={<TrainingHub />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/SWProfile" element={<SWProfile />} />
              <Route path="/timesheet" element={<Timesheet />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
