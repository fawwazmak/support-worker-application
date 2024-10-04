import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import YoungPersonProfile from "./views/YoungPersonProfile";
import ServiceProfile from "./views/ServiceProfile";
import Reports from "./views/Reports";
import TrainingHub from "./views/TrainingHub";
import Policies from "./views/Policies";
import SWProfile from "./views/SWProfile";
import Timesheet from "./views/TimeSheet";
import SideNavBar from "./components/SideNavBar";


function App() {

  return (
    <>
      <BrowserRouter>
        <div className="flex gap-5 h-screen relative md:static">
          <div className="h-full md:relative absolute left-0 top-0">
            <SideNavBar />
          </div>
          
          {/* Other Components  */}
          <div className="">
            <Routes>
              <Route path="/" element={<ServiceProfile />} />
              <Route path="/YP" element={<YoungPersonProfile />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/trainingHub" element={<TrainingHub />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/SWProfile" element={<SWProfile />} />
              <Route path="/timesheet" element={<Timesheet />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
