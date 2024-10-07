import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faBriefcase,faXmark} from '@fortawesome/free-solid-svg-icons';


const ServiceProfile = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Adedoyin Aderonke", email: "themba@gmail.com", address: "12, beever street Olusoga Houston", contact: "08035567812", date: '12/04/24', gender: "Male", age: "23", riskLevel: "low", },
    { id: 2, name: "Adedoyin Aderonke", email: "themba@gmail.com", address: "12, beever street Olusoga Houston", contact: "08035567812", date: '12/04/24', gender: "Male", age: "23", riskLevel: "low", },
    { id: 3, name: "Adedoyin Aderonke", email: "themba@gmail.com", address: "12, beever street Olusoga Houston", contact: "08035567812", date: '12/04/24', gender: "Male", age: "23", riskLevel: "low", },
    { id: 4, name: "Adedoyin Aderonke", email: "themba@gmail.com", address: "12, beever street Olusoga Houston", contact: "08035567812", date: '12/04/24', gender: "Male", age: "23", riskLevel: "low", },
    { id: 5, name: "Adedoyin Aderonke", email: "themba@gmail.com", address: "12, beever street Olusoga Houston", contact: "08035567812", date: '12/04/24', gender: "Male", age: "23", riskLevel: "low", },
    { id: 6, name: "Adedoyin Aderonke", email: "themba@gmail.com", address: "12, beever street Olusoga Houston", contact: "08035567812", date: '12/04/24', gender: "Male", age: "23", riskLevel: "low", },
    { id: 7, name: "Adedoyin Aderonke", email: "themba@gmail.com", address: "12, beever street Olusoga Houston", contact: "08035567812", date: '12/04/24', gender: "Male", age: "23", riskLevel: "low", },
    { id: 8, name: "Adedoyin Aderonke", email: "themba@gmail.com", address: "12, beever street Olusoga Houston", contact: "08035567812", date: '12/04/24', gender: "Male", age: "23", riskLevel: "low", },
    { id: 9, name: "Adedoyin Aderonke", email: "themba@gmail.com", address: "12, beever street Olusoga Houston", contact: "08035567812", date: '12/04/24', gender: "Male", age: "23", riskLevel: "low", },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);


  const clickedStudent = (student) => {
    setSelectedStudent(student);
  }

  const deselect = () => {
    setSelectedStudent(null);
    console.log("Alright")
  }

  return (
    <div className=' px-4 md:px-0'>
      <header className='flex sm:justify-between sm:gap-0 gap-5 sm:flex-row flex-col my-4'>
        <div className='flex items-center gap-5'>
          <h1 className='text-2xl font-bold'>Young person's profile</h1>
          <FontAwesomeIcon icon={faFilter} />
        </div>

        <div className='flex items-center gap-3 cursor-pointer sm:self-auto self-end bg-slate-200 p-2 rounded-[5px]'>
          <FontAwesomeIcon icon={faBriefcase} />
          <p>Jonathan D</p>
          <FontAwesomeIcon icon={faBriefcase} />
        </div>
      </header>

      <hr />


      <div className='flex flex-col md:justify-between md:gap-y-8 gap-y-3 my-3'>
        <div className='flex items-center gap-x-5'>
          <input
            type="search"
            name="searchProfile"
            id="searchProfile"
            placeholder='Search Profile'
            className='block w-full md:w-3/5 bg-blue-100 outline-none rounded-3xl p-3'
          />
          
          <FontAwesomeIcon icon={faFilter} className='md:h-8 h-6 md:w-8'  />
        </div>

        <div className='flex md:flex-row flex-col md:gap-5 gap-2 md:items-center'>
          <div className='flex items-center md:gap-3 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-500 md:justify-normal justify-between'>
            <p>Service profile</p>
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          
          <div className='flex items-center md:gap-3 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-500 md:justify-normal justify-between'>
            <p>Service profile</p>
            <FontAwesomeIcon icon={faBriefcase} />
          </div>


          <div className='flex items-center md:gap-3 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-500 md:justify-normal justify-between'>
            <p>Service profile</p>
            <FontAwesomeIcon icon={faBriefcase} />
          </div>

          <div className='flex items-center md:gap-3 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-500 md:justify-normal justify-between'>
            <p>Service profile</p>
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
        </div>
      </div>



      <div className="w-full md:overflow-hidden overflow-x-scroll">
        <table className='w-full text-left mt-16 border rounded-[5px]'>
          <thead className='bg-gray-200'>
            <tr className='text-center'>
              <th className='px-3 py-2'>S/N</th>
              <th className='px-3 py-2'>Name</th>
              <th className='px-3 py-2'>Address</th>
              <th className='px-3 py-2'>Date</th>
              <th className='px-3 py-2'>Gender</th>
              <th className='px-3 py-2'>Age</th>
            </tr>
          </thead>

          <tbody className='font-medium'>
            {students.map(student => (
              <tr key={student.id} className='px-3 whitespace-nowrap md:text-left text-center' onClick={() => clickedStudent(student)}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.address}</td>
                <td>{student.date}</td>
                <td>{student.gender}</td>
                <td>{student.age}</td>
              </tr>
            ))}
          </tbody>
        </table>


        {selectedStudent && (
          <>
            <div className='modal absolute right-0 top-0 p-4 bg-white h-full flex flex-col gap-4 md:w-2/5 z-20'>
              <div className='absolute right-4' onClick={deselect}>
                <FontAwesomeIcon icon={faXmark} className='md:h-6 h-4' />
              </div>
              <figure>
                <img src="" alt="" />
                <figcaption className='text-center font-bold md:text-2xl text-lg'>{selectedStudent.name}</figcaption>
              </figure>

              <table>
                <thead>
                  <tr><th className='text-center bg-purple-300 py-2 w-full' colSpan={2}>Young person's details</th></tr>
                </thead>  
                <tfoot>
                  <tr><td colSpan={2} className='text-center bg-purple-300 py-2 w-full'>Actions</td></tr>
                </tfoot>

                <tbody className='w-1/2 mx-auto'>
                  <tr className='font-semibold'>
                    <td className='text-gray-400'>Risk level</td>
                    <td className='w-1/2'>{selectedStudent.riskLevel}</td>
                  </tr>
                  <tr className='font-semibold'>
                    <td className='text-gray-400'>Email</td>
                    <td className='w-1/2'>{selectedStudent.email}</td>
                  </tr>
                  <tr className='font-semibold'>
                    <td className='text-gray-400'>Phone</td>
                    <td className='w-1/2'>{selectedStudent.contact}</td>
                  </tr>
                  <tr className='font-semibold'>
                    <td className='text-gray-400'>Address</td>
                    <td className='w-1/2'>{selectedStudent.address}</td>
                  </tr>
                  <tr className='font-semibold'>
                    <td className='text-gray-400'>Age</td>
                    <td className='w-1/2'>{selectedStudent.age}</td>
                  </tr>
                  <tr className='font-semibold'>
                    <td className='text-gray-400'>Gender</td>
                    <td className='w-1/2'>{selectedStudent.gender}</td>
                  </tr>
                </tbody>
              </table>  

                
              <div className='flex flex-wrap gap-2'>
                <div className='flex items-center md:gap-3 gap-2 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-400 md:justify-normal justify-between'>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <p>profile</p>
                </div>

                <div className='flex items-center md:gap-3 gap-2 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-400 md:justify-normal justify-between'>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <p>incident report</p>
                </div>

                <div className='flex items-center md:gap-3 gap-2 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-400 md:justify-normal justify-between'>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <p>property check</p>
                </div>

                <div className='flex items-center md:gap-3 gap-2 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-400 md:justify-normal justify-between'>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <p>room check</p>
                </div>

                <div className='flex items-center md:gap-3 gap-2 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-400 md:justify-normal justify-between'>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <p>emergency contact</p>
                </div>

                <div className='flex items-center md:gap-3 gap-2 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-400 md:justify-normal justify-between'>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <p>Risk assesment plan</p>
                </div>
              </div>
            </div>

            <div className='bg-gray-200 md:block hidden opacity-50 h-full w-full absolute left-0 top-0 z-10' onClick={deselect}></div>
          </>
        )}
      </div>
    </div>
  )
}

export default ServiceProfile
