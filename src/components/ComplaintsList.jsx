import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faBriefcase, faPen, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import bagIcon from "/bag-icon.svg";
import bagIconWhite from "/bag-icon-white.svg";
import bagIconBlack from "/bag-icon-black.svg";
import studentDemo from "/student-demo-image.jpg"

const ComplaintsList = () => {
  const navigate = useNavigate();
  
  const toYPProfile = () => {
    navigate("/YP")
  }
  const toCaseNote = () => {
    navigate("/casenote")
  }
  const toRiskAssesment = () => {
    navigate("/riskAssesment")
  }
  const [YpCandidates, setYpCandidates] = useState([
    {id: 1, service: "Adedoyin Aderonke", stafflead: "Joe Linton", date: "12/04/24", compiledBy: "oluwsna"},
    {id: 2, service: "Olorunsogo Olawale", stafflead: "Joe Linton", date: "12/04/24", compiledBy: "oluwsna"},
    {id: 3, service: "Mafoluku Arike", stafflead: "Joe Linton", date: "12/04/24", compiledBy: "oluwsna"},
    {id: 4, service: "Afolabi Ayomide", stafflead: "Joe Linton", date: "12/04/24", compiledBy: "oluwsna"},
    {id: 5, service: "Olasunkami Ishola", stafflead: "Joe Linton", date: "12/04/24", compiledBy: "oluwsna"},
    {id: 6, service: "Sanni Ajoke", stafflead: "Joe Linton", date: "12/04/24", compiledBy: "oluwsna"},
    {id: 7, service: "Idowu Labake", stafflead: "Joe Linton", date: "12/04/24", compiledBy: "oluwsna"},
    {id: 8, service: "Idowu Labake", stafflead: "Joe Linton", date: "12/04/24", compiledBy: "oluwsna"},
    {id: 9, service: "Idowu Labake", stafflead: "Joe Linton", date: "12/04/24", compiledBy: "oluwsna"},
    {id: 10, service: "Idowu Labake", stafflead: "Joe Linton", date: "12/04/24", compiledBy: "oluwsna"},
  ])
  const [selectedYpCandidate, setSelectedYpCandidate] = useState(null);

  const deselect = () => {
    setSelectedYpCandidate(null);
  }
  
  return (
    <div className='p-4 h-screen overflow-y-hidden'>
      <header className='flex sm:justify-between sm:gap-0 gap-5 sm:flex-row flex-col'>
        <div className='flex items-center gap-5'>
          <h1 className='text-2xl font-bold'>Complaints</h1>
          <FontAwesomeIcon icon={faFilter} />
        </div>

        <div className='flex items-center gap-3 cursor-pointer sm:self-auto self-end bg-slate-200 p-2 rounded-[5px]'>
          <FontAwesomeIcon icon={faBriefcase} />
          <p>Jonathan D</p>
          <FontAwesomeIcon icon={faBriefcase} />
        </div>
      </header>

      {/* <div className='flex gap-3 md:gap-5 font-semibold text-gray-300 my-5'>
        <h6>Complaints</h6>
        <h6>/</h6>
        <h6>Client profiles</h6>
        <h6>Room check</h6>
      </div> */}

      <hr />

      <div className='flex md:flex-row flex-col md:justify-between md:gap-y-0 gap-y-3 my-3'>
        <input
          type="search"
          name="searchProfile"
          id="searchProfile"
          placeholder='Search Profile'
          className='block w-full md:w-3/5 bg-blue-100 outline-none rounded-3xl p-3'
        />

        {/* <div className='flex md:gap-5 gap-2 items-center md:self-auto self-end'>
          <div className='flex items-center gap-3 font-semibold p-2 rounded-[5px] cursor-pointer text-purple-800 border border-purple-800'>
            <p>Back</p>
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <div onClick={toYpForm}  className={`flex items-center gap-3 font-semibold p-2 rounded-[5px] cursor-pointer text-white bg-purple-800`}>
            <p>Create New report</p>
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
        </div> */}
      </div>

      <div className="w-full md:overflow-x-hidden overflow-x-scroll overflow-y-scroll h-[50%] scrollbar-thin">
        <table className='w-full text-left mt-16 border rounded-[5px]'>
          <thead className='bg-gray-200'>
            <tr>
              <th className='px-3 py-2'>S/N</th>
              <th className='px-3 py-2'>Service</th>
              <th className='px-3 py-2'>Staff lead</th>
              <th className='px-3 py-2'>Date</th>
              <th className='px-3 py-2'>Time</th>
              <th className='px-3 py-2'>Compiled by</th>
              <th className='px-3 py-2'>Actions</th>
            </tr>
          </thead>

          <tbody className='font-semibold'>
            {YpCandidates.map(YpCandidate => (
            <tr key={YpCandidate.id} onClick={() => setSelectedYpCandidate(YpCandidate)}>
              <td className='px-3 py-2'>{YpCandidate.id}</td>
              <td className='px-3 py-2'>{YpCandidate.service}</td>
              <td className='px-3 py-2'>{YpCandidate.stafflead}</td>
              <td className='px-3 py-2'>{YpCandidate.date}</td>
              <td className='px-3 py-2'>09:30am</td>
              <td className='px-3 py-2'>{YpCandidate.compiledBy}</td>
              <td className='flex md:gap-5 gap-2 px-3 py-2'>
                <div className='border border-dotted rounded-[5px] cursor-pointer p-2 h-8 w-8 flex items-center justify-center text-red-500'>
                  <FontAwesomeIcon icon={faTrashCan} />
                </div>
                <div className='border border-dotted rounded-[5px] cursor-pointer p-2 h-8 w-8 flex items-center justify-center text-blue-500'>
                  <FontAwesomeIcon icon={faPen} />
                </div>
              </td>
            </tr>))}
          </tbody>
        </table>


        {selectedYpCandidate && (
          <>
            <div className='modal absolute right-0 top-0 p-4 bg-white h-screen overflow-y-scroll flex flex-col gap-4 md:w-2/5 z-50 font-poppins'>
             <div className='fixed right-4' onClick={deselect}>
                <FontAwesomeIcon icon={faXmark} className='md:h-6 h-4' />
              </div>
              
              <figure>
                <img src={studentDemo} alt="student image" className='block h-28 w-28 mx-auto border-8 border-[#2060BE] rounded-[50%] mb-3' />
                <figcaption className='text-center font-bold md:text-2xl text-lg'>{selectedYpCandidate.service}</figcaption>
              </figure>

              <table>
                <thead>
                  <tr><th className='text-center bg-[#622C981C] py-2 w-full' colSpan={2}>Young person's details</th></tr>
                </thead>
                  
                <tfoot>
                  <tr><td colSpan={2} className='text-center bg-[#622C981C] py-2 w-full'>Actions</td></tr>
                </tfoot>

                <tbody className='w-1/2 mx-auto'>
                  <tr className='font-semibold'>
                    <td className='text-gray-400 md:pt-4 pt-2'>staff lead</td>
                    <td className='w-1/2 md:text-start text-right text-wrap md:pt-4 pt-2'>{selectedYpCandidate.stafflead}</td>
                  </tr>
                  <tr className='font-semibold'>
                    <td className='text-gray-400'>Compiled by</td>
                    <td className='w-1/2 md:text-start text-right text-wrap'>{selectedYpCandidate.compiledBy}</td>
                  </tr>
                  <tr className='font-semibold'>
                    <td className='text-gray-400'>Phone</td>
                    <td className='w-1/2 md:text-start text-right text-wrap'>{selectedYpCandidate.contact}</td>
                  </tr>
                  <tr className='font-semibold'>
                    <td className='text-gray-400'>Address</td>
                    <td className='w-1/2 md:text-start text-right text-wrap'>{selectedYpCandidate.address}</td>
                  </tr>
                  <tr className='font-semibold'>
                    <td className='text-gray-400'>Age</td>
                    <td className='w-1/2 md:text-start text-right text-wrap'>{selectedYpCandidate.age}</td>
                  </tr>
                  <tr className='font-semibold'>
                    <td className='text-gray-400 md:pb-4 pb-2'>Gender</td>
                    <td className='w-1/2 md:text-start text-right text-wrap md:pb-4 pb-2'>{selectedYpCandidate.gender}</td>
                  </tr>
                </tbody>
              </table>  

                
              <div className='flex flex-wrap gap-2 md:justify-start justify-end'>
                <div onClick={toYPProfile} className='flex items-center md:gap-3 gap-2 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-400 md:justify-normal justify-between'>
                  <img src={bagIcon} alt="Icon" className='h-[16px]' />
                  <p>Yp profile</p>
                </div>

                <div onClick={toCaseNote} className='flex items-center md:gap-3 gap-2 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-400 md:justify-normal justify-between'>
                  <img src={bagIcon} alt="Icon" className='h-[16px]' />
                  <p>Case note</p>
                </div>

                {/* <div className='flex items-center md:gap-3 gap-2 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-400 md:justify-normal justify-between'>
                  <img src={bagIcon} alt="Icon" className='h-[16px]' />
                  <p>emergency contact</p>
                </div> */}

                <div onClick={toRiskAssesment} className='flex items-center md:gap-3 gap-2 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-400 md:justify-normal justify-between'>
                  <img src={bagIcon} alt="Icon" className='h-[16px]' />
                  <p>Risk assesment plan</p>
                </div>
              </div>
            </div>

            <div className='bg-gray-200 md:block hidden opacity-50 h-full w-full absolute left-0 top-0 z-10 font-poppins' onClick={deselect}></div>
          </>
        )}
      </div>
    </div>
  )
}

export default ComplaintsList
