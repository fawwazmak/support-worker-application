import { useNavigate } from "react-router-dom"

const TimeSheet = () => {
  const navigate = useNavigate();

  const toCompleted = () => {
    navigate("/completedLog")
  }

  const toLiveAvailable = () => {
    navigate("/liveAvailable")
  }

  const toUpcoming = () => {
    navigate("/upcoming")
  }

  const toCreateTimesheet = () => {
    navigate("/createTimesheet")
  }

  return (
    <div className='flex items-center justify-center h-full w-full'>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 lg:gap-5 md:gap-3 gap-2 lg:h-[70%] h-full items-center'>
        <div onClick={toLiveAvailable} className='bg-[#622C98] text-white flex flex-col gap-3 items-center justify-center sm:p-6 p-2 lg:h-[40%] h-full hover:bg-black hover:scale-110 transition-all duration-1000 cursor-pointer group text-center'>
          <svg className='group-hover:scale-x-125 duration-1000 transition-all' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" d="M5.453 4.167a.726.726 0 0 0-1.027-.01A8.23 8.23 0 0 0 2 10a8.23 8.23 0 0 0 2.604 6.015a.725.725 0 0 0 1.01-.025c.316-.316.277-.819-.027-1.11A6.73 6.73 0 0 1 3.5 10c0-1.846.741-3.52 1.943-4.738c.29-.295.32-.785.01-1.095M7.214 5.93a.714.714 0 0 0-1.008-.016A5.73 5.73 0 0 0 4.5 10c0 1.692.73 3.213 1.893 4.265a.713.713 0 0 0 .983-.038c.328-.328.267-.844-.041-1.134A4.24 4.24 0 0 1 6 10c0-1.15.457-2.194 1.2-2.96c.286-.294.333-.793.014-1.111m5.572 0a.714.714 0 0 1 1.008-.016A5.73 5.73 0 0 1 15.5 10c0 1.692-.73 3.213-1.893 4.265a.713.713 0 0 1-.983-.038c-.328-.328-.267-.844.041-1.134A4.24 4.24 0 0 0 14 10c0-1.15-.457-2.194-1.2-2.96c-.286-.294-.333-.793-.014-1.111m1.761-1.762a.726.726 0 0 1 1.027-.01A8.23 8.23 0 0 1 18 10a8.23 8.23 0 0 1-2.604 6.015a.725.725 0 0 1-1.01-.025c-.316-.316-.277-.819.028-1.11A6.73 6.73 0 0 0 16.5 10c0-1.846-.741-3.52-1.943-4.738c-.29-.295-.32-.785-.01-1.095M10 8.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"/></svg>
          <h1>Live available Shift</h1>
        </div>


        <div onClick={toUpcoming} className='bg-[#622C98] text-white flex flex-col gap-3 items-center justify-center sm:p-6 p-2 lg:h-[40%] h-full hover:bg-black hover:scale-110 transition-all duration-1000 cursor-pointer group text-center'>
          <svg className='group-hover:scale-x-125 duration-1000 transition-all' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M2 21v-9h7q0 1.25.875 2.125T12 15t2.125-.875T15 12h7v9zm2-2h16v-5h-3.4q-.625 1.375-1.862 2.188T12 17t-2.738-.812T7.4 14H4zm13.6-8.2l-1.4-1.4l3.55-3.55l1.4 1.4zm-11.2 0L2.85 7.25l1.4-1.4L7.8 9.4zM11 8V3h2v5zM4 19h16z"/></svg>
          <h1>Upcoming confirm shift</h1>
        </div>


        <div onClick={toCreateTimesheet} className='bg-[#622C98] text-white flex flex-col gap-3 items-center justify-center sm:p-6 p-2 lg:h-[40%] h-full hover:bg-black hover:scale-110 transition-all duration-1000 cursor-pointer group text-center'>
          <svg className='group-hover:scale-x-125 duration-1000 transition-all' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 21v-8H3v-2h8V3h2v8h8v2h-8v8z"/></svg>
          <h1>Create shift tracker</h1>
        </div>


        <div onClick={toCompleted} className='bg-[#622C98] text-white flex flex-col gap-3 items-center justify-center sm:p-6 p-2 lg:h-[40%] h-full hover:bg-black hover:scale-110 transition-all duration-1000 cursor-pointer group text-center'>
          <svg className='group-hover:scale-x-125 duration-1000 transition-all' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M1.5 8a6.5 6.5 0 1 1 13 0A.75.75 0 0 0 16 8a8 8 0 1 0-8 8a.75.75 0 0 0 0-1.5A6.5 6.5 0 0 1 1.5 8"/><path fill="currentColor" d="m8.677 12.427l2.896 2.896a.25.25 0 0 0 .427-.177V13h3.25a.75.75 0 0 0 0-1.5H12V9.354a.25.25 0 0 0-.427-.177l-2.896 2.896a.25.25 0 0 0 0 .354M11.28 6.78a.749.749 0 1 0-1.06-1.06L7.25 8.689L5.78 7.22a.749.749 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z"/></svg>
          <h1>Completed Shift</h1>
        </div>
      </div>
    </div>
  )
}

export default TimeSheet
