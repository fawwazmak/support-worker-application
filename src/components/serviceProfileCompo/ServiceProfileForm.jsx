import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import filterIcon from "/filter-icon.svg";
import bagIcon from "/bag-icon.svg";
import bagIconWhite from "/bag-icon-white.svg";
import bagIconBlack from "/bag-icon-black.svg";
import arrowUp from "/arrow-up.svg"


const Profile = () => {
    const navigate = useNavigate();
    const toServiceProfile = () => {
        navigate("/serviceProfile")
    }
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted!');
    };

  const triggerFormSubmit = () => {
    if (formRef.current) {
      formRef.current.submit(); 
    }
  };

  return (
    <div className=' px-4 md:px-0 md:pr-4 font-poppins h-screen overflow-y-scroll scrollbar-thin'>
      <header className='flex flex-col pb-2 sticky top-0 z-20 bg-white'>
        <div className='flex sm:justify-between sm:gap-0 gap-5 sm:flex-row flex-col my-4'>
            <div className='flex items-center gap-5'>
                <h1 className='text-2xl font-bold'>Service profile</h1>
                <img src={filterIcon} alt="Filter Icon" />
            </div>

            <div className='flex items-center gap-3 cursor-pointer sm:self-auto self-end bg-[#F9F6F6] p-2 rounded-[5px]'>
                <img src={bagIconBlack} alt="Icon" className='' />
                <p>Jonathan D</p>
                <img src={bagIconBlack} alt="Icon" className='' />
            </div>
        </div>

        <div className='flex gap-[12px] self-end'>
            <button onClick={triggerFormSubmit} className='rounded-[8px] flex items-center p-[8px] gap-[10px] border border-[#622c98] text-[#622c98] animate-bounce'>
                <p>Save</p>
                <img src={bagIcon} alt="bag icon" />
            </button>
            <button onClick={toServiceProfile} className='rounded-[8px] flex items-center p-[8px] gap-[10px] bg-[#622c98] text-white'>
                <p>Back</p>
                <img src={bagIconWhite} alt="bag icon" />
            </button>
        </div>

        <div className='flex p-[10px] w-fit gap-[10px] text-[#bcbcbc]'>
            <p>service profile </p>
            <p>&#47;</p> 
            <p>Profile</p>
            <p>&#47;</p> 
        </div>
        <hr />
      </header>


        <form ref={formRef} onSubmit={handleSubmit} action="" className="mt-8 w-[80%] mx-auto">
            <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
                <header className="flex justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                    <h2>Service Details</h2>
                    <img src={arrowUp} alt="Arrow" />
                </header>
                <div className="flex flex-col gap-4 md:p-5 p-2">
                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="serviceCode">Service code</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="serviceCode" id="serviceCode" />
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="serviceName">Service name</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="serviceName" id="serviceName" />
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="manager">Manager</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' name="manager" id="manager" />
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="address">Address</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="address" id="address" placeholder='Enter your address' />
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="phoneNumber">Phone number</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="tel" name="phoneNumber" id="phoneNumber" />
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="email">Email</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="email" name="email" id="email" />
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="landLine">Landline</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="landLine" id="landLine" />
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="emergencyNumber">Emergency number</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="tel" name="emergencyNumber" id="emergencyNumber" />
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="supportedAccomodation">Supported accomodation</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="supportedAccomodation" id="supportedAccomodation">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            <option value="notApplicable">N/A</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="serviceType">Service type</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="serviceType" id="serviceType">
                            <option value="none">none</option>
                            <option value="optionOne">option one</option>
                            <option value="optionTwo">option two</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="numberOfBeds">Number of beds</label>
                        <input max={10} min={0} className='border border-[#dedede] p-2 rounded-[4px] w-full' type="number" name="numberOfBeds" id="numberOfBeds" />
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="specialization">Specialization</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="specialization" id="specialization" >
                            <option value="16to25">16-25</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="legalSupport">Legal support</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="legalSupport" id="legalSupport">
                            <option value="low">Low</option> 
                            <option value="medium">Medium</option>
                            <option value="medium-high">Medium-high</option>
                            <option value="high">High</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="focusOfSupport">Focus of support</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="focusOfSupport" id="focusOfSupport">
                            <option value="no">no</option>
                            <option value="yes">Yes</option>
                            <option value="notApplicable">N/A</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
                <header className="flex justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                    <h2>Staff info</h2>
                    <img src={arrowUp} alt="Arrow" />
                </header>
                <div className="flex flex-col gap-4 md:p-5 p-2">
                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="serviceManager">Service manager</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="serviceManager" id="serviceManager" />
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="deputyManager">Deputy manager</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="deputyManager" id="deputyManager" />
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="callOne">On Call</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="tel" name="callOne" id="callOne" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
                <header className="flex justify-between bg-[#F9F2FF] p-5">
                    <h2>Service Users</h2>
                    <img src={arrowUp} alt="Arrow" />
                </header>
                <div className="flex flex-col gap-4 md:p-5 p-2">
                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="gender">Gender</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="gender" id="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="both">Both</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="ageRange">Age range</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="ageRange" id="ageRange">
                            <option value="16-25">16 - 25</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="pronoun">Pronoun</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="pronoun" id="pronoun" >
                            <option value="ratherNotSay">Rather not say</option>
                            <option value="he">He / him</option>
                            <option value="she">She / her</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="durationOfStay">Duration of Stay</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="durationOfStay" id="durationOfStay" >
                            <option value="0.5">6 months</option>
                            <option value="1">1 year</option>
                            <option value="2">2 years</option>
                        </select>
                    </div>

                </div>
            </div>

            <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
                <header className="flex justify-between bg-[#F9F2FF] p-5">
                    <h2>Support considerations</h2>
                    <img src={arrowUp} alt="Arrow" />
                </header>
                <div className="flex flex-col gap-4 md:p-5 p-2">
                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="loneWorking">Lone working</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="loneWorking" id="loneWorking">
                            <option value="no">no</option>
                            <option value="yes">Yes</option>
                            <option value="notApplicable">N/A</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="challengingBehaviour">Challenging behaviour</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="challengingBehaviour" id="challengingBehaviour">
                            <option value="no">no</option>
                            <option value="yes">Yes</option>
                            <option value="notApplicable">N/A</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="personalCareSupport">Personal care support</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="personalCareSupport" id="personalCareSupport" >
                            <option value="no">no</option>
                            <option value="yes">Yes</option>
                            <option value="notApplicable">N/A</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="physicalChallenges">Physical challenge(s)</label>
                        <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="physicalChallenges" id="physicalChallenges" placeholder='Savegaurding young at all time that present various complex needs'></textarea>
                    </div>

                </div>
            </div>

            <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
                <header className="flex justify-between bg-[#F9F2FF] p-5">
                    <h2>Other considerations and FAQS</h2>
                    <img src={arrowUp} alt="Arrow" />
                </header>
                <div className="flex flex-col gap-4 md:p-5 p-2">
                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="sleepInBed">Sleep in bed</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="sleepInBed" id="sleepInBed">
                            <option value="no">no</option>
                            <option value="yes">Yes</option>
                            <option value="notApplicable">N/A</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="parking">Parking</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="parking" id="parking">
                            <option value="no">no</option>
                            <option value="yes">Yes</option>
                            <option value="notApplicable">N/A</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="pets">Are there pets</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="pets" id="pets">
                            <option value="no">no</option>
                            <option value="yes">Yes</option>
                            <option value="notApplicable">N/A</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <div className="w-full flex gap-4 relative">
                            <label className='' htmlFor="unpaidBreaksy">Unpaid breaks</label>
                            <div className="group">
                                <svg className="block h-6 text-red-600" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><g fill="currentColor"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="m8.93 6.588l-2.29.287l-.082.38l.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319c.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246c-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></g></svg>
                                <div className="flex flex-col absolute left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                    <div class="w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-[#6b21a8] border-r-8 border-r-transparent"></div>
                                    <p className="bg-[#6b21a8] p-1 text-white  border-s-[#6b21a8] border-s-[2px]">Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="unpaidBreaksy" id="unpaidBreaksy">
                            <option value="0.5">30 minutes</option>
                            <option value="1">1 hour</option>
                        </select>
                    </div>

                </div>
            </div>

            <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
                <header className="flex justify-between bg-[#F9F2FF] p-5">
                    <h2>System info</h2>
                    <img src={arrowUp} alt="Arrow" />
                </header>
                <div className="flex flex-col gap-4 md:p-5 p-2">
                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="notes">Notes</label>
                        <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="notes" id="notes" placeholder='Type here'></textarea>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="commissionDate">Commission date</label>
                        <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="commissionDate" id="commissionDate" placeholder='Type here'></textarea>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="createdBy">Created by</label>
                        <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="createdBy" id="createdBy" placeholder='Type here'></textarea>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="modifiedBy">Modified by</label>
                        <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="modifiedBy" id="modifiedBy" placeholder='Type here'></textarea>
                    </div>

                </div>
            </div>
        </form>
    </div>
  )
}

export default Profile
