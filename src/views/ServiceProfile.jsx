import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faBriefcase,} from '@fortawesome/free-solid-svg-icons';


const ServiceProfile = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Adedoyin Aderonke", email: "themba@gmail.com", address: "12, beever street Olusoga Houston", contact: "08035567812", date: '12/04/24', gender: "Male", age: "23" },
    { id: 2, name: "Adedoyin Aderonke", email: "themba@gmail.com", address: "12, beever street Olusoga Houston", contact: "08035567812", date: '12/04/24', gender: "Male", age: "23" },
    { id: 3, name: "Adedoyin Aderonke", email: "themba@gmail.com", address: "12, beever street Olusoga Houston", contact: "08035567812", date: '12/04/24', gender: "Male", age: "23" },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);


  const onClickStudent = (student) => {
    setSelectedStudent(student);
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
              <tr key={student.id} className='px-3 whitespace-nowrap md:text-left text-center' onClick={() => onClickStudent(student)}>
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
          <div className='modal absolute right-0 top-0'>
            <figure>
              <img src="" alt="" />
              <figcaption>{selectedStudent.name}</figcaption>
            </figure>

            <div>
              <h2>Young person's details</h2>

              <ul>
                <li>Risk level {}</li>
                <li>Email {selectedStudent.email}</li>
                <li>Phone {selectedStudent.contact}</li>
                <li>Address {selectedStudent.address}</li>
                <li>Age {} Years</li>
                <li>Gender {}</li>
              </ul>

              <h2>Actions</h2>

              <div>
                <div className='flex items-center md:gap-3 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-500 md:justify-normal justify-between'>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <p>Profile</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ServiceProfile
