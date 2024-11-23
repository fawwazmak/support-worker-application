import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrowUp from "/arrow-up.svg"

const CaseNote = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }
  return (
    <div className="mt-8 h-full overflow-y-scroll scrollbar-thin relative">
          <h5 className="text-center py-2 font-bold absolute top-0 w-full z-30 bg-[#622c98] text-white">Case Notes</h5>

          <p onClick={goBack} className='border-2 border-[#6b21a8] w-fit px-3 rounded animate-pulse text-[#6b21a8] cursor-pointer mt-12 mx-4'>Back</p>


            <form action="" method="post" className="mt-8 w-[80%] mx-auto mb-24">
            <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                <h2>Case Notes</h2>
                <img src={arrowUp} alt="Arrow" />
                </header>

                <div className="flex flex-col gap-4 md:p-5 p-2">
                <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                    <label className='w-full' htmlFor="startDate">Start date</label>
                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="startDate" id="startDate" />
                </div>

                <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                    <label className='w-full' htmlFor="time">Time</label>
                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="time" id="time" />
                </div>

                <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                    <label className='w-full' htmlFor="endDate">End date</label>
                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="endDate" id="endDate" />
                </div>

                <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                    <label className='w-full' htmlFor="session">Session</label>
                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="session" id="session">
                    <option value="needed">Needed</option>
                    <option value="crimeFinancial">Crime financial / money management</option>
                    <option value="general">General</option>
                    </select>
                </div>

                <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                    <label className='w-full' htmlFor="communicationMethod">Communication method</label>
                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="communicationMethod" id="communicationMethod">
                    <option value="virtualMeeting">Virtual meeting</option>
                    <option value="inPerson">In-person</option>
                    <option value="groupMeeting">Group meeting</option>
                    <option value="phoneCall">Phone call</option>
                    <option value="videoCall">Video call</option>
                    <option value="email">Email</option>
                    <option value="textMessage">Text message</option>
                    <option value="instantMessage">Instant message</option>
                    <option value="socialMedia">Social media</option>
                    <option value="other">Other</option>
                    </select>
                </div>

                <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                    <label className='w-full' htmlFor="venueOfSession">Communication method</label>
                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="venueOfSession" id="venueOfSession">
                    <option value="keynoteSession">Keynote session</option>
                    <option value="lectureAndSupportPlan">Lecture and support plan</option>
                    <option value="workshop">Workshop</option>
                    <option value="groupCoaching">Group coaching</option>
                    <option value="oneOnOneCoaching">One-on-one coaching</option>
                    <option value="mentorship">Mentorship</option>
                    <option value="networkingEvent">Networking event</option>
                    </select>
                </div>

                <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                    <label className='w-full' htmlFor="notes">Notes</label>
                    <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="notes" id="notes" placeholder='Any additional note for the session'></textarea>
                    </div>
                </div>
            </div>

            <button className="bg-[#622c98] rounded-md text-white block py-2 px-5 mt-4">Save</button>
            </form>
              
        </div>
  )
}

export default CaseNote
