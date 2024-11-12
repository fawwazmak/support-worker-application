import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Services = () => {
  const location = useLocation();
  const { selectedStudent } = location.state || {};
  const [currentTab, setCurrentTab] = useState("service")
  const [showAll, setShowAll] = useState(false);
  const rowsToDisplay = showAll ? selectedStudent.youngPersons : selectedStudent.youngPersons.slice(0, 5);

  return (
    <div>
      <header className='text-[#6b21a8] shadow-lg mb-8'>
        <ul className='flex flex-wrap gap-8 pt-4 px-8 text-xl'>
          <li onClick={() => {setCurrentTab("service")}} className='cursor-pointer'>
            <p>{selectedStudent.name}</p>
            <div className={`${currentTab === "service" ? "w-full h-[2px] bg-[#6b21a8] mt-2" : "hidden"}`}></div>
          </li>

          <li onClick={() => {setCurrentTab("lorem")}} className='cursor-pointer'>
            <p>Element</p>
            <div className={`${currentTab === "lorem" ? "w-full h-[2px] bg-[#6b21a8] mt-2" : "hidden"}`}></div>
          </li>

          <li onClick={() => {setCurrentTab("correspondence")}} className='cursor-pointer'>
            <p>Correspondeny</p>
            <div className={`${currentTab === "correspondence" ? "w-full h-[2px] bg-[#6b21a8] mt-2" : "hidden"}`}></div>
          </li>
        </ul>
      </header>

      {(currentTab === "service") && (
        <>
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
            {rowsToDisplay.length > 0 ? (
            rowsToDisplay.map(yp => (
              <tr key={yp.id} className="px-3 whitespace-nowrap text-center">
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
            <button className='w-full text-center p-2 text-[#6b21a8] text-lg animate-pulse' onClick={() => setShowAll(!showAll)}>
              {showAll ? 'View Less' : 'View All'}
            </button>
          )}
        </>
      )}

      {(currentTab === "lorem") && (
        <>
          <p>Lorem</p>
        </>
      )}

      {(currentTab === "correspondence") && (
        <>
          <p>Correspondence</p>
        </>
      )}
    </div>
  )
}

export default Services
