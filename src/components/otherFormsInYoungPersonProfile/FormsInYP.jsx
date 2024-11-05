import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import arrowUp from "/arrow-up.svg"


const FormsInYP = () => {
  return (
    <div className="h-screen overflow-hidden">
      <header className="flex flex-wrap gap-4">
        <button className='block p-2 bg-[#f0f0f0] md:rounded-md rounded-sm hover:bg-[#6b21a8] hover:text-white'>Complaints</button>
        <button className='block p-2 bg-[#f0f0f0] md:rounded-md rounded-sm hover:bg-[#6b21a8] hover:text-white'>Risk assesment</button>    
      </header>

      {/* Complaints report  */}
      <div className="mt-8 h-full overflow-y-scroll scrollbar-thin">
        <h5 className="text-center py-2 font-bold">Complaints</h5>

        <form action="" method="post" className="mt-8 w-[80%] mx-auto mb-24">
            <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                    <h2>Complaints</h2>
                    <img src={arrowUp} alt="Arrow" />
                </header>

                <div className="flex flex-col gap-4 md:p-5 p-2">
                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="serviceName">Service name</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="serviceName" id="serviceName" />
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="dateOfComlaint">Date of complaint</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="dateOfComlaint" id="dateOfComlaint" />
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="complaintsCategory">Category</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="complaintsCategory" id="complaintsCategory">
                            <option value="antiSocial">Anti social</option>
                            <option value="drugs">Drugs</option>
                            <option value="harassment">Harassment</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="from">From</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="from" id="from">
                            <option value="YP">YP</option>
                            <option value="neighbor">Neighbor</option>
                            <option value="externalAgency">External Agency</option>
                            <option value="visitor">Visitor</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="reasonForComplaint">Reason (state reason for complaint)</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="reasonForComplaint" id="reasonForComplaint">
                            <option value="contractor">Contractor</option>
                            <option value="YP">YP</option>
                            <option value="serviceStaff">Servcie staff</option>
                            <option value="other">Others</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="complaintsDetails">Complaints details</label>
                        <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="complaintsDetails" id="complaintsDetails" placeholder='Commentary'></textarea>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                    <h2>Phase 1</h2>
                    <img src={arrowUp} alt="Arrow" />
                </header>

                <div className="flex flex-col gap-4 md:p-5 p-2">
                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="acknowledgeDate">Acknowledge date</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="acknowledgeDate" id="acknowledgeDate" />
                    </div>

                    
                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="complaintsResolved">Complaints resolved</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="complaintsResolved" id="complaintsResolved">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="resolvalDate">Date of resolval</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="resolvalDate" id="resolvalDate" />
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="complaintsResolved">Complaints satisfied</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="complaintsResolved" id="complaintsResolved">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="complaintsDetails">Managers comments</label>
                        <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="complaintsDetails" id="complaintsDetails" placeholder='Commentary'></textarea>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                <h2>Phase 2</h2>
                <img src={arrowUp} alt="Arrow" />
                </header>

                <div className="flex flex-col gap-4 md:p-5 p-2">
                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="escalationDate">Escalation date</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="escalationDate" id="escalationDate" />
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="escalationManager">Escalation manager</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="escalationManager" id="escalationManager" />
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="complaintsResolvedTwo">Complaints resolved 2</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="complaintsResolvedTwo" id="complaintsResolvedTwo">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                        </select>
                    </div>

                    {/* reasont */}
                </div>
            </div>

          <button className="bg-[#622c98] rounded-md text-white block py-2 px-5 mt-4">Save</button>
        </form>
      </div>

      {/* Risk assesment */}
      <div className="mt-8 h-full overflow-y-scroll scrollbar-thin hidden">
        <h5 className="text-center py-2 font-bold">Prevoid Management</h5>

        <form action="" method="post" className="mt-8 w-[80%] mx-auto mb-24">
          <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
            <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
              <h2>Pre void management/check list</h2>
              <img src={arrowUp} alt="Arrow" />
            </header>

            <div className="flex flex-col gap-4 md:p-5 p-2">
              {/* Service  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="service">Service</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="service" id="service" />
              </div>

              {/* Room  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="room">Room</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="room" id="room" />
              </div>

              {/* intended void date  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="voiddate">Intended void date</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="voiddate" id="voiddate" />
              </div>

              {/* Starter pack available */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="starterPack">Starter pack available</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="starterPack" id="starterPack">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>              

              {/* void tips  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="voidTips">Void tips</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="voidTips" id="voidTips" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
            <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
              <h2>Furniture Lists</h2>
              <img src={arrowUp} alt="Arrow" />
            </header>

            <div className="flex flex-col gap-4 md:p-5 p-2">
              {/* Beds  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="beds">Beds</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="beds" id="beds">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="notApplicable">Not Applicable</option>
                </select>
              </div>

              {/* Mattress  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="mattress">Mattress</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="mattress" id="mattress">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="notApplicable">Not Applicable</option>
                </select>
              </div>

              {/* Side table  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="sideTable">Side table</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="sideTable" id="sideTable">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="notApplicable">Not Applicable</option>
                </select>
              </div>

              {/* Wardrobe */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="wardrobe">Wardrobe</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="wardrobe" id="wardrobe">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="notApplicable">Not Applicable</option>
                </select>
              </div>

              {/* Desk and chair  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="deskAndChair">Desk and Chair</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="deskAndChair" id="deskAndChair">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="notApplicable">Not Applicable</option>
                </select>
              </div>

              {/* Curtains  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="curtains">Curtains</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="curtains" id="curtains">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="notApplicable">Not Applicable</option>
                </select>
              </div>

              {/* Lamps  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="lamps">Lamps</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="lamps" id="lamps">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="notApplicable">Not Applicable</option>
                </select>
              </div>

              {/* Keys and spare  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="keysAndSpare">Keys and spare</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="keysAndSpare" id="keysAndSpare">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="notApplicable">Not Applicable</option>
                </select>
              </div>

              {/* Comments  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="comments">Comments</label>
                <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="comments" id="comments" placeholder='Commentary'></textarea>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
            <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
              <h2>Cleaning required</h2>
              <img src={arrowUp} alt="Arrow" />
            </header>

            <div className="flex flex-col gap-4 md:p-5 p-2">
              {/* Cleaning needed  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="cleaningNeeded">Cleaning needed</label>
                <input placeholder="state type of cleaning required and where stains are present" className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="cleaningNeeded" id="cleaningNeeded" />
              </div>

              {/* Deep cleaning needed?  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="deepCleaningNeeded">Deep cleaning needed?</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="deepCleaningNeeded" id="deepCleaningNeeded">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="notApplicable">Not Applicable</option>
                </select>
              </div>

              {/* Bedroom  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="bedroom">Bedroom</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="bedroom" id="bedroom">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="notApplicable">Not Applicable</option>
                </select>
              </div>

              {/* Bathroom  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="bathroom">Bathroom</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="bathroom" id="bathroom">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="notApplicable">Not Applicable</option>
                </select>
              </div>

              {/* Kitchen  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="kitchen">Kitchen</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="kitchen" id="kitchen">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="notApplicable">Not Applicable</option>
                </select>
              </div>

              {/* Others  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="others">Others</label>
                <input placeholder="state other list needed to be checked like (gas, electric and waste...)" className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="others" id="others" />
              </div>
              
              {/* System info  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="systemInfo">System info</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="systemInfo" id="systemInfo" />
              </div>

              {/* White goods  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="whiteGoods">White goods</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="whiteGoods" id="whiteGoods">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="notApplicable">Not Applicable</option>
                </select>
              </div>

              {/* Flooring  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="flooring">Flooring</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="flooring" id="flooring">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="notApplicable">Not Applicable</option>
                </select>
              </div>

              {/* outside areas */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="outsideAreas">Outside areas</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="outsideAreas" id="outsideAreas">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="notApplicable">Not Applicable</option>
                </select>
              </div>

              {/* Comments  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="comments">Comments</label>
                <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="comments" id="comments" placeholder='Commentary'></textarea>
              </div>

              {/* Created by */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="createdBy">Created by</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="createdBy" id="createdBy" />
              </div>

              {/* Last modified by */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="lastModifiedBy">Last modified by</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="lastModifiedBy" id="lastModifiedBy" />
              </div>
            </div>
          </div>

          <button className="bg-[#622c98] rounded-md text-white block py-2 px-5 mt-4">Save</button>
        </form>
      </div>
    </div>
  )
}

export default FormsInYP
