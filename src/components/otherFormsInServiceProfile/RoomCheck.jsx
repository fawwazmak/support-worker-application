import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import bagIcon from "/bag-icon.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import arrowUp from "/arrow-up.svg";

const RoomCheck = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }
  return (
    <div className="mt-8 h-full overflow-y-scroll scrollbar-thin">
      <p onClick={goBack} className='border-2 border-[#6b21a8] w-fit px-3 rounded animate-pulse text-[#6b21a8] cursor-pointer'>Back</p>

      <h5 className="text-center py-2 font-bold">Room check</h5>

      <form action="" method="post" className="mt-8 w-[80%] mx-auto mb-24">
        <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
          <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
            <h2>Inspection Location</h2>
            <img src={arrowUp} alt="Arrow" />
          </header>

          <div className="flex flex-col gap-4 md:p-5 p-2">
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="service">Service</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="service" id="service" />
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="compiledBy">Compiled by</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="compiledBy" id="compiledBy" />
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="staffLead">Staff lead</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="staffLead" id="staffLead" />
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="type">Type</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="type" id="type" />
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="Date">Date</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="Date" id="Date" />
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="wallsCondition">Walls in good condition</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="wallsCondition" id="wallsCondition">
                <option value="notGood">No</option>
                <option value="good">Yes</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="lightCondition">Lights and switches in good condition
              </label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="lightCondition" id="lightCondition">
                <option value="notGood">No</option>
                <option value="good">Yes</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="curtainsCondition">Curtains and rails in good condition</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="curtainsCondition" id="curtainsCondition">
                <option value="notGood">No</option>
                <option value="good">Yes</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="socketsCondition">Electrical sockets in good condition</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="socketsCondition" id="socketsCondition">
                <option value="notGood">No</option>
                <option value="good">Yes</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="windowsCondition">Windows</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="windowsCondition" id="windowsCondition">
                <option value="notGood">No</option>
                <option value="good">Yes</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="windowLock">Windows locks/restriction in place</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="windowLock" id="windowLock">
                <option value="notGood">No</option>
                <option value="good">Yes</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="fireNotice">Fire notices are posted</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="fireNotice" id="fireNotice">
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="radiatorWorking">Radiators are working with no leaks</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="radiatorWorking" id="radiatorWorking">
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="furnitureCondition">Furniture in good condition</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="furnitureCondition" id="furnitureCondition">
                <option value="notGood">No</option>
                <option value="good">Yes</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="noPestContamination">No sign of pest contamination</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="noPestContamination" id="noPestContamination">
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="floorCovering">Floor coverings in good condition
              </label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="floorCovering" id="floorCovering">
                <option value="notGood">No</option>
                <option value="good">Yes</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="bathroomClean">Bathroom clean and in working order</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="bathroomClean" id="bathroomClean">
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="kitchenClean">Kitchen area clean and tidy</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="kitchenClean" id="kitchenClean">
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="overall">Overall cleanliness and hygeine
              </label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="overall" id="overall">
                <option value="notGood">No</option>
                <option value="good">Yes</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="binsClean">Bins clean and tidy</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="binsClean" id="binsClean">
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="beddingsClean">Beddings clean</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="beddingsClean" id="beddingsClean">
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="smokeAlarmWorking">Smoke alarms tested and working</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="smokeAlarmWorking" id="smokeAlarmWorking">
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="evidence">Evidence of battery/charger used
              </label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="evidence" id="evidence">
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="eBike">No e-bike or e-scooters charged</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="eBike" id="eBike">
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="notes">Notes</label>
              <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="notes" id="notes" placeholder='Notes'></textarea>
            </div>
          </div>
        </div>

        <button className="bg-[#622c98] rounded-md text-white block py-2 px-5 mt-4">Save</button>
      </form>
    </div>
  )
}

export default RoomCheck
