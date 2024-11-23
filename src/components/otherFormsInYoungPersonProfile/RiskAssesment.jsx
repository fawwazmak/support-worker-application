import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrowUp from "/arrow-up.svg"


const RiskAssesment = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }
  return (
    <div className="mt-8 h-full overflow-y-scroll scrollbar-thin relative">
          <h5 className="text-center py-2 font-bold absolute top-0 w-full z-30 bg-[#622c98] text-white">Risk assesment report</h5>

          <p onClick={goBack} className='border-2 border-[#6b21a8] w-fit px-3 rounded animate-pulse text-[#6b21a8] cursor-pointer mt-12 mx-4'>Back</p>

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
  )
}

export default RiskAssesment
