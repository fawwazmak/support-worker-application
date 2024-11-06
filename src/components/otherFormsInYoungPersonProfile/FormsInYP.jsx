import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrowUp from "/arrow-up.svg"


const FormsInYP = () => {
  const [activeForm, setActiveForm] = useState('complaints');

  return (
    <div className="h-screen overflow-hidden">
      <header className="flex flex-wrap gap-4">
        <button className={`block p-2 bg-[#f0f0f0] md:rounded-md rounded-sm ${activeForm === 'complaints' ? 'bg-[#6b21a8] text-white' : ''}`}
          onClick={() => setActiveForm('complaints')}>Complaints</button>
        <button className={`block p-2 bg-[#f0f0f0] md:rounded-md rounded-sm ${activeForm === 'risk' ? 'bg-[#6b21a8] text-white' : ''}`}
          onClick={() => setActiveForm('risk')}
        >Risk assesment</button> 

        <button className={`block p-2 bg-[#f0f0f0] md:rounded-md rounded-sm ${activeForm === 'case' ? 'bg-[#6b21a8] text-white' : ''}`}
          onClick={() => setActiveForm('case')}>Case note</button>   
      </header>

      {/* Complaints report  */}
      {activeForm === 'complaints' && (
          <div className="mt-8 h-full overflow-y-scroll scrollbar-thin ">
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
                      <label className='w-full' htmlFor="complaintsResolvedTwo">Complaints resolved 2</label>
                      <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="complaintsResolvedTwo" id="complaintsResolvedTwo">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>
                    </div>
  
                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                      <label className='w-full' htmlFor="reasonForEscalation">Reason for escalation</label>
                      <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="reasonForEscalation" id="reasonForEscalation" placeholder='Commentary'></textarea>
                    </div>
  
                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                      <label className='w-full' htmlFor="lessonLearned">Lesson learned</label>
                      <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="lessonLearned" id="lessonLearned" placeholder='Commentary'></textarea>
                    </div>
  
                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                      <label className='w-full' htmlFor="escalationManager">Escalation manager</label>
                      <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="escalationManager" id="escalationManager" />
                    </div>
                </div>
            </div>
  
            <button className="bg-[#622c98] rounded-md text-white block py-2 px-5 mt-4">Save</button>
          </form>
        </div>
      )}
      

      {/* Risk assesment */}
      {activeForm === 'risk' && (
        <div className="mt-8 h-full overflow-y-scroll scrollbar-thin">
        <h5 className="text-center py-2 font-bold">Risk assesment report</h5>

        <form action="" method="post" className="mt-8 w-[80%] mx-auto mb-24">
          <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
            <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
              <h2>Risk assessment plan</h2>
              <img src={arrowUp} alt="Arrow" />
            </header>

            <div className="flex flex-col gap-4 md:p-5 p-2">
              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="ID">ID</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="ID" id="ID" />
              </div>


              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="name">Name</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="name" id="name" />
              </div>

              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="assesmentDate">Assesment date</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="assesmentDate" id="assesmentDate" />
              </div>
              

              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="nextAssesmentDate">Next assesment date</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="nextAssesmentDate" id="nextAssesmentDate" />
              </div>

              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="rapID">Rap ID</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="rapID" id="rapID" />
              </div>

              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="typeOfRisk">Type of risk</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="typeOfRisk" id="typeOfRisk" />
              </div>

              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="descRisk">Description of risk</label>
                <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="descRisk" id="descRisk" placeholder='Risk description'></textarea>
              </div>

              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="riskTriggers">Risk triggers</label>
                <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="riskTriggers" id="riskTriggers" placeholder='What are the risk triggers'></textarea>
              </div>

              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="mitigatingFactors">Mitigating factors</label>
                <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="mitigatingFactors" id="mitigatingFactors" placeholder='What are the risk mitigating factors'></textarea>
              </div>

              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="plan">Plan</label>
                <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="plan" id="plan" placeholder='Plan'></textarea>
              </div>

              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="whoNeedsToKnow">Who needs to know</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="whoNeedsToKnow" id="whoNeedsToKnow" />
              </div>

              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="createdBy">Created by</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="createdBy" id="createdBy" />
              </div>

              <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="lastModifiedBy">Last modified by</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="lastModifiedBy" id="lastModifiedBy" />
              </div>
            </div>
          </div>

          <button className="bg-[#622c98] rounded-md text-white block py-2 px-5 mt-4">Save</button>
        </form>
      </div>
      )}

      {/* Case note */}
      {activeForm === 'case' && (
        <div className="mt-8 h-full overflow-y-scroll scrollbar-thin">
        <h5 className="text-center py-2 font-bold">Case Notes</h5>

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
      )}
      
    </div>
  )
}

export default FormsInYP
