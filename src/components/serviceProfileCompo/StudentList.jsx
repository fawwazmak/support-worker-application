import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import filterIcon from "/filter-icon.svg";
import bagIcon from "/bag-icon.svg";
import bagIconWhite from "/bag-icon-white.svg";
import bagIconBlack from "/bag-icon-black.svg";
import studentDemo from "/student-demo-image.jpg"

const StudentList = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Adedoyin Aderonke", email: "themba@gmail.com", address: "12, Beever street Olusoga Houston", contact: "08035567812", date: '12/04/24', gender: "Female", age: "24", riskLevel: "low", image: studentDemo, },
    { id: 2, name: "Olorunsogo Olawale", email: "wale@gmail.com", address: "2, Coker street Olusoga Houston", contact: "08035567812", date: '15/04/24', gender: "Male", age: "25", riskLevel: "low", image: studentDemo, },
    { id: 3, name: "Mafoluku Arike", email: "mafoluku@gmail.com", address: "30, Cole street Olusoga Houston", contact: "08035567812", date: '11/04/24', gender: "Female", age: "23", riskLevel: "low", image: studentDemo, },
    { id: 4, name: "Afolabi Ayomide", email: "mide@gmail.com", address: "5, Day street Olusoga Houston", contact: "08035567812", date: '15/04/24', gender: "Male", age: "22", riskLevel: "medium", image: studentDemo, },
    { id: 5, name: "Olasunkami Ishola", email: "olashola@gmail.com", address: "22, Smith street Olusoga Houston", contact: "08035567812", date: '12/04/24', gender: "Male", age: "27", riskLevel: "low", image: studentDemo, },
    { id: 6, name: "Sanni Ajoke", email: "ajoke@gmail.com", address: "4, John street Olusoga Houston", contact: "08035567812", date: '14/04/24', gender: "Female", age: "23", riskLevel: "low", image: studentDemo, },
    { id: 7, name: "Idowu Labake", email: "idowulabake@gmail.com", address: "9, Elegant street Olusoga Houston", contact: "08035567812", date: '11/04/24', gender: "Female", age: "24", riskLevel: "low", image: studentDemo, },
    { id: 8, name: "Balogun Adeshina", email: "shina@gmail.com", address: "51, Rainbow street Olusoga Houston", contact: "08035567812", date: '12/04/24', gender: "Male", age: "26", riskLevel: "low", image: studentDemo, },
    { id: 9, name: "Olateju Motunrayo", email: "olarayo@gmail.com", address: "33, Martins street Olusoga Houston", contact: "08035567812", date: '12/04/24', gender: "Female", age: "20", riskLevel: "high", image: studentDemo, },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);


  const clickedStudent = (student) => {
    setSelectedStudent(student);
    console.log(student.image)
  }

  const deselect = () => {
    setSelectedStudent(null);
  }


  return (
    <>
      <div className='px-4 md:px-0 font-poppins'>
        <header className='flex sm:justify-between sm:gap-0 gap-5 sm:flex-row flex-col my-4'>
          <div className='flex items-center gap-5'>
            <h1 className='text-2xl font-bold'>Service profile</h1>
            <img src={filterIcon} alt="Filter Icon" />
          </div>

          <div className='flex items-center gap-3 cursor-pointer sm:self-auto self-end bg-[#F9F6F6] p-2 rounded-[5px]'>
            <img src={bagIconBlack} alt="Icon" className='' />
            <p>Jonathan D</p>
            <img src={bagIconBlack} alt="Icon" className='' />
          </div>
        </header>

        <hr />

        <div className='flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-4 sm:justify-between my-3'>
          <div className='flex items-center gap-x-5 md:w-[50%] w-full justify-between'>
            <input
              type="search"
              name="searchProfile"
              id="searchProfile"
              placeholder='Search Profile'
              className='block bg-blue-100 outline-none rounded-3xl p-3 w-full'
            />
            
            <img src={filterIcon} alt="filter icon" className='border p-2 rounded' />
          </div>

          <div className='flex md:flex-row flex-col gap-4'>
            <button className='flex gap-2 items-center text-[14px] font-medium p-[8px] rounded-[8px] border border-[#622C98] text-[#622C98]'><p>Back</p> <img src={bagIcon} alt="Icon" className='h-[16px]' /> </button>

            <button className='flex gap-2 items-center text-[14px] font-medium p-[8px] rounded-[8px] bg-[#622C98] text-white'>
              <p>Create New Profile</p>
              <img src={bagIconWhite} alt="Icon" className='' />
            </button>
          </div>
        </div>
      </div>

      {/* The service profiles  */}
      {/* <div className='flex md:flex-row flex-wrap flex-col md:gap-5 gap-2 md:items-center px-4 md:px-0 font-poppins'>
        <div className='flex items-center md:gap-3 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-500 md:justify-normal justify-between'>
          <p>Service profile</p>
          <img src={bagIcon} alt="Icon" className='h-[16px]' />
        </div>
        
        <div className='flex items-center md:gap-3 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-500 md:justify-normal justify-between'>
          <p>Service profile</p>
          <img src={bagIcon} alt="Icon" className='h-[16px]' />
        </div>


        <div className='flex items-center md:gap-3 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-500 md:justify-normal justify-between'>
          <p>Service profile</p>
          <img src={bagIcon} alt="Icon" className='h-[16px]' />
        </div>

        <div className='flex items-center md:gap-3 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-500 md:justify-normal justify-between'>
          <p>Service profile</p>
          <img src={bagIcon} alt="Icon" className='h-[16px]' />
        </div>
      </div>  */}
        


      <div className="w-full lg:overflow-x-hidden overflow-x-scroll px-4 md:px-0 font-poppins">
        <table className='border-separate border-spacing-2 md:border-spacing-1 w-full mt-16 border rounded-[5px]'>
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
              <tr key={student.id} className='px-3 whitespace-nowrap text-center cursor-pointer' onClick={() => clickedStudent(student)}>
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
            <div className='modal absolute right-0 top-0 p-4 bg-white h-screen overflow-y-scroll flex flex-col gap-4 md:w-2/5 z-50 font-poppins'>
              <div className='absolute right-4' onClick={deselect}>
                <FontAwesomeIcon icon={faXmark} className='md:h-6 h-4' />
              </div>
              <figure>
                <img src={selectedStudent.image} alt="student image" className='block h-28 w-28 mx-auto border-8 border-[#2060BE] rounded-[50%] mb-3' />
                <figcaption className='text-center font-bold md:text-2xl text-lg'>{selectedStudent.name}</figcaption>
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

                
              <div className='flex flex-wrap gap-2 md:justify-start justify-end'>
                <div className='flex items-center md:gap-3 gap-2 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-400 md:justify-normal justify-between'>
                  <img src={bagIcon} alt="Icon" className='h-[16px]' />
                  <p>profile</p>
                </div>

                <div className='flex items-center md:gap-3 gap-2 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-400 md:justify-normal justify-between'>
                  <img src={bagIcon} alt="Icon" className='h-[16px]' />
                  <p>incident report</p>
                </div>

                <div className='flex items-center md:gap-3 gap-2 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-400 md:justify-normal justify-between'>
                  <img src={bagIcon} alt="Icon" className='h-[16px]' />
                  <p>property check</p>
                </div>

                <div className='flex items-center md:gap-3 gap-2 font-semibold p-2 rounded-[5px] cursor-pointer text-gray-500 border-2 border-gray-400 md:justify-normal justify-between'>
                  <img src={bagIcon} alt="Icon" className='h-[16px]' />
                  <p>room check</p>
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

            <div className='bg-gray-200 md:block hidden opacity-50 h-full w-full absolute left-0 top-0 z-10 font-poppins' onClick={deselect}></div>
          </>
        )}
      </div>
    </>
  )
}

export default StudentList
