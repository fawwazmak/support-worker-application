import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faBriefcase, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Homepage = () => {
  return (
    <div className='p-4'>
      <header className='flex sm:justify-between sm:gap-0 gap-5 sm:flex-row flex-col'>
        <div className='flex items-center gap-5'>
          <h1 className='text-2xl font-bold'>Young person's profile</h1>
          <FontAwesomeIcon icon={faFilter} />
        </div>

        <div className='flex items-center gap-3 sm:self-auto self-end bg-slate-200 p-2 rounded-[5px]'>
          <FontAwesomeIcon icon={faBriefcase} />
          <p>Jonathan D</p>
          <FontAwesomeIcon icon={faBriefcase} />
        </div>
      </header>

      <div className='flex gap-3 md:gap-5 font-semibold text-gray-300 my-5'>
        <h6>YP profile</h6>
        <h6>/</h6>
        <h6>Client profiles</h6>
        <h6>Room check</h6>
      </div>

      <hr />


      <div className='flex md:flex-row flex-col md:justify-between md:gap-y-0 gap-y-3 my-3'>
        <input type="search" name="searchProfile" id="searchProfile" className='block w-full md:w-3/5 bg-blue-100 outline-none rounded-3xl p-3' />

        <div className='flex md:gap-5 gap-2 items-center md:self-auto self-end'>
          <div className='flex items-center gap-3 font-semibold p-2 rounded-[5px] text-purple-800 border border-purple-800'>
            <p>Back</p>
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <div className='flex items-center gap-3 font-semibold p-2 rounded-[5px] text-white bg-purple-800'>
            <p>Create New report</p>
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
        </div>
      </div>

      <table className='w-full text-left'>
        <thead>
          <th>S/N</th>
          <th>Service</th>
          <th>Staff lead</th>
          <th>Date</th>
          <th>time</th>
          <th>Compiled by</th>
          <th>Actions</th>
        </thead>

        <tbody className='font-semibold'>
          <tr>
            <td>1</td>
            <td>Adedoyin Aderonke</td>
            <td>Joelinton</td>
            <td>12/04/24</td>
            <td>09:30am</td>
            <td>Oluswna</td>
            <td className='flex md:gap-5 gap-2'>
              <div className='border border-dotted rounded-[5px] p-2 h-8 w-8 flex items-center justify-center text-red-500'><FontAwesomeIcon icon={faTrashCan} /></div>
              <div className='border border-dotted rounded-[5px] p-2 h-8 w-8 flex items-center justify-center text-blue-500'><FontAwesomeIcon icon={faPen} /></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Homepage
