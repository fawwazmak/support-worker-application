import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import bagIcon from "/bag-icon.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import arrowUp from "/arrow-up.svg";

const Maintenace = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  
  return (
    <div className="mt-8 h-full overflow-y-scroll scrollbar-thin">
      <p onClick={goBack} className='border-2 border-[#6b21a8] w-fit px-3 rounded animate-pulse text-[#6b21a8] cursor-pointer'>Back</p>

      <h5 className="text-center py-2 font-bold">Maintenance</h5>

      <form action="" method="post" className="mt-8 w-[80%] mx-auto mb-24">
        <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
          <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
            <h2>Maintenance</h2>
            <img src={arrowUp} alt="Arrow" />
          </header>

          <div className="flex flex-col gap-4 md:p-5 p-2">
            {/* Service name  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="serviceName">Service name</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="serviceName" id="serviceName" />
            </div>

            {/* Room number  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="roomNumber">Room number</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="roomNumber" id="roomNumber" />
            </div>

            {/* Job reported by staff or young person  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="jobReported">Job reported by staff or young person</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="jobReported" id="jobReported" />
            </div>

            {/* name of young person  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="youngPersonName">name of young person</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="youngPersonName" id="youngPersonName" />
            </div>

            {/* Date repair requested  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="dateRepairRequested">Date repair requested</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="dateRepairRequested" id="dateRepairRequested" />
            </div>

            {/* Time repair requested  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="serviceName">Time repair requested</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="time" name="serviceName" id="serviceName" />
            </div>

            {/* Upload Files, Images, or Videos  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="uploadFile">Upload Files, Images, or Videos</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="file" name="uploadFile" id="uploadFile" />
            </div>
          </div>
        </div>


        <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
          <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
            <h2>Maintenance details</h2>
            <img src={arrowUp} alt="Arrow" />
          </header>

          <div className="flex flex-col gap-4 md:p-5 p-2">
            {/* Job priority */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="jobPriority">Job priority</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="jobPriority" id="jobPriority" />
            </div>

            {/* Reference number */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="referenceNumber">Reference number</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="referenceNumber" id="referenceNumber" />
            </div>

            {/* Cost of repairs */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="costOfRepairs">Cost of repairs</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="costOfRepairs" id="costOfRepairs" />
            </div>
            
            {/* Purchase order number */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="purchaseOrderNumber">Purchase order number</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="purchaseOrderNumber" id="purchaseOrderNumber" />
            </div>
            
            {/* Post job completion amount */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="postJobCompletionAmount">Post job completion amount</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="postJobCompletionAmount" id="postJobCompletionAmount" />
            </div>
            
            {/* Contractor name */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="jobPriority">Contractor name</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="jobPriority" id="jobPriority" />
            </div>
            
            {/* Date PO raised */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="dateRaised">Date PO raised</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="dateRaised" id="dateRaised" />
            </div>
            
            {/* Repair timescale */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="repairTimescale">Repair timescale</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="time" name="repairTimescale" id="repairTimescale" />
            </div>
            
            {/* Pre-inspection date */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="preInspectionDate">Pre-inspection date</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="preInspectionDate" id="preInspectionDate" />
            </div>

            {/* Pre-inspection comments  */}
            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="preInspectionComments">Pre-inspection comments</label>
              <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="preInspectionComments" id="preInspectionComments" placeholder='Enter any additional comments'></textarea>
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="postJobCompletionDate">Post job completion date</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="postJobCompletionDate" id="postJobCompletionDate" />
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="repairCompletionDate">Repair completion date</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="date" name="repairCompletionDate" id="repairCompletionDate" />
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="staffMemberSignOut">Staff member sign out</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="staffMemberSignOut" id="staffMemberSignOut" />
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="systemInfo">System info</label>
              <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="systemInfo" id="systemInfo" />
            </div>

            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
              <label className='w-full' htmlFor="postCompletionComments">Post completion comments</label>
              <textarea className='border border-[#dedede] p-2 rounded-[4px] w-full' name="postCompletionComments" id="postCompletionComments" placeholder='Job satisfied and part inspected state if recall is required'></textarea>
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

export default Maintenace
