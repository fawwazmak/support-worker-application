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
                        <label className='w-full' htmlFor="address">Address</label>
                        <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="address" id="address" placeholder='Saturation'></textarea>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="phoneNumber">Phone number</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="tel" name="phoneNumber" id="phoneNumber" />
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
                        <label className='w-full' htmlFor="serviceType">Service type</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="serviceType" id="serviceType">
                            <option value="none">none</option>
                            <option value="optionOne">option one</option>
                            <option value="optionTwo">option two</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="numberOfBeds">Number of beds</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="numberOfBeds" id="numberOfBeds">
                            <option value="none">none</option>
                            <option value="optionOne">option one</option>
                            <option value="optionTwo">option two</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="specialization">Specialization</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="specialization" id="specialization" >
                            <option value="none">none</option>
                            <option value="optionOne">option one</option>
                            <option value="optionTwo">option two</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="legalSupport">Legal support</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="legalSupport" id="legalSupport">
                            <option value="none">none</option>
                            <option value="optionOne">option one</option>
                            <option value="optionTwo">option two</option>
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
                        <label className='w-full' htmlFor="callOne">On Call 1</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="tel" name="callOne" id="callOne" />
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="callTwo">On Call 2</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="callTwo" id="callTwo" />
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
                            <option value="rather-not-say">rather not say</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="ageRange">Age range</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="ageRange" id="ageRange">
                            <option value="18-20">18 - 20</option>
                            <option value="21-24">21 - 24</option>
                            <option value="25-and-above">25 and above</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="pronoun">Pronoun</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="pronoun" id="pronoun" >
                            <option value="rather not say">Rather not say</option>
                            <option value="he">He / him</option>
                            <option value="she">She / her</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="durationOfStay">Duration of Stay</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="durationOfStay" id="durationOfStay" >
                            <option value="4">4 months</option>
                            <option value="6">6 months</option>
                            <option value="12">12 months</option>
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
                            <option value="false">False</option>
                            <option value="true">True</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="challengingBehaviour">Challenging behaviour</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="challengingBehaviour" id="challengingBehaviour">
                            <option value="false">False</option>
                            <option value="true">True</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="personalCareSupport">Personal care support</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="personalCareSupport" id="personalCareSupport" >
                            <option value="false">False</option>
                            <option value="true">True</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="physicalChallenges">Physical challenge(s)</label>
                        <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="physicalChallenges" id="physicalChallenges" placeholder='Type here'></textarea>
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
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="parking">Parking</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="parking" id="parking">
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="pets">Are there pets</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="pets" id="pets">
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                        <label className='w-full' htmlFor="unpaidBreaksy">Unpaid breaks</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="unpaidBreaksy" id="unpaidBreaksy">
                            <option value="true">True</option>
                            <option value="false">False</option>
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
