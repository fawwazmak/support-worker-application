import filterIcon from "/filter-icon.svg";
import bagIcon from "/bag-icon.svg";
import bagIconWhite from "/bag-icon-white.svg";
import bagIconBlack from "/bag-icon-black.svg";
import arrowUp from "/arrow-up.svg"


const Profile = () => {
  return (
    <div className=' px-4 md:px-0 font-poppins h-screen overflow-y-scroll'>
      <header className='flex flex-col pb-2'>
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
            <button className='rounded-[8px] flex items-center p-[8px] gap-[10px] border border-[#622c98] text-[#622c98]'>
                <p>Save</p>
                <img src={bagIcon} alt="bag icon" />
            </button>
            <button className='rounded-[8px] flex items-center p-[8px] gap-[10px] bg-[#622c98] text-white'>
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

      </header>
      <hr />


        <form action="" className="">
            <div className="flex flex-col gap-8 border border-[#F9F2FF]">
                <header className="flex justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                    <h2>Service Details</h2>
                    <img src={arrowUp} alt="Arrow" />
                </header>
                <div className="flex flex-col gap-4 p-5">
                    <div className='flex justify-between'>
                        <label className='w-full' htmlFor="serviceCode">Service code</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="serviceCode" id="serviceCode" />
                    </div>

                    <div className='flex justify-between'>
                        <label className='w-full' htmlFor="serviceName">Service name</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="serviceName" id="serviceName" />
                    </div>

                    <div className='flex justify-between'>
                        <label className='w-full' htmlFor="address">Address</label>
                        <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="address" id="address" placeholder='Saturation'></textarea>
                    </div>

                    <div className='flex justify-between'>
                        <label className='w-full' htmlFor="phoneNumber">Phone number</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="tel" name="phoneNumber" id="phoneNumber" />
                    </div>

                    <div className='flex justify-between'>
                        <label className='w-full' htmlFor="landLine">Landline</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="landLine" id="landLine" />
                    </div>

                    <div className='flex justify-between'>
                        <label className='w-full' htmlFor="emergencyNumber">Emergency number</label>
                        <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="tel" name="emergencyNumber" id="emergencyNumber" />
                    </div>

                    <div className='flex justify-between'>
                        <label className='w-full' htmlFor="serviceType">Service type</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="serviceType" id="serviceType">
                            <option value="none">none</option>
                            <option value="optionOne">option one</option>
                            <option value="optionTwo">option two</option>
                        </select>
                    </div>

                    <div className='flex justify-between'>
                        <label className='w-full' htmlFor="numberOfBeds">Number of beds</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="numberOfBeds" id="numberOfBeds">
                            <option value="none">none</option>
                            <option value="optionOne">option one</option>
                            <option value="optionTwo">option two</option>
                        </select>
                    </div>

                    <div className='flex justify-between'>
                        <label className='w-full' htmlFor="specialization">Specialization</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="specialization" id="specialization" >
                            <option value="none">none</option>
                            <option value="optionOne">option one</option>
                            <option value="optionTwo">option two</option>
                        </select>
                    </div>

                    <div className='flex justify-between'>
                        <label className='w-full' htmlFor="legalSupport">Legal support</label>
                        <select className='border border-[#dedede] p-2 rounded-[4px] w-full' name="legalSupport" id="legalSupport">
                            <option value="none">none</option>
                            <option value="optionOne">option one</option>
                            <option value="optionTwo">option two</option>
                        </select>
                    </div>

                </div>
            </div>
        </form>
    </div>
  )
}

export default Profile
