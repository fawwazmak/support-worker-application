import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import filterIcon from "/filter-icon.svg";
import bagIcon from "/bag-icon.svg";
import bagIconWhite from "/bag-icon-white.svg";
import bagIconBlack from "/bag-icon-black.svg";
import arrowUp from "/arrow-up.svg"


const YoungProfileForm = () => {
  const navigate = useNavigate();
  const toYp = () => { 
    navigate("/YP");
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
    <div className="px-4 md:px-0 md:pr-4 font-poppins h-screen overflow-y-scroll scrollbar-thin">
      <header className='flex flex-col pb-2 sticky top-0 z-20 bg-white'>
        <div className='flex sm:justify-between sm:gap-0 gap-5 sm:flex-row flex-col my-4'>
            <div className='flex items-center gap-5'>
                <h1 className='text-2xl font-bold'>Young persons profile</h1>
                <img src={filterIcon} alt="Filter Icon" />
            </div>

            <div className='flex items-center gap-3 cursor-pointer sm:self-auto self-end bg-[#F9F6F6] p-2 rounded-[5px]'>
                <img src={bagIconBlack} alt="Icon" className='' />
                <p>Jonathan D</p>
                <img src={bagIconBlack} alt="Icon" className='' />
            </div>
        </div>

        <div className='flex gap-[12px] self-end'>
            <button onClick={toYp} className='rounded-[8px] flex items-center p-[8px] gap-[10px] border border-[#622c98] text-[#622c98]'>
                <p>Cancel</p>
                <img src={bagIcon} alt="bag icon" />
            </button>

            <button onClick={triggerFormSubmit} className='rounded-[8px] flex items-center p-[8px] gap-[10px] bg-[#622c98] text-white'>
                <p>Submit</p>
                <img src={bagIconWhite} alt="bag icon" />
            </button>
        </div>

        <div className='flex p-[10px] w-fit gap-[10px] text-[#bcbcbc]'>
            <p>YP profile </p>
            <p>&#47;</p> 
            <p>Profiles</p>
            <p>&#47;</p> 
            <p>Create new profiles</p>
        </div>
        <hr />
      </header>

      <form ref={formRef} onSubmit={handleSubmit} action="" className="mt-8 w-[80%] mx-auto">
        <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
          <header className="flex justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
              <h2>YP Key Details</h2>
              <img src={arrowUp} alt="Arrow" />
          </header>
          <div className="flex flex-col gap-4 md:p-5 p-2">
            {/* First name  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="firstName">First name</label>
              <input placeholder="Enter your first name" className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="firstName" id="firstName" />
            </div>

            {/* Last name  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="lastName">Last name</label>
              <input placeholder="Enter your Last name" className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="lastName" id="lastName" />
            </div>

            {/* Pronoun  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="pronoun">Pronoun</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="pronoun" id="pronoun">
                    <option value="none">none</option>
                    <option value="he">He</option>
                    <option value="she">She</option>
                </select>
            </div>

            {/* Alias  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="alias">Alias (AKA)</label>
              <input placeholder="Enter your nickname" className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="alias" id="alias" />
            </div>

            {/* Consent  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="consent">Consent</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="consent" id="consent">
                <option value="none">none</option>
                <option value="optionOne">One</option>
                <option value="optionTwo">Two</option>
              </select>
            </div>

            {/* Date of Birth  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                <label className='w-full' htmlFor="dateOfBirth">Date of birth</label>
                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="dateOfBirth" id="dateOfBirth" />
            </div>

            {/* Gender  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="gender">Gender</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="gender" id="gender">
                    <option value="he">He</option>
                    <option value="she">She</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {/* NI number  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="NInumber">NI number</label>
              <input placeholder="Enter your NI number" className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="NInumber" id="NInumber" />
            </div>

            {/* NI number known  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="NInumberKnown">NI number known</label>
              <input placeholder="Enter your NI number" className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="NInumberKnown" id="NInumberKnown" />
            </div>

            {/* NHS number  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="NHSnumber">NHS number</label>
              <input placeholder="Enter your NHS number" className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="NHSnumber" id="NHSnumber" />
            </div>

            {/* AQA number  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="AQAnumber">AQA number</label>
              <input placeholder="Enter your AQA number" className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="AQAnumber" id="AQAnumber" />
            </div>

            {/* ChainID  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="chainID">ChainID</label>
              <input placeholder="Enter your chainID" className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="chainID" id="chainID" />
            </div>

            {/* Identity held  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="identityHeld">Identity held</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="identityHeld" id="identityHeld">
                    <option value="none">none</option>
                    <option value="optionOne">option one</option>
                    <option value="optionTwo">option two</option>
                </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
          <header className="flex justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
              <h2>Young person's contact Details</h2>
              <img src={arrowUp} alt="Arrow" />
          </header>
          <div className="flex flex-col gap-4 md:p-5 p-2">
            {/* Contact medium  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="contactMedium">How do we contact you?</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="contactMedium" id="contactMedium">
                <option value="Any">Any</option>
                <option value="phone">Phone Call</option>
                <option value="email">Email</option>
              </select>
            </div>

            {/* Mobile number  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="phoneNumber">Mobile</label>
              <input placeholder="Enter your phone number" className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="phoneNumber" id="phoneNumber" />
            </div>

            {/* Email  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="email">Email</label>
              <input placeholder="Enter your email" className='border border-[#dedede] p-2 rounded-[4px] w-full' type="email" name="email" id="email" />
            </div>

            {/* Mailing Address  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="mailingAddress">Mailing Address</label>
              <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="mailingAddress" id="mailingAddress" placeholder='Mailing Address'></textarea>
            </div>

            {/* Country  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="country">Country</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="country" id="country">
                <option value="nigeria">Nigeria</option>
                <option value="senegal">Senegal</option>
                <option value="russia">Russia</option>
              </select>
            </div>

            {/* City  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="city">City</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="city" id="city">
                <option value="lagos">Lagos</option>
                <option value="oyo">Oyo</option>
                <option value="ogun">Ogun</option>
              </select>
            </div>

            {/* Postal code  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="postalCode">Postal code</label>
              <input placeholder="Enter postal code" className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="postalCode" id="postalCode" />
            </div>

            {/* Contact in Emergency  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="emergencyContact">Contact in emergency</label>
              <input placeholder="Emergency contact" className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="emergencyContact" id="emergencyContact" />
            </div>
          </div>
        </div>


        <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
          <header className="flex justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
              <h2>Nationality and Immigration</h2>
              <img src={arrowUp} alt="Arrow" />
          </header>
          <div className="flex flex-col gap-4 md:p-5 p-2">
            {/* Nationality  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="nationality">Nationality</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="nationality" id="nationality">
                <option value="nigerian">Nigerian</option>
                <option value="portugese">Portugese</option>
                <option value="canadian">Canadian</option>
                <option value="arab">Arab</option>
                <option value="chinese">Chinese</option>
              </select>
            </div>

            {/* First language  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="firstLanguage">First language</label>
              <input placeholder="Emergency contact" className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="firstLanguage" id="firstLanguage" />
            </div>

            {/* citizenship */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="citizenship">Citizenship</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="citizenship" id="citizenship">
                <option value="citizen">Citizen</option>
                <option value="permanentResident">Permanent resident</option>
                <option value="temporaryResident">Temporary resident</option>
                <option value="refugee">Refugee or Asylee</option>
                <option value="visaHolder">Visa holder</option>
                <option value="undocumentedImmigrant">Undocumented immigrant</option>
                <option value="DACArecipent">DACA recipent</option>
                <option value="temporaryProtectedStatus">Temporary protected status (TPS) holder</option>
                <option value="statelessPerson">Stateless person</option>
              </select>
            </div>

            {/* immigration document  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="immigrationDocument">Immigration document held</label>
              <input placeholder="immigration document" className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="immigrationDocument" id="immigrationDocument" />
            </div>

            {/* Latest Entry date */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="latestEntryDate">Latest entry date</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="latestEntryDate" id="latestEntryDate" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
          <header className="flex justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
              <h2>Care details</h2>
              <img src={arrowUp} alt="Arrow" />
          </header>
          <div className="flex flex-col gap-4 md:p-5 p-2">
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="careLevel">Care level</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="careLevel" id="careLevel">
                <option value="highNeed">High need</option>
                <option value="mediumNeed">Medium need</option>
                <option value="lowNeed">Low need</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
          <header className="flex justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
              <h2>Other contacts</h2>
              <img src={arrowUp} alt="Arrow" />
          </header>
          <div className="flex flex-col gap-4 md:p-5 p-2">
            {/* Rehabiliation  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="rehabiliation">Rehabiliation (company details)</label>
              <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="rehabiliation" id="rehabiliation" placeholder='Rehabiliation'></textarea>
            </div>

            {/* Defender management  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="defenderManagement">Defender management details</label>
              <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="defenderManagement" id="defenderManagement" placeholder='Defender Management'></textarea>
            </div>

            {/* Probation service */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="probationService">Probation service details</label>
              <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="probationService" id="probationService" placeholder='Probation service'></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default YoungProfileForm
