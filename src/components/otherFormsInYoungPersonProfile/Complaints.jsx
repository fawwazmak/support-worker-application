import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrowUp from "/arrow-up.svg"

const Complaints = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }
  return (
    <div className="mt-8 h-full overflow-y-scroll scrollbar-thin relative">
        <h5 className="text-center py-2 font-bold absolute top-0 w-full z-30 bg-[#622c98] text-white">Complaints</h5>

        <p onClick={goBack} className='border-2 border-[#6b21a8] w-fit px-3 rounded animate-pulse text-[#6b21a8] cursor-pointer mt-12 mx-4'>Back</p>

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
  )
}

export default Complaints
