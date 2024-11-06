import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import filterIcon from "/filter-icon.svg";
import bagIcon from "/bag-icon.svg";
import bagIconWhite from "/bag-icon-white.svg";
import bagIconBlack from "/bag-icon-black.svg";


const ServiceProfile = () => {
  const navigate = useNavigate();
  const toProfile = () => { 
    navigate("/serviceProfile/profile");
  }
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
    <div className=' px-4 md:px-0 font-poppins'>
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


      {/* <div className='flex flex-col md:justify-between md:gap-y-8 gap-y-3 my-3'> */}
        <div className='flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-4 sm:justify-between my-3'>
          <div className='flex items-center gap-x-5 md:w-[50%] w-full justify-between'>
            <input type="search" name="searchProfile" id="searchProfile" placeholder='Search Profile' className='block bg-blue-100 outline-none rounded-3xl p-3 w-full' />
            
            <img src={filterIcon} alt="filter icon" className='border p-2 rounded' />
          </div>

          <div className='flex md:flex-row flex-col gap-4'>
            <button className='flex gap-2 items-center text-[14px] font-medium p-[8px] rounded-[8px] border border-[#622C98] text-[#622C98]'><p>Back</p> <img src={bagIcon} alt="Icon" className='h-[16px]' /> </button>

            <button onClick={toProfile} className='flex gap-2 items-center text-[14px] font-medium p-[8px] rounded-[8px] bg-[#622C98] text-white'>
              <p>Create New Profile</p>
              <img src={bagIconWhite} alt="Icon" className='' />
            </button>
          </div>
        </div>
    </div>
  )
}

export default ServiceProfile
