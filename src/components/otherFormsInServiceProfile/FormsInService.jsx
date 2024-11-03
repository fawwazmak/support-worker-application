import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import filterIcon from "/filter-icon.svg";
import bagIcon from "/bag-icon.svg";
import bagIconWhite from "/bag-icon-white.svg";
import bagIconBlack from "/bag-icon-black.svg";
import arrowUp from "/arrow-up.svg"

const FormsInService = () => {
  return (
    <div className="h-screen overflow-hidden">
      <header className="flex flex-wrap gap-4">
        <button className='block p-2 bg-[#f0f0f0] md:rounded-md rounded-sm hover:bg-[#6b21a8] hover:text-white'>Incident report</button>
        <button className='block p-2 bg-[#f0f0f0] md:rounded-md rounded-sm hover:bg-[#6b21a8] hover:text-white'>Previod management</button>
        <button className='block p-2 bg-[#f0f0f0] md:rounded-md rounded-sm hover:bg-[#6b21a8] hover:text-white'>Maintenence</button>
        <button className='block p-2 bg-[#f0f0f0] md:rounded-md rounded-sm hover:bg-[#6b21a8] hover:text-white'>Room checks</button>            
      </header>

      {/* Incident report  */}
      <div className="mt-8 h-full overflow-y-scroll scrollbar-thin hidden">
        <h5 className="text-center py-2 font-bold">Incident Report</h5>

        <form action="" method="post" className="mt-8 w-[80%] mx-auto mb-24">
          <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
            <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
              <h2>Worker complete incident details</h2>
              <img src={arrowUp} alt="Arrow" />
            </header>

            <div className="flex flex-col gap-4 md:p-5 p-2">
              {/* Police involved  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="policeInvolved">Police involved</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="policeInvolved" id="policeInvolved">
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
              </div>

              {/* Fire brigade involved  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="fireBrigade">Fire brigade invloved</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="fireBrigade" id="fireBrigade">
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
              </div>

              {/* Ambulance involved  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="ambulanceInvolved">Ambulance involved</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="ambulanceInvolved" id="ambulanceInvolved">
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
              </div>

              {/* Details of emergency service involved */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="detailsEmergency">Details of emergency service involved</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="detailsEmergency" id="detailsEmergency" />
              </div>

              {/* Involved external person  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="externalPerson">Involved external person?</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="externalPerson" id="externalPerson">
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
              </div>

              {/* Name(s) of external person(s) involved */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="externalPersonName">Name(s) of external person(s) involved</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="externalPersonName" id="externalPersonName" />
              </div>

              {/* Social service involved */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="socialService">Social service involved?</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="socialService" id="socialService">
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
              </div>

              {/* CMHT involved */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="cmht">CMHT involved?</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="cmht" id="cmht">
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
              </div>

              {/* Other external services involved  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="otherExternalService">Other external services involved</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="otherExternalService" id="otherExternalService" />
              </div>

              {/* Name(s) of other external service(s) involved  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="otherExternalServiceName">Name(s) of other external service(s) involved</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="otherExternalServiceName" id="otherExternalServiceName" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
            <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
              <h2>Worker complete external services</h2>
              <img src={arrowUp} alt="Arrow" />
            </header>

            <div className="flex flex-col gap-4 md:p-5 p-2">
              {/* Date of incident  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="dateOfIncident">Date of incident</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="dateOfIncident" id="dateOfIncident" />
              </div>

              {/* time of incident  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="timeOfIncident">Time of incident</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="timeOfIncident" id="timeOfIncident" />
              </div>

              {/* Is this incident serious  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="incidentSerious">Is this incident serious?</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="incidentSerious" id="incidentSerious">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              {/* Cause of concern  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="causeOfConcern">Your cause of concern about YP/Yp's child</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="causeOfConcern" id="causeOfConcern" />
              </div>

              {/* What is the sub-category of your cause of concern */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="subCauseOfConcern">What is the sub-category of your cause of concern</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="subCauseOfConcern" id="subCauseOfConcern" />
              </div>

              {/* Want to monitor concern  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="monitorConcern">Want to monitor concern?</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="monitorConcern" id="monitorConcern">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              {/* Is YP in significant harm  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="inSignificantHarm">Is YP in significant harm</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="inSignificantHarm" id="inSignificantHarm">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              {/* Do you want to take further actions  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="takeFurtherActions">Do you want to take further actions?</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="takeFurtherActions" id="takeFurtherActions">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              {/* Is YP aware that you will contact external agancies */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="awarenessOfYPOnExternalAgencies">Is YP aware that you will contact external agancies</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="awarenessOfYPOnExternalAgencies" id="awarenessOfYPOnExternalAgencies">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              {/* if no  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="briefOutline">If no, enter brief outline otherwise write N/A</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="briefOutline" id="briefOutline" />
              </div>

              {/* Allegations  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="allegation">Allegations/suspicions of substance abuse</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="allegation" id="allegation" />
              </div>

              {/* Witness  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="witnessToBeTakenDown">Witness(es) statements need to be taken down?</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="witnessToBeTakenDown" id="witnessToBeTakenDown">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              {/* Has a manager been informed? */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="managerInformed">Has a manager been informed?</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="managerInformed" id="managerInformed">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              {/* has a MARAC referral been made */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="MARAcReferralMade">has a MARAC referral been made?</label>
                <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="MARAcReferralMade" id="MARAcReferralMade">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              {/* I.A of MARAC referral */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="MARAcReferralTwo">I.A of MARAC referral</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="MARAcReferralTwo" id="MARAcReferralTwo" />
              </div>

              {/* Created By:  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="createdBy">Created By:</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="createdBy" id="createdBy" />
              </div>

              {/* Last Modified  */}
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="createdBy">Last modified</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="createdBy" id="createdBy" />
              </div>
            </div>
          </div>

          <button className="bg-[#622c98] rounded-md text-white block py-2 px-5">Save</button>
        </form>
      </div>

      {/* Prevoid management */}
      <div className="mt-8 h-full overflow-y-scroll scrollbar-thin">
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
        </form>
      </div>
    </div>
  )
}

export default FormsInService
