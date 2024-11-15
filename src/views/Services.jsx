import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import filterIcon from "/filter-icon.svg";
import bagIcon from "/bag-icon.svg";
import bagIconWhite from "/bag-icon-white.svg";
import bagIconBlack from "/bag-icon-black.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import studentDemo from "/student-demo-image.jpg"

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedStudent } = location.state || {};
  const [currentTab, setCurrentTab] = useState("service")
  const [showAllYP, setShowAllYP] = useState(false);
  const [showAllIncident, setShowAllIncident] = useState(false);
  const youngpersonsTodisplay = showAllYP ? selectedStudent.youngPersons : selectedStudent.youngPersons.slice(0, 5);
  const incidentTodisplay = showAllIncident ? selectedStudent.incidentReport : selectedStudent.incidentReport.slice(0, 5);
  const [selectedYoungPerson, setSelectedYoungPerson] = useState(null);


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


  return (
    <div className='h-screen overflow-y-hidden'>
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

      <div className='overflow-y-scroll h-full pb-24'>
        {(currentTab === "service") && (
          <>
            
          </>
        )}

        {(currentTab === "correspondent") && (
          <>
            <div className=''>
              {/* Young persons  */}
              <div>
                <p className='bg-[#6b21a8] text-white p-2'>Young person</p>
                <table className='border-separate border-spacing-2 md:border-spacing-1 w-full mt-4 border rounded-[5px]'>
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

                {selectedStudent.youngPersons.length > 5 && (
                  <button className='block mx-auto text-center p-2 text-[#6b21a8] text-lg animate-pulse' onClick={() => setShowAllYP(!showAllYP)}>
                    {showAllYP ? 'View Less' : 'View All'}
                  </button>
                )}
              </div>

              <>
                {selectedYoungPerson && (
                  <>
                    <div className='modal absolute right-0 top-0 p-4 bg-white h-screen overflow-y-scroll flex flex-col gap-4 md:w-2/5 z-50 font-poppins'>
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
              <div>
                <p className='bg-[#6b21a8] text-white p-2'>Incident report</p>
                <table className='border-separate border-spacing-2 md:border-spacing-1 w-full mt-4 border rounded-[5px]'>
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

                {selectedStudent.incidentReport.length > 5 && (
                  <button className='block mx-auto text-center p-2 text-[#6b21a8] text-lg animate-pulse' onClick={() => setShowAllIncident(!showAllIncident)}>
                    {showAllIncident ? 'View Less' : 'View All'}
                  </button>
                )}
              </div>
            </div>
          </>
        )}

        {(currentTab === "files") && (
          <>
            <p>Correspondence</p>
          </>
        )}
      </div>
    </div>
  )
}

export default Services
