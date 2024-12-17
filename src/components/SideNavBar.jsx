import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Logo from '/logo.png';

const SideNavBar = () => {
    const navigate = useNavigate();
    
    const logOut = () => {
        localStorage.removeItem('role');
        navigate('/'); 
    }

    return (
        <aside className='bg-[#622C98] p-4 h-full flex flex-col md:gap-24 gap-4 font-poppins'>
            {/* logo */}
            <img src={Logo} alt="Logo" className='h-12 md:w-52 w-full' />

            <div className='text-gray-300 font-medium flex flex-col md:gap-[10px] sm:gap-2'>
                <NavLink to="/serviceProfile" className={({ isActive }) => `flex gap-3 items-center p-2 rounded-[3px] ${  (isActive || location.pathname == "/services" ) ? "bg-[#311A4878] text-white rounded-[8px] py-3" : "bg-none"}`}>
                    <FontAwesomeIcon icon={faBriefcase} />
                    <p>Service Profile</p>
                </NavLink>
                <NavLink to="/YP" className={({ isActive }) => `flex gap-3 items-center p-2 rounded-[3px] ${isActive ? "bg-[#311A4878] text-white rounded-[8px] py-3" : "bg-none"}`}>
                    <FontAwesomeIcon icon={faBriefcase} />
                    <p>YP Profile</p>
                </NavLink>
                <NavLink to="/trainingHub" className={({ isActive }) => `flex gap-3 items-center p-2 rounded-[3px] ${isActive ? "bg-[#311A4878] text-white rounded-[8px] py-3" : "bg-none"}`}>
                    <FontAwesomeIcon icon={faBriefcase} />
                    <p>Training hub</p>
                </NavLink>
                <NavLink to="/policies" className={({ isActive }) => `flex gap-3 items-center p-2 rounded-[3px] ${isActive ? "bg-[#311A4878] text-white rounded-[8px] py-3" : "bg-none"}`}>
                    <FontAwesomeIcon icon={faBriefcase} />
                    <p>Policies</p>
                </NavLink>
                <NavLink to="/SWProfile" className={({ isActive }) => `flex gap-3 items-center p-2 rounded-[3px] ${isActive ? "bg-[#311A4878] text-white rounded-[8px] py-3" : "bg-none"}`}>
                    <FontAwesomeIcon icon={faBriefcase} />
                    <p>S/w profile</p>
                </NavLink>
                <NavLink to="/shiftTracker" className={({ isActive }) => `flex gap-3 items-center p-2 rounded-[3px] ${isActive ? "bg-[#311A4878] text-white rounded-[8px] py-3" : "bg-none"}`}>
                    <FontAwesomeIcon icon={faBriefcase} />
                    <p>ShiftTracker</p>
                </NavLink>
            </div>

            <div className='flex items-center justify-between justify-self-end cursor-pointer' onClick={logOut}>
                <p className='text-black font-bold'>Log out</p>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </div>
        </aside>
    );
}

export default SideNavBar;