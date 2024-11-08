import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import filterIcon from "/filter-icon.svg";
import bagIcon from "/bag-icon.svg";
import bagIconWhite from "/bag-icon-white.svg";
import bagIconBlack from "/bag-icon-black.svg";
import arrowUp from "/arrow-up.svg"


const YoungProfileForm = () => {
  const navigate = useNavigate();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const [dob, setDob] = useState();
  

  const handleAge = (e) => {
    const selectedDate = new Date(e.target.value);
    const selectedYear = selectedDate.getFullYear();
    const age = currentYear - selectedYear;
    const selectedMonth = selectedDate.getMonth();
    const selectedDay = selectedDate.getDate();


    if (
      selectedMonth > currentMonth ||
      (selectedMonth === currentMonth && selectedDay > currentDate.getDate())
    ) {
      setDob(age - 1);
    } else {
      setDob(age);
    }
  }

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

            <button onClick={triggerFormSubmit} className='rounded-[8px] flex items-center p-[8px] gap-[10px] bg-[#622c98] text-white animate-bounce'>
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
          <header className="flex justify-between bg-[#F9F2FF] p-5 rounded-t-[8px] sticky top-48">
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
                <option value="written">Written</option>
                <option value="verbal">Verbal</option>
                <option value="refused">No - refused</option>
                <option value="withdrawn">No - withdrawn</option>
                <option value="notRequested">No - not requested</option>
                <option value="exempt">Exempt</option>
              </select>
            </div>

            {/* Date of Birth  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="dateOfBirth">Date of birth</label>
              <input onChange={handleAge} className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="dateOfBirth" id="dateOfBirth" />
            </div>

            {/* Current age */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="currentAge">Current age</label>
              <input value={dob} readOnly className='border border-[#dedede] p-2 rounded-[4px] w-full' type="number" name="currentAge" id="currentAge" />
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

            {/* NHS number  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="NHSnumber">NHS number</label>
              <input placeholder="Enter your NHS number" className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="NHSnumber" id="NHSnumber" />
            </div>

            {/* Identity held  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="identityHeld">Identity held</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="identityHeld" id="identityHeld">
                    <option value="birthCertificate">Birth certificate</option>
                    <option value="nin">NIN</option>
                    <option value="passport">Passport</option>
                    <option value="driverLicense">Driver's license</option>
                    <option value="pvc">Permanent voters card</option>
                </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="sleptRough">Ever slept rough</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="sleptRough" id="sleptRough">
                <option value="no">No</option>
                <option value="yes">Yes</option>
                <option value="notKnown">Not known</option>
                <option value="noResponse">Refused to response</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="convicted">Ever convicted of an offence</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="convicted" id="convicted">
                <option value="no">No</option>
                <option value="yes">Yes</option>
                <option value="noResponse">Refused to response</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="timeInCare">How long in care</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="timeInCare" id="timeInCare">
                <option value="1">1 year</option>
                <option value="6-12">6 - 12 months</option>
                <option value="doNotWishToAnswer">Do not wish to answer</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="lALastInCare">Which LA last in care of</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="lALastInCare" id="lALastInCare" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
          <header className="flex justify-between bg-[#F9F2FF] p-5 rounded-t-[8px] sticky top-48">
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

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="otherContact">Other contact</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="otherContact" id="otherContact" />
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

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="translator">Translator required</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="translator" id="translator">
                <option value="no">No</option>
                <option value="yes">Yes</option>
                <option value="notApplicable">N/A</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="yearOfFirstArrival">Year of first arrival</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="yearOfFirstArrival" id="yearOfFirstArrival" />
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
          <header className="flex justify-between bg-[#F9F2FF] p-5 rounded-t-[8px] sticky top-48">
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
          <header className="flex justify-between bg-[#F9F2FF] p-5 rounded-t-[8px] sticky top-48">
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
          <header className="flex justify-between bg-[#F9F2FF] p-5 rounded-t-[8px] sticky top-48">
              <h2>EET (Education, Employment and Training) and source of income</h2>
              <img src={arrowUp} alt="Arrow" />
          </header>
          <div className="flex flex-col gap-4 md:p-5 p-2">
            {/* Training  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="training">Training</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="training" id="training">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Education  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="education">Education</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="education" id="education">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Hobbies  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="hobbies">Hobbies</label>
              <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="hobbies" id="hobbies" placeholder='Reading, meditating'></textarea>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <div className="w-full flex gap-4 relative">
                <label className='' htmlFor="hobbies">EET preference</label>
                <div className="group">
                  <svg className="block h-6 text-red-600" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><g fill="currentColor"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="m8.93 6.588l-2.29.287l-.082.38l.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319c.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246c-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></g></svg>
                  <div className="flex flex-col absolute left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div class="w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-[#6b21a8] border-r-8 border-r-transparent"></div>
                    <p className="bg-[#6b21a8] p-1 text-white  border-s-[#6b21a8] border-s-[2px] rounded-lg rounded-s-none">preferred job</p>
                  </div>
                </div>
              </div>
              <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="hobbies" id="hobbies" placeholder='Reading, meditating'></textarea>
            </div>

            {/* Reasons for not in education and training  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="NEET">Reasons for NEET</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="NEET" id="NEET" />
            </div>

            {/* Occupation */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="occupation">Occupation</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="occupation" id="occupation">
                <option value="teacher">Teacher</option>
                <option value="engineer">Engineer</option>
                <option value="others">Others</option>
              </select>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="typeOfBenefit">Types of benefit</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="typeOfBenefit" id="typeOfBenefit"></select>
            </div>

            {/* length of unemployment */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="lenghtUnemployment">Length of unemployment</label>
              <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="lenghtUnemployment" id="lenghtUnemployment">
                <option value="0to6">0 - 6 months</option>
                <option value="6to1">6 months - 1 year</option>
                <option value="1+">Above 1 year </option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
          <header className="flex justify-between bg-[#F9F2FF] p-5 rounded-t-[8px] sticky top-48">
              <h2>Missing person details</h2>
              <img src={arrowUp} alt="Arrow" />
          </header>
          <div className="flex flex-col gap-4 md:p-5 p-2">
            {/* height  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="height">Height</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="height" id="height" />
            </div>

            {/* Eye color  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="eyeColor">Eye color</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="eyeColor" id="eyeColor" />
            </div>

            {/* Hair color and style  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="hairColorAndStyle">Hair color and style</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="hairColorAndStyle" id="hairColorAndStyle" />
            </div>

            {/* distinguishing feature  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="distinguishingFeature">Distinguishing feature</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="distinguishingFeature" id="distinguishingFeature" />
            </div>

            {/* Clothing usually worn */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="usuallyWorn">Clothing usually worn</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="usuallyWorn" id="usuallyWorn" />
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="vulnerability">Details of any vulnerability</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="vulnerability" id="vulnerability" />
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="socialMedia">Social media accounts</label>
              <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="socialMedia" id="socialMedia"></textarea>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="otherDetails">Any other details & comments</label>
              <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="otherDetails" id="otherDetails"></textarea>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
          <header className="flex justify-between bg-[#F9F2FF] p-5 rounded-t-[8px] sticky top-48">
              <h2>Death</h2>
              <img src={arrowUp} alt="Arrow" />
          </header>
          <div className="flex flex-col gap-4 md:p-5 p-2">
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="dateOfDeath">Date of death</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="dateOfDeath" id="dateOfDeath" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
          <header className="flex justify-between bg-[#F9F2FF] p-5 rounded-t-[8px] sticky top-48">
              <h2>Risk assessment plan (RAP)</h2>
              <img src={arrowUp} alt="Arrow" />
          </header>
          <div className="flex flex-col gap-4 md:p-5 p-2">
            {/* Plan name  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="briefOfRAP">Brief of RAP</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="briefOfRAP" id="briefOfRAP" />
            </div>

            {/* Assesment date  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="assessmentDate">Assessment date</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="assessmentDate" id="assessmentDate" />
            </div>

            {/* Next assessment date  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="nextAssessmentDate">Next assessment date</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="nextAssessmentDate" id="nextAssessmentDate" />
            </div>

            {/* Any historic details  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="historicDetails">Any historic details</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="historicDetails" id="historicDetails" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
          <header className="flex justify-between bg-[#F9F2FF] p-5 rounded-t-[8px] sticky top-48">
              <h2>Other support worker details</h2>
              <img src={arrowUp} alt="Arrow" />
          </header>
          <div className="flex flex-col gap-4 md:p-5 p-2">
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="otherSName">Name</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="otherSName" id="otherSName" />
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="otherSMobileNumber">Mobile number</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="number" name="otherSMobileNumber" id="otherSMobileNumber" />
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="otherSComments">Comments</label>
              <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="otherSComments" id="otherSComments"></textarea>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
          <header className="flex justify-between bg-[#F9F2FF] p-5 rounded-t-[8px] sticky top-48">
            <h2>Safeguarding Assessment Plan (SAP)</h2>
            <img src={arrowUp} alt="Arrow" />
          </header>
          <div className="flex flex-col gap-4 md:p-5 p-2">
            {/* Service name  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="serviceName">Service name</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="serviceName" id="serviceName" />
            </div>
            
            {/* Start date  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="startDate">Start date</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="startDate" id="startDate" />
            </div>

            {/* End date  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="endDate">End date</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="endDate" id="endDate" />
            </div>

            {/* category  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="category">Category</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="category" id="category" />
            </div>

            {/* concern monitoring  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="concernMonitoring">Concern monitoring</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="concernMonitoring" id="concernMonitoring" />
            </div>

            {/* Risky level  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="riskyLevel">Risky level</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="riskyLevel" id="riskyLevel" />
            </div>

            {/* Take further actions  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="takeFurtherActions">Take futher actions</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="takeFurtherActions" id="takeFurtherActions" />
            </div>

            {/* Notes  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="note">Notes</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="note" id="note" />
            </div>

            {/* Created by  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="createdBy">Created by</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="createdBy" id="createdBy" />
            </div>

            {/* modified by  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="modifiedBy">Modifed by</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="modifiedBy" id="modifiedBy" />
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-12">
          <header className="flex justify-between bg-[#F9F2FF] p-5 rounded-t-[8px] sticky top-48">
              <h2>Other contacts</h2>
              <img src={arrowUp} alt="Arrow" />
          </header>
          <div className="flex flex-col gap-4 md:p-5 p-2"> */}
            {/* Rehabiliation  */}
            {/* <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="rehabiliation">Rehabiliation (company details)</label>
              <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="rehabiliation" id="rehabiliation" placeholder='Rehabiliation'></textarea>
            </div> */}

            {/* Defender management  */}
            {/* <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="defenderManagement">Defender management details</label>
              <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="defenderManagement" id="defenderManagement" placeholder='Defender Management'></textarea>
            </div> */}

            {/* Probation service */}
            {/* <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="probationService">Probation service details</label>
              <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="probationService" id="probationService" placeholder='Probation service'></textarea>
            </div> */}
          {/* </div> */}
        {/* </div> */}
      </form>
    </div>
  )
}

export default YoungProfileForm
