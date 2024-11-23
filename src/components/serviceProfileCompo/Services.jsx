import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import bagIcon from "/bag-icon.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import arrowUp from "/arrow-up.svg";

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedStudent } = location.state || {};
  const [currentTab, setCurrentTab] = useState("service");

  
  const [showAllYP, setShowAllYP] = useState(false);
  const [showAllIncident, setShowAllIncident] = useState(false);
  const [showAllPrevoidM, setShowAllPrevoidM] = useState(false);
  const [showAllRoomCheck, setShowAllRoomCheck] = useState(false);
  const [showAllMaintenace, setShowAllMaintenace] = useState(false);
  const youngpersonsTodisplay = showAllYP ? selectedStudent.youngPersons || [] : selectedStudent.youngPersons.slice(0, 5) || [];
  const incidentTodisplay = showAllIncident ? selectedStudent.incidentReport : selectedStudent.incidentReport.slice(0, 5) || [];
  const prevoidToDisplay = showAllPrevoidM ? selectedStudent.prevoidManagement : selectedStudent.prevoidManagement.slice(0, 5) || [];
  const roomCheckToDisplay = showAllRoomCheck ? selectedStudent.roomChecks : selectedStudent.roomChecks.slice(0, 5) || [];
  const maintenanceToDisplay = showAllMaintenace ? selectedStudent.maintenance : selectedStudent.maintenance.slice(0, 5) || [];

  const [selectedYoungPerson, setSelectedYoungPerson] = useState(null);

  const toYpForm = () => {
    navigate("/YP/form")
  }

  const toIncidentReportForm = () => {
    navigate("/incidentForm");
  }

  const toPrevoidForm = () => {
    navigate("/prevoidForm")
  }

  const toRoomCheckForm = () => {
    navigate("/roomCheckForm")
  }

  const toMaintenaceForm = () => {
    navigate("/maintenanceForm")
  }

  const toProfile = () => { 
    navigate("/serviceProfile/profile");
  }
  const toIncident = () => {
    navigate("/incidentReport")
  }

  const toPrevoidManagement = () => {
    navigate("/prevoidManagement")
  }

  const toManagement = () => {
    navigate("/management")
  } 


  const clickedYoungPerson = (youngPerson) => {
    setSelectedYoungPerson(youngPerson);
  }

  const deselectYoungPerson = () => {
    setSelectedYoungPerson(null);
  }


  // Drag into input 
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFiles(Array.from(e.dataTransfer.files));
      e.dataTransfer.clearData();
    }
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };


  return (
    <div className='h-screen overflow-hidden'>
      <header className='text-[#6b21a8] shadow-lg mb-8'>
        <ul className='flex flex-wrap gap-8 pt-4 px-8 text-xl'>
          <li onClick={() => {setCurrentTab("service")}} className='cursor-pointer'>
            <p>{selectedStudent.name}</p>
            <div className={`${currentTab === "service" ? "w-full h-[2px] bg-[#6b21a8] mt-2" : "hidden"}`}></div>
          </li>

          <li onClick={() => {setCurrentTab("correspondent")}} className='cursor-pointer'>
            <p>Correspondent</p>
            <div className={`${currentTab === "correspondent" ? "w-full h-[2px] bg-[#6b21a8] mt-2" : "hidden"}`}></div>
          </li>

          <li onClick={() => {setCurrentTab("files")}} className='cursor-pointer'>
            <p>Files</p>
            <div className={`${currentTab === "files" ? "w-full h-[2px] bg-[#6b21a8] mt-2" : "hidden"}`}></div>
          </li>
        </ul>
      </header>

      <div className='overflow-y-scroll h-full pb-24 scrollbar-thin'>
        {(currentTab === "service") && (
          <>
            <div className=' px-4 md:px-0 md:pr-4 font-poppins'>
              <form action="" className="mt-8 w-[80%] mx-auto">
                <button className='bg-[#6b21a8] text-white px-6 py-2 my-4 rounded-[8px] sticky top-4 left-0 block'>Save</button>
                <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
                    <header className="flex justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                        <h2>Service Details</h2>
                        <img src={arrowUp} alt="Arrow" />
                    </header>
                    <div className="flex flex-col gap-4 md:p-5 p-2">
                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="serviceCode">Service code</label>
                            <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="serviceCode" id="serviceCode" />
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="serviceName">Service name</label>
                            <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="serviceName" id="serviceName" />
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="manager">Manager</label>
                            <input className='border border-[#dedede] p-2 rounded-[4px] w-full' name="manager" id="manager" />
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="address">Address</label>
                            <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="address" id="address" placeholder='Enter your address' />
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="phoneNumber">Phone number</label>
                            <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="tel" name="phoneNumber" id="phoneNumber" />
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="email">Email</label>
                            <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="email" name="email" id="email" />
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="landLine">Landline</label>
                            <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="landLine" id="landLine" />
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="emergencyNumber">Emergency number</label>
                            <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="tel" name="emergencyNumber" id="emergencyNumber" />
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="supportedAccomodation">Supported accomodation</label>
                            <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="supportedAccomodation" id="supportedAccomodation">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                                <option value="notApplicable">N/A</option>
                            </select>
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="serviceType">Service type</label>
                            <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="serviceType" id="serviceType">
                                <option value="none">none</option>
                                <option value="optionOne">option one</option>
                                <option value="optionTwo">option two</option>
                            </select>
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="numberOfBeds">Number of beds</label>
                            <input max={10} min={0} className='border border-[#dedede] p-2 rounded-[4px] w-full' type="number" name="numberOfBeds" id="numberOfBeds" />
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="specialization">Specialization</label>
                            <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="specialization" id="specialization" >
                                <option value="16to25">16-25</option>
                            </select>
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="legalSupport">Legal support</label>
                            <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="legalSupport" id="legalSupport">
                                <option value="low">Low</option> 
                                <option value="medium">Medium</option>
                                <option value="medium-high">Medium-high</option>
                                <option value="high">High</option>
                            </select>
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="focusOfSupport">Focus of support</label>
                            <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="focusOfSupport" id="focusOfSupport">
                                <option value="no">no</option>
                                <option value="yes">Yes</option>
                                <option value="notApplicable">N/A</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
                    <header className="flex justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                        <h2>Staff info</h2>
                        <img src={arrowUp} alt="Arrow" />
                    </header>
                    <div className="flex flex-col gap-4 md:p-5 p-2">
                      <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="serviceManager">Service manager</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="serviceManager" id="serviceManager" />
                      </div>

                      <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="deputyManager">Deputy manager</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="deputyManager" id="deputyManager" />
                      </div>

                      <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="callOne">On Call</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="tel" name="callOne" id="callOne" />
                      </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
                    <header className="flex justify-between bg-[#F9F2FF] p-5">
                        <h2>Service Users</h2>
                        <img src={arrowUp} alt="Arrow" />
                    </header>
                    <div className="flex flex-col gap-4 md:p-5 p-2">
                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="gender">Gender</label>
                            <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="gender" id="gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="both">Both</option>
                            </select>
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="ageRange">Age range</label>
                            <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="ageRange" id="ageRange">
                                <option value="16-25">16 - 25</option>
                            </select>
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="pronoun">Pronoun</label>
                            <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="pronoun" id="pronoun" >
                                <option value="ratherNotSay">Rather not say</option>
                                <option value="he">He / him</option>
                                <option value="she">She / her</option>
                            </select>
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="durationOfStay">Duration of Stay</label>
                            <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="durationOfStay" id="durationOfStay" >
                                <option value="0.5">6 months</option>
                                <option value="1">1 year</option>
                                <option value="2">2 years</option>
                            </select>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
                    <header className="flex justify-between bg-[#F9F2FF] p-5">
                        <h2>Support considerations</h2>
                        <img src={arrowUp} alt="Arrow" />
                    </header>
                    <div className="flex flex-col gap-4 md:p-5 p-2">
                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="loneWorking">Lone working</label>
                            <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="loneWorking" id="loneWorking">
                                <option value="no">no</option>
                                <option value="yes">Yes</option>
                                <option value="notApplicable">N/A</option>
                            </select>
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="challengingBehaviour">Challenging behaviour</label>
                            <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="challengingBehaviour" id="challengingBehaviour">
                                <option value="no">no</option>
                                <option value="yes">Yes</option>
                                <option value="notApplicable">N/A</option>
                            </select>
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="personalCareSupport">Personal care support</label>
                            <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="personalCareSupport" id="personalCareSupport" >
                                <option value="no">no</option>
                                <option value="yes">Yes</option>
                                <option value="notApplicable">N/A</option>
                            </select>
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="physicalChallenges">Physical challenge(s)</label>
                            <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="physicalChallenges" id="physicalChallenges" placeholder='Savegaurding young at all time that present various complex needs'></textarea>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
                    <header className="flex justify-between bg-[#F9F2FF] p-5">
                        <h2>Other considerations and FAQS</h2>
                        <img src={arrowUp} alt="Arrow" />
                    </header>
                    <div className="flex flex-col gap-4 md:p-5 p-2">
                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="sleepInBed">Sleep in bed</label>
                            <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="sleepInBed" id="sleepInBed">
                                <option value="no">no</option>
                                <option value="yes">Yes</option>
                                <option value="notApplicable">N/A</option>
                            </select>
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="parking">Parking</label>
                            <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="parking" id="parking">
                                <option value="no">no</option>
                                <option value="yes">Yes</option>
                                <option value="notApplicable">N/A</option>
                            </select>
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="pets">Are there pets</label>
                            <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="pets" id="pets">
                                <option value="no">no</option>
                                <option value="yes">Yes</option>
                                <option value="notApplicable">N/A</option>
                            </select>
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='' htmlFor="unpaidBreaksy">Unpaid breaks</label>
                            <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="unpaidBreaksy" id="unpaidBreaksy">
                                <option value="0.5">30 minutes</option>
                                <option value="1">1 hour</option>
                            </select>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
                    <header className="flex justify-between bg-[#F9F2FF] p-5">
                        <h2>System info</h2>
                        <img src={arrowUp} alt="Arrow" />
                    </header>
                    <div className="flex flex-col gap-4 md:p-5 p-2">
                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="notes">Notes</label>
                            <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="notes" id="notes" placeholder='Type here'></textarea>
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="commissionDate">Commission date</label>
                            <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="commissionDate" id="commissionDate" placeholder='Type here'></textarea>
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="createdBy">Created by</label>
                            <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="createdBy" id="createdBy" placeholder='Type here'></textarea>
                        </div>

                        <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                            <label className='w-full' htmlFor="modifiedBy">Modified by</label>
                            <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="modifiedBy" id="modifiedBy" placeholder='Type here'></textarea>
                        </div>

                    </div>
                </div>
                
              </form>
            </div>
          </>
        )}

        {(currentTab === "correspondent") && (
          <>
            <div className=''>
              {/* Young persons  */}
              <div className='w-full overflow-x-hidden'>
                <div className='flex justify-end pr-2'>
                  <div onClick={toYpForm} className="flex gap-4 items-center border border-[#6b21a8] rounded-[5px] p-1 text-[#6b21a8] w-fit my-1 cursor-pointer">
                    <p>Add new</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"/></svg>
                  </div>
                </div>
                <p className='bg-[#6b21a8] text-white p-2'>Young person</p>
                <div className="lg:overflow-x-hidden overflow-x-scroll w-full">
                  <table className='border-separate border-spacing-2 md:border-spacing-1 w-full mt-4 border rounded-[5px] '>
                    <thead className='bg-gray-200'>
                      <tr className='text-center'>
                        <th className='px-3 py-2'>ID</th>
                        <th className='px-3 py-2'>Name</th>
                        <th className='px-3 py-2'>Age</th>
                        <th className='px-3 py-2'>Referral Date</th>
                      </tr>
                    </thead>

                    <tbody className='font-medium'>
                    {youngpersonsTodisplay.length > 0 ? (
                    youngpersonsTodisplay.map(yp => (
                      <tr key={yp.id} className="px-3 whitespace-nowrap text-center" onClick={() => clickedYoungPerson(yp)}>
                        <td>{yp.id}</td>
                        <td>{yp.name}</td>
                        <td>{yp.age}</td>
                        <td>{yp.referralDate}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">No data available</td>
                    </tr>
                  )}
                    </tbody>
                  </table>
                </div>
                {selectedStudent.youngPersons.length > 5 && (
                  <button className='block mx-auto text-center p-2 text-[#6b21a8] text-lg animate-pulse my-2' onClick={() => setShowAllYP(!showAllYP)}>
                    {showAllYP ? 'View Less' : 'View All'}
                  </button>
                )}
              </div>

              <>
                {selectedYoungPerson && (
                  <>
                    <div className='modal absolute right-0 top-0 p-4 bg-white h-screen overflow-y-scroll flex flex-col gap-4 md:w-2/5 z-50 font-poppins scrollbar-thin'>
                      <div className='absolute right-4' onClick={deselectYoungPerson}>
                        <FontAwesomeIcon icon={faXmark} className='md:h-6 h-4' />
                      </div>
                      <figure>
                        <img src={selectedStudent.image} alt="student image" className='block h-28 w-28 mx-auto border-8 border-[#2060BE] rounded-[50%] mb-3' />
                        <figcaption className='text-center font-bold md:text-2xl text-lg'>{selectedStudent.name}</figcaption>
                      </figure>

                      <table>
                        <thead>
                          <tr><th className='text-center bg-[#622C981C] py-2 w-full' colSpan={2}>Service details</th></tr>
                        </thead>
                          
                        <tfoot>
                          <tr><td colSpan={2} className='text-center bg-[#622C981C] py-2 w-full'>Actions</td></tr>
                        </tfoot>

                        <tbody className='w-1/2 mx-auto'>
                          <tr className='font-semibold'>
                            <td className='text-gray-400 md:pt-4 pt-2'>Risk level</td>
                            <td className='w-1/2 md:text-start text-right text-wrap md:pt-4 pt-2'>{selectedStudent.riskLevel}</td>
                          </tr>
                          <tr className='font-semibold'>
                            <td className='text-gray-400'>Email</td>
                            <td className='w-1/2 md:text-start text-right text-wrap'>{selectedStudent.email}</td>
                          </tr>
                          <tr className='font-semibold'>
                            <td className='text-gray-400'>Phone</td>
                            <td className='w-1/2 md:text-start text-right text-wrap'>{selectedStudent.contact}</td>
                          </tr>
                          <tr className='font-semibold'>
                            <td className='text-gray-400'>Address</td>
                            <td className='w-1/2 md:text-start text-right text-wrap'>{selectedStudent.address}</td>
                          </tr>
                          <tr className='font-semibold'>
                            <td className='text-gray-400'>Age</td>
                            <td className='w-1/2 md:text-start text-right text-wrap'>{selectedStudent.age}</td>
                          </tr>
                          <tr className='font-semibold'>
                            <td className='text-gray-400 md:pb-4 pb-2'>Gender</td>
                            <td className='w-1/2 md:text-start text-right text-wrap md:pb-4 pb-2'>{selectedStudent.gender}</td>
                          </tr>
                        </tbody>
                      </table>  

                        
                      <div onClick={toProfile} className='flex flex-wrap gap-2 md:justify-start justify-end'>
                        <div className='flex items-center md:gap-3 gap-2 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-400 md:justify-normal justify-between'>
                          <img src={bagIcon} alt="Icon" className='h-[16px]' />
                          <p>profile</p>
                        </div>

                        <div onClick={toIncident} className='flex items-center md:gap-3 gap-2 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-400 md:justify-normal justify-between'>
                          <img src={bagIcon} alt="Icon" className='h-[16px]' />
                          <p>incident report</p>
                        </div>

                        <div onClick={toPrevoidManagement} className='flex items-center md:gap-3 gap-2 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-400 md:justify-normal justify-between'>
                          <img src={bagIcon} alt="Icon" className='h-[16px]' />
                          <p>prevoid management</p>
                        </div>

                        <div onClick={toManagement} className='flex items-center md:gap-3 gap-2 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-400 md:justify-normal justify-between'>
                          <img src={bagIcon} alt="Icon" className='h-[16px]' />
                          <p>Management</p>
                        </div>

                        <div className='flex items-center md:gap-3 gap-2 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-400 md:justify-normal justify-between'>
                          <img src={bagIcon} alt="Icon" className='h-[16px]' />
                          <p>emergency contact</p>
                        </div>

                        <div className='flex items-center md:gap-3 gap-2 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-400 md:justify-normal justify-between'>
                          <img src={bagIcon} alt="Icon" className='h-[16px]' />
                          <p>Risk assesment plan</p>
                        </div>
                      </div>
                    </div>

                    <div className='bg-gray-200 md:block hidden opacity-50 h-full w-full absolute left-0 top-0 z-10 font-poppins' onClick={deselectYoungPerson}></div>
                  </>
                )}
              </>

              {/* Incident report  */}
              <div className='w-full overflow-x-hidden'>
                <div className='flex justify-end pr-2'>
                  <div onClick={toIncidentReportForm} className="flex gap-4 items-center border border-[#6b21a8] rounded-[5px] p-1 text-[#6b21a8] w-fit my-1 cursor-pointer">
                    <p>Add new</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"/></svg>
                  </div>
                </div>
                <p className='bg-[#6b21a8] text-white p-2'>Incident report</p>
                <div className="lg:overflow-x-hidden overflow-x-scroll w-full">
                  <table className='border-separate border-spacing-2 md:border-spacing-1 w-full mt-4 border rounded-[5px] '>
                    <thead className='bg-gray-200'>
                      <tr className='text-center'>
                        <th className='px-3 py-2'>Date of incident</th>
                        <th className='px-3 py-2'>Time of incident</th>
                        <th className='px-3 py-2'>Cause of concern about YP</th>
                        <th className='px-3 py-2'>Created by</th>
                      </tr>
                    </thead>

                    <tbody className='font-medium'>
                    {incidentTodisplay.length > 0 ? (
                    incidentTodisplay.map(incidentTodisplay => (
                      <tr key={incidentTodisplay.id} className="px-3 whitespace-nowrap text-center">
                        <td>{incidentTodisplay.dateOfIncident}</td>
                        <td>{incidentTodisplay.timeOfIncident}</td>
                        <td>{incidentTodisplay.causeOfConcern}</td>
                        <td>{incidentTodisplay.createdBy}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">No data available</td>
                    </tr>
                  )}
                    </tbody>
                  </table>
                </div>
                {selectedStudent.incidentReport.length > 5 && (
                  <button className='block mx-auto text-center p-2 text-[#6b21a8] text-lg animate-pulse my-2' onClick={() => setShowAllIncident(!showAllIncident)}>
                    {showAllIncident ? 'View Less' : 'View All'}
                  </button>
                )}
              </div>


              {/* Previod management  */}
              <div className='w-full overflow-x-hidden'>
                <div className='flex justify-end pr-2'>
                  <div onClick={toPrevoidForm} className="flex gap-4 items-center border border-[#6b21a8] rounded-[5px] p-1 text-[#6b21a8] w-fit my-1 cursor-pointer">
                    <p>Add new</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"/></svg>
                  </div>
                </div>
                <p className='bg-[#6b21a8] text-white p-2'>Previod management</p>
                <div className="lg:overflow-x-hidden overflow-x-scroll w-full">
                  <table className='border-separate border-spacing-2 md:border-spacing-1 w-full mt-4 border rounded-[5px] '>
                    <thead className='bg-gray-200'>
                      <tr className='text-center'>
                        <th className='px-3 py-2'>Serivce ID</th>
                        <th className='px-3 py-2'>Room</th>
                        <th className='px-3 py-2'>Intended void date</th>
                        <th className='px-3 py-2'>Created by</th>
                      </tr>
                    </thead>

                    <tbody className='font-medium'>
                    {prevoidToDisplay.length > 0 ? (
                    prevoidToDisplay.map(prevoidToDisplay => (
                      <tr key={prevoidToDisplay.serviceId} className="px-3 whitespace-nowrap text-center">
                        <td>{prevoidToDisplay.serviceId}</td>
                        <td>{prevoidToDisplay.room}</td>
                        <td>{prevoidToDisplay.intendedVoidDate}</td>
                        <td>{prevoidToDisplay.createdBy}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">No data available</td>
                    </tr>
                  )}
                    </tbody>
                  </table>
                </div>
                {selectedStudent.prevoidManagement.length > 5 && (
                  <button className='block mx-auto text-center p-2 text-[#6b21a8] text-lg animate-pulse my-2' onClick={() => setShowAllPrevoidM(!showAllPrevoidM)}>
                    {showAllPrevoidM ? 'View Less' : 'View All'}
                  </button>
                )}
              </div>

              {/* Room checks */}
              <div className='w-full overflow-x-hidden'>
                <div className='flex justify-end pr-2'>
                  <div onClick={toRoomCheckForm} className="flex gap-4 items-center border border-[#6b21a8] rounded-[5px] p-1 text-[#6b21a8] w-fit my-1 cursor-pointer">
                    <p>Add new</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"/></svg>
                  </div>
                </div>
                <p className='bg-[#6b21a8] text-white p-2'>Room checks</p>
                
                <div className="lg:overflow-x-hidden overflow-x-scroll w-full">
                  <table className='border-separate border-spacing-2 md:border-spacing-1 w-full mt-4 border rounded-[5px] '>
                    <thead className='bg-gray-200'>
                      <tr className='text-center'>
                        <th className='px-3 py-2'>Serivce</th>
                        <th className='px-3 py-2'>Staff lead</th>
                        <th className='px-3 py-2'>Compiled by</th>
                        <th className='px-3 py-2'>Last modified by</th>
                      </tr>
                    </thead>

                    <tbody className='font-medium'>
                    {roomCheckToDisplay.length > 0 ? (
                    roomCheckToDisplay.map(roomCheckToDisplay => (
                      <tr key={roomCheckToDisplay.service} className="px-3 whitespace-nowrap text-center">
                        <td>{roomCheckToDisplay.service}</td>
                        <td>{roomCheckToDisplay.staffLead}</td>
                        <td>{roomCheckToDisplay.compiledBy}</td>
                        <td>{roomCheckToDisplay.lastModified}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">No data available</td>
                    </tr>
                  )}
                    </tbody>
                  </table>
                </div>
                {selectedStudent.roomChecks.length > 5 && (
                  <button className='block mx-auto text-center p-2 text-[#6b21a8] text-lg animate-pulse my-2' onClick={() => setShowAllRoomCheck(!showAllRoomCheck)}>
                    {showAllRoomCheck ? 'View Less' : 'View All'}
                  </button>
                )}
              </div>

              {/* Maintenance  */}
              <div className='w-full overflow-x-hidden'>
                <div className='flex justify-end pr-2'>
                  <div onClick={toMaintenaceForm} className="flex gap-4 items-center border border-[#6b21a8] rounded-[5px] p-1 text-[#6b21a8] w-fit my-1 cursor-pointer">
                    <p>Add new</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"/></svg>
                  </div>
                </div>
                <p className='bg-[#6b21a8] text-white p-2'>Maintenance</p>
                
               <div className="lg:overflow-x-hidden overflow-x-scroll w-full">
                  <table className='border-separate border-spacing-2 md:border-spacing-1 w-full mt-4 border rounded-[5px] '>
                    <thead className='bg-gray-200'>
                      <tr className='text-center'>
                        <th className='px-3 py-2'>Serivce name</th>
                        <th className='px-3 py-2'>Room number</th>
                        <th className='px-3 py-2'>Name of YP</th>
                        <th className='px-3 py-2'>Date repair requested</th>
                        <th className='px-3 py-2'>Time repair requested</th>
                        <th className='px-3 py-2'>Reference number</th>
                        <th className='px-3 py-2'>Last modified</th>
                      </tr>
                    </thead>

                    <tbody className='font-medium'>
                    {maintenanceToDisplay.length > 0 ? (
                    maintenanceToDisplay.map(maintenanceToDisplay => (
                      <tr key={maintenanceToDisplay.serviceName} className="px-3 whitespace-nowrap text-center">
                        <td>{maintenanceToDisplay.serviceName}</td>
                        <td>{maintenanceToDisplay.roomNumber}</td>
                        <td>{maintenanceToDisplay.nameOfYP}</td>
                        <td>{maintenanceToDisplay.dateOfRepairReq}</td>
                        <td>{maintenanceToDisplay.timeOfRepairReq}</td>
                        <td>{maintenanceToDisplay.referenceNumber}</td>
                        <td>{maintenanceToDisplay.lastModified}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">No data available</td>
                    </tr>
                  )}
                    </tbody>
                  </table>
                </div>
                {selectedStudent.maintenance.length > 5 && (
                  <button className='block mx-auto text-center p-2 text-[#6b21a8] text-lg animate-pulse my-2' onClick={() => setShowAllMaintenace(!showAllMaintenace)}>
                    {showAllMaintenace ? 'View Less' : 'View All'}
                  </button>
                )}
              </div>
            </div>
          </>
        )}

        {(currentTab === "files") && (
          <>
            <form action="" method="post">
              <div className={`border ${dragActive ? 'border-blue-500 bg-blue-100' : 'border-[#dedede]'} p-4 rounded-[4px] w-full text-center`} onDragOver={handleDragOver} onDragEnter={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
                <label htmlFor="serviceFiles" className="cursor-pointer">{files.length === 0? 'Drag files here or click to upload' : `${files.length} file(s) selected`}</label>
                <input className="hidden" type="file" name="serviceFiles" id="serviceFiles" multiple onChange={handleFileChange} />
              </div>

              {files.length > 0 && (
                <ul className="mt-2 flex justify-between md:px-4 px-2">
                  {files.map((file, index) => (
                    <li key={index} className="text-sm">
                      {file.name}
                    </li>
                  ))}
                </ul>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default Services
