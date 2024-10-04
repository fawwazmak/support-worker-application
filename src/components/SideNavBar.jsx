import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Logo from '/logo.png'

const SideNavBar = () => {
  return (
    <aside className='bg-purple-800 p-4 h-full flex flex-col md:gap-24 gap-4'>
      {/* logo   */}
        <img src={Logo} alt="Logo" className='h-12 md:w-52 w-full' />

        <div className='text-gray-300 font-bold flex flex-col md:gap-6 sm:gap-2'>
            <NavLink to="/" className={({ isActive }) =>`flex gap-3 items-center p-2 rounded-[3px] ${isActive ? "bg-gray-600 text-white " : "bg-none"}`}>
                <FontAwesomeIcon icon={faBriefcase} />
                <p>Service Profile</p>
            </NavLink>
            <NavLink to="/YP" className={({ isActive }) =>`flex gap-3 items-center p-2 rounded-[3px] ${isActive ? "bg-gray-600 text-white " : "bg-none"}`}>
                <FontAwesomeIcon icon={faBriefcase} />
                <p>YP Profile</p>
            </NavLink>
            <NavLink to="/reports" className={({ isActive }) =>`flex gap-3 items-center p-2 rounded-[3px] ${isActive ? "bg-gray-600 text-white " : "bg-none"}`}>
                <FontAwesomeIcon icon={faBriefcase} />
                <p>Reports</p>
            </NavLink>
            <NavLink to="/trainingHub" className={({ isActive }) =>`flex gap-3 items-center p-2 rounded-[3px] ${isActive ? "bg-gray-600 text-white " : "bg-none"}`}>
                <FontAwesomeIcon icon={faBriefcase} />
                <p>Training hub</p>
            </NavLink>
            <NavLink to="/policies" className={({ isActive }) =>`flex gap-3 items-center p-2 rounded-[3px] ${isActive ? "bg-gray-600 text-white " : "bg-none"}`}>
                <FontAwesomeIcon icon={faBriefcase} />
                <p>Policies</p>
            </NavLink>
            <NavLink to="/SWProfile" className={({ isActive }) =>`flex gap-3 items-center p-2 rounded-[3px] ${isActive ? "bg-gray-600 text-white " : "bg-none"}`}>
                <FontAwesomeIcon icon={faBriefcase} />
                <p>S/w profile</p>
            </NavLink>
            <NavLink to="/timesheet" className={({ isActive }) =>`flex gap-3 items-center p-2 rounded-[3px] ${isActive ? "bg-gray-600 text-white " : "bg-none"}`}>
                <FontAwesomeIcon icon={faBriefcase} />
                <p>Timesheet</p>
            </NavLink>
        </div>
    </aside>
  )
}

export default SideNavBar
