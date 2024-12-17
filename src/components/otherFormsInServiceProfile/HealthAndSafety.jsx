import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import bagIcon from "/bag-icon.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import arrowUp from "/arrow-up.svg";

const HealthAndSafety = () => {
    const [healthAndSafety, setHealthAndSafety] = useState("daily");
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

  return (
    <div>
        <header className="flex gap-4 items-center flex-wrap py-1">
            <button className={`block rounded p-2 ${(healthAndSafety === "daily")? "bg-[#6b21a8] text-white" : "bg-slate-300 text-black" }`} onClick={() => setHealthAndSafety("daily")}>Daily</button>
            <button className={`block rounded p-2 ${(healthAndSafety === "weekly")? "bg-[#6b21a8] text-white" : "bg-slate-300 text-black" }`} onClick={() => setHealthAndSafety("weekly")}>Weekly</button>
            <button className={`block rounded p-2 ${(healthAndSafety === "monthly")? "bg-[#6b21a8] text-white" : "bg-slate-300 text-black" }`} onClick={() => setHealthAndSafety("monthly")}>Monthly</button>
        </header>

        {(healthAndSafety === "daily") &&
            <div className="mt-8 h-screen overflow-y-scroll scrollbar-thin">
                <p onClick={goBack} className='border-2 border-[#6b21a8] w-fit px-3 rounded animate-pulse text-[#6b21a8] cursor-pointer'>Back</p>
                <h5 className="text-center py-2 font-bold">Daily</h5>
        
                <form action="" method="post" className="mt-8 w-[80%] mx-auto mb-24">
                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Inspection location</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>

                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            {/* Service  */}
                            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                                <label className='w-full' htmlFor="service">Service</label>
                                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="service" id="service" />
                            </div>

                            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                                <label className='w-full' htmlFor="CompiledBy">Compiled by</label>
                                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="CompiledBy" id="CompiledBy" />
                            </div>

                            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                                <label className='w-full' htmlFor="staffLead">Staff lead</label>
                                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="staffLead" id="staffLead" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Fire and emergency precaution</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>

                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="service">Escape route</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="service" id="service">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="fire">Fire</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="fire" id="fire">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="fireAction" id="fireAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="emergencyLightning">Emergency lightning good</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="emergencyLightning" id="emergencyLightning">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="emergencyAction" id="emergencyAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="fireFighter">Extinguisher & fire fighter</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="fireFighter" id="fireFighter">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="fireFighterAction" id="fireFighterAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="secureFlammables">Flammable material secure</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="secureFlammables" id="secureFlammables">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="secureFlammablesAction" id="secureFlammablesAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="usedBatteryEvidence">Evidence of used battery and charger</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="usedBatteryEvidence" id="usedBatteryEvidence">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="usedBatteryEvidenceAction" id="usedBatteryEvidenceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Kitchen</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>

                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="kitchenClean">Kitchen is clean and tidy</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="kitchenClean" id="kitchenClean">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="cookerCndtn">Cooker/Extractor in good condition</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="cookerCndtn" id="cookerCndtn">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="floorNonSlippery">Floor are non-slippery and dry</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="floorNonSlippery" id="floorNonSlippery">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="adequateHandWashingFacilities">Adequate handwashing facilities</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="adequateHandWashingFacilities" id="adequateHandWashingFacilities">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="foodWasteInSuitableContainers">Food waste in suitable containers</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="foodWasteInSuitableContainers" id="foodWasteInSuitableContainers">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="fridgeFreezersWorking">Fridge and freezers are working</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="fridgeFreezersWorking" id="fridgeFreezersWorking">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Conditions of floor, stairs and corridors</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>

                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="FloorStairwaysAndCorridorClear">Floor, stairways and corridor clear</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="FloorStairwaysAndCorridorClear" id="FloorStairwaysAndCorridorClear">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="floorsFreeFromTrailingWires">Floors are free from trailing wires</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="floorsFreeFromTrailingWires" id="floorsFreeFromTrailingWires">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="floorCoveringsInGoodCondition">Floor coverings in good condition</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="floorCoveringsInGoodCondition" id="floorCoveringsInGoodCondition">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="secureHandrailsAndStairways">Secure handrails and stairways</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="secureHandrailsAndStairways" id="secureHandrailsAndStairways">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Toilet and washing facilities</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>

                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="bathroomCleanAndWorking">Bathroom clean and working</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="bathroomCleanAndWorking" id="bathroomCleanAndWorking">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="runningWater">Running water</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="runningWater" id="runningWater">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Security</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>

                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="CCTVinWorkingCondition">CCTV in working condition</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="CCTVinWorkingCondition" id="CCTVinWorkingCondition">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="HazardousItems">Hazardous items in surrounding</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="HazardousItems" id="HazardousItems">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Daily</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>
                        
                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="maintenanceHoursReported">Maintenance hours reported</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="maintenanceHoursReported" id="maintenanceHoursReported">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="refuseCollectedAndStoredCorrectly">Refuse collected and stored correctly</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="refuseCollectedAndStoredCorrectly" id="refuseCollectedAndStoredCorrectly">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="bg-[#622c98] rounded-md text-white block py-2 px-5 mt-4">Save</button>
                </form>    
            </div>
        }


        {(healthAndSafety === "weekly") &&
            <div className="mt-8 h-screen overflow-y-scroll scrollbar-thin">
                <p onClick={goBack} className='border-2 border-[#6b21a8] w-fit px-3 rounded animate-pulse text-[#6b21a8] cursor-pointer'>Back</p>
                <h5 className="text-center py-2 font-bold">Weekly</h5>
                <form action="" method="post" className="mt-8 w-[80%] mx-auto mb-24">
                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Fire and emergency precaution</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>

                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="smokeAlarmTestedWorking">Smoke alarm tested and working</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="smokeAlarmTestedWorking" id="smokeAlarmTestedWorking">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="firelAlarmWorking">Fire alarm points/system working</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="firelAlarmWorking" id="firelAlarmWorking">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="carbonMonoxideAlarmTested">Carbon monoxide alarm tested</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="carbonMonoxideAlarmTested" id="carbonMonoxideAlarmTested">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="chargingIndicatorOnEmergencyLightning">Charging indicator on emergency lightning</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="chargingIndicatorOnEmergencyLightning" id="chargingIndicatorOnEmergencyLightning">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="evidenceOfUsedBatteryAndCharger">Evidence of used battery and charger</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="evidenceOfUsedBatteryAndCharger" id="evidenceOfUsedBatteryAndCharger">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="washingMachineFilterCleaned">Washing machine filter cleaned</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="washingMachineFilterCleaned" id="washingMachineFilterCleaned">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="staffOfficeWaterFilterChanged">Water filter in staff office changed</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="staffOfficeWaterFilterChanged" id="staffOfficeWaterFilterChanged">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="charcoalFilterChangedToOvenhob">Charcoal filter changed to ovenhob</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="charcoalFilterChangedToOvenhob" id="charcoalFilterChangedToOvenhob">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Smoking</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>

                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="unnecessaryCombustibleMaterial">Unnecessary combustible material</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="unnecessaryCombustibleMaterial" id="unnecessaryCombustibleMaterial">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Ventilations and temperature</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>

                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="ventilationNotObstructed">Ventilation are not obstructed</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="ventilationNotObstructed" id="ventilationNotObstructed">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Lightning and light fittings</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>

                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="lightningLevelsAdequate">Lightning levels are adequate</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="lightningLevelsAdequate" id="lightningLevelsAdequate">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="lightsWorkingSatisfactorily">Lights are working satisfactorily</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="lightsWorkingSatisfactorily" id="lightsWorkingSatisfactorily">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Washing machine and dryer</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>

                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="lineFilterInTumbleDryer">Line filter in tumble dryer</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="lineFilterInTumbleDryer" id="lineFilterInTumbleDryer">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Kitchen</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>

                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="kitchenClean">Kitchen is clean and tidy</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="kitchenClean" id="kitchenClean">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="cookerInGoodCondition">Cooker/Extractor in good condition</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="cookerInGoodCondition" id="cookerInGoodCondition">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="fridgeWorking">Fridge and freezers are working</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="fridgeWorking" id="fridgeWorking">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Office area</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>

                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="sufficientSpaceForStaff">Staff have sufficient space</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="sufficientSpaceForStaff" id="sufficientSpaceForStaff">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="workAreaSuitable">Desk/work area suitable</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="workAreaSuitable" id="workAreaSuitable">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="seatLowerBacksupport">Seat lower back support</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="seatLowerBacksupport" id="seatLowerBacksupport">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Toilet and washing facilities</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>

                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="unusedWaterOutletFlushed">Unused water outlet flushed</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="unusedWaterOutletFlushed" id="unusedWaterOutletFlushed">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="showerheadsInGoodCondition">Showerheads in good condition</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="showerheadsInGoodCondition" id="showerheadsInGoodCondition">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="disposalOfSanitaryTowels">Provision/disposal of sanitary towels</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="disposalOfSanitaryTowels" id="disposalOfSanitaryTowels">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Electrical equipments</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>

                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="cableCoveringsInGoodConditions">Cable coverings in good conditions</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="cableCoveringsInGoodConditions" id="cableCoveringsInGoodConditions">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="electricalEquipmentInGoodCondition">Electrical equipment in good condition</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="electricalEquipmentInGoodCondition" id="electricalEquipmentInGoodCondition">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="powerSocketNotOverloaded">Power socket not overloaded</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="powerSocketNotOverloaded" id="powerSocketNotOverloaded">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Use of display screen equipment</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>

                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="workingEnvironmentSatisfactory">Working environment satisfactory</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="workingEnvironmentSatisfactory" id="workingEnvironmentSatisfactory">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="chairsInGoodCondition">Chairs in good condition/adjustable</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="chairsInGoodCondition" id="chairsInGoodCondition">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Control of substance hazardous to health</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>

                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="COSHHCupboardsSignedAndLocked">COSHH cupboards signed and locked</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="COSHHCupboardsSignedAndLocked" id="COSHHCupboardsSignedAndLocked">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="chairsInGoodCondition">Chairs in good condition/adjustable</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="chairsInGoodCondition" id="chairsInGoodCondition">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Posters and signs</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>

                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="firstAidArrangementPosters">First aid arrangement posters</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="firstAidArrangementPosters" id="firstAidArrangementPosters">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="employersInsuranceLiabilityShown">Employers insurance liability shown</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="employersInsuranceLiabilityShown" id="employersInsuranceLiabilityShown">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="healthSafetyLawPosterShown">Health and safety law poster shown</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="healthSafetyLawPosterShown" id="healthSafetyLawPosterShown">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Security</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>
                        
                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="entrancefreeFromObstruction">Entrance/exit free from obstruction</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="entrancefreeFromObstruction" id="entrancefreeFromObstruction">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="drainsWorking">Drains and water pipes working</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="drainsWorking" id="drainsWorking">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="noItemsToStartfire">No items to start fire</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="noItemsToStartfire" id="noItemsToStartfire">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="refuseCollectedStoreCorrectly">Refuse collected store correctly</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="refuseCollectedStoreCorrectly" id="refuseCollectedStoreCorrectly">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="securityLightningWorking">Security lightning is working</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="securityLightningWorking" id="securityLightningWorking">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>First aid checklist</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>
                        
                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="boxLocationOne">Box location 1</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="boxLocationOne" id="boxLocationOne">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberOfGuidanceLeaflet">Number of guidance leaflet</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberOfGuidanceLeaflet" id="numberOfGuidanceLeaflet">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberOfAdhesivePadsWithBandage">Number of adhesive pads with bandage</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberOfAdhesivePadsWithBandage" id="numberOfAdhesivePadsWithBandage">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberOfWrappedTriangularBandage">Number of wrapped triangular bandage</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberOfWrappedTriangularBandage" id="numberOfWrappedTriangularBandage">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberofMediumDressings">Number of medium dressings</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberofMediumDressings" id="numberofMediumDressings">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberofMediumDressings">Number of large dressings</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberofMediumDressings" id="numberofMediumDressings">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberOfSafetyPins">Number of safety pins</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberOfSafetyPins" id="numberOfSafetyPins">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="boxLocationTwo">Box location 2</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="boxLocationTwo" id="boxLocationTwo">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberOfGuidanceLeafletTwo">Number of guidance leaflet</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberOfGuidanceLeafletTwo" id="numberOfGuidanceLeafletTwo">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberOfAdhesiveDressingsTwo">Number of adhesive dressings</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberOfAdhesiveDressingsTwo" id="numberOfAdhesiveDressingsTwo">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberOfAdhesivePadsWithBandageTwo">Number of adhesive pads with bandage</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberOfAdhesivePadsWithBandageTwo" id="numberOfAdhesivePadsWithBandageTwo">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberOfWrappedTriangularBandageTwo">Number of wrapped triangular bandage</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberOfWrappedTriangularBandageTwo" id="numberOfWrappedTriangularBandageTwo">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberofMediumDressingsTwo">Number of medium dressings</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberofMediumDressingsTwo" id="numberofMediumDressingsTwo">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberofMediumDressingsTwo">Number of large dressings</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberofMediumDressingsTwo" id="numberofMediumDressingsTwo">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberOfSafetyPinsTwo">Number of safety pins</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberOfSafetyPinsTwo" id="numberOfSafetyPinsTwo">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="bg-[#622c98] rounded-md text-white block py-2 px-5 mt-4">Save</button>
                </form>
            </div>
        }


        {(healthAndSafety === "monthly") &&
            <div className="mt-8 h-screen overflow-y-scroll scrollbar-thin">
                <p onClick={goBack} className='border-2 border-[#6b21a8] w-fit px-3 rounded animate-pulse text-[#6b21a8] cursor-pointer'>Back</p>
                <h5 className="text-center py-2 font-bold">Monthly</h5>
                
                <form action="" method="post" className="mt-8 w-[80%] mx-auto mb-24">
                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Fire and emergency precaution</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>

                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                                <label className='w-full' htmlFor="doorSeals">Door seals and self closing devices</label>
                                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="doorSeals" id="doorSeals" />
                            </div>

                            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                                <label className='w-full' htmlFor="internalSelfClosingFiredoors">Internal self closing firedoors</label>
                                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="internalSelfClosingFiredoors" id="internalSelfClosingFiredoors" />
                            </div>

                            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                                <label className='w-full' htmlFor="emergencyLightningFunction">Emergency lightning function</label>
                                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="emergencyLightningFunction" id="emergencyLightningFunction" />
                            </div>

                            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                                <label className='w-full' htmlFor="evidenceOfUsedBattery">Evidence of used battery and charger</label>
                                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="evidenceOfUsedBattery" id="evidenceOfUsedBattery" />
                            </div>

                            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                                <label className='w-full' htmlFor="washingMachineFilterCleaned">Washing machine filter cleaned</label>
                                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="washingMachineFilterCleaned" id="washingMachineFilterCleaned" />
                            </div>

                            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                                <label className='w-full' htmlFor="waterDispenserCleaned">Water dispenser drip trays cleaned</label>
                                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="waterDispenserCleaned" id="waterDispenserCleaned" />
                            </div>

                            <div className='flex md:flex-row flex-col md:gap-0 sm:gap-4 gap-1 justify-between'>
                                <label className='w-full' htmlFor="freeSwingDoorsFitted">Auto hold open/free swing doors fitted</label>
                                <input className='border border-[#dedede] p-2 rounded-[4px] w-full' type="text" name="freeSwingDoorsFitted" id="freeSwingDoorsFitted" />
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Smoking</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>
                        
                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="sampleWaterTemperatureTest">Sample water temperature test</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="sampleWaterTemperatureTest" id="sampleWaterTemperatureTest">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="NoSmokingSign">No smoking sign displayed</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="NoSmokingSign" id="NoSmokingSign">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="furnitureComplaintsUpdated">Furniture complaints updated/closed</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="furnitureComplaintsUpdated" id="furnitureComplaintsUpdated">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="completedRepairsUpdated">Completed repairs updated/closed</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="completedRepairsUpdated" id="completedRepairsUpdated">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="addDecorationToMaintenance">Add decoration to maintenance</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="addDecorationToMaintenance" id="addDecorationToMaintenance">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Ventilations are not obstructed</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>
                        
                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="portalAppliancesTested">Portal appliances tested accurately</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="portalAppliancesTested" id="portalAppliancesTested">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Lightning and light fittings</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>
                        
                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="kitchenClean">Kitchen is clean and tidy</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="kitchenClean" id="kitchenClean">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="CookerInGoodCondition">Cooker/extractor in good condition</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="CookerInGoodCondition" id="CookerInGoodCondition">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="fridgeWorking">Fridge and freezers are working</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="fridgeWorking" id="fridgeWorking">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Washing machine and dryer</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>
                        
                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="staffHaveSufficientSpace">Staff have sufficient space</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="staffHaveSufficientSpace" id="staffHaveSufficientSpace">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="binsEmptiedRegularly">Bins are emptied regularly</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="binsEmptiedRegularly" id="binsEmptiedRegularly">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="workAreaSuitable">Desk/work area suitable</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="workAreaSuitable" id="workAreaSuitable">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="seatLowerBackSupport">Seat lower back support</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="seatLowerBackSupport" id="seatLowerBackSupport">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="roomsAdequatelyVentilated">Rooms are adequately ventilated</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="roomsAdequatelyVentilated" id="roomsAdequatelyVentilated">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="printerInGoodCondition">Photocopier/printer in good condition</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="printerInGoodCondition" id="printerInGoodCondition">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Kitchen</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>
                        
                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="kitchenClean">Kitchen is clean and tidy</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="kitchenClean" id="kitchenClean">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="CookerInGoodCondition">Cooker/extractor in good condition</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="CookerInGoodCondition" id="CookerInGoodCondition">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="fridgeWorking">Fridge and freezers are working</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="fridgeWorking" id="fridgeWorking">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Office area</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>
                        
                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="staffHaveSufficientSpace">Staff have sufficient space</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="staffHaveSufficientSpace" id="staffHaveSufficientSpace">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="workAreaSuitable">Desk/work area suitable</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="workAreaSuitable" id="workAreaSuitable">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="seatLowerBackSupport">Seat lower back support</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="seatLowerBackSupport" id="seatLowerBackSupport">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Toilet and washing facilities</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>
                        
                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="flushedUnusedWater">Unused water outlet flushed</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="flushedUnusedWater" id="flushedUnusedWater">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="showerheadsInGoodCondition">Showerheads in good condition</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="showerheadsInGoodCondition" id="showerheadsInGoodCondition">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="disposalOfSanitaryTowels">Provision/disposal of sanitary towels</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="disposalOfSanitaryTowels" id="disposalOfSanitaryTowels">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Electrical equipments</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>
                        
                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="cableCoveringsInGoodConditions">Cable coverings in good conditions</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="cableCoveringsInGoodConditions" id="cableCoveringsInGoodConditions">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="electricalEquipmentInGoodCondition">Electrical equipment in good condition</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="electricalEquipmentInGoodCondition" id="electricalEquipmentInGoodCondition">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="powerSocketNotOverloaded">Power socket not overloaded</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="powerSocketNotOverloaded" id="powerSocketNotOverloaded">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Use of display screen equipment</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>
                        
                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="workingEnvironmentSatisfactory">Working environment satisfactory</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="workingEnvironmentSatisfactory" id="workingEnvironmentSatisfactory">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="chairsInGoodCondition">Chairs in good condition/adjustable</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="chairsInGoodCondition" id="chairsInGoodCondition">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Control of substance hazardous to health</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>
                        
                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="COSHHCupboardsSignedAndLocked">COSHH cupboards signed and locked</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="COSHHCupboardsSignedAndLocked" id="COSHHCupboardsSignedAndLocked">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Posters and signs</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>
                        
                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="firstNoticeAndPosters">First notice and posters</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="firstNoticeAndPosters" id="firstNoticeAndPosters">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="firstExitAndOtherSignsInPlace">First exit and other signs in place</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="firstExitAndOtherSignsInPlace" id="firstExitAndOtherSignsInPlace">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="firstAidArrangmentPosters">First aid arrangment posters</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="firstAidArrangmentPosters" id="firstAidArrangmentPosters">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="employersInsuranceLiabilityShown">Employers insurance liability shown</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="employersInsuranceLiabilityShown" id="employersInsuranceLiabilityShown">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="healthSafetyLawPosterShown">Health and safety law poster shown</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="healthSafetyLawPosterShown" id="healthSafetyLawPosterShown">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Storage/shed</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>
                        
                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="itemsSafelyStored">Items are safely stored</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="itemsSafelyStored" id="itemsSafelyStored">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>Storage/shed</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>
                        
                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="entranceFreeFromObstruction">Entrance/exit free from obstruction</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="entranceFreeFromObstruction" id="entranceFreeFromObstruction">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="entranceInGoodCondition">Entrance area in good condition</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="entranceInGoodCondition" id="entranceInGoodCondition">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="CCTVInGoodCondition">CCTV in good working condition</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="CCTVInGoodCondition" id="CCTVInGoodCondition">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                            <h2 className='text-xl font-semibold'>First aid checklist</h2>
                            <img src={arrowUp} alt="Arrow" />
                        </header>
                        
                        <div className="flex flex-col gap-4 md:p-5 p-2">
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="boxLocationOne">Box location 1</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="boxLocationOne" id="boxLocationOne">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberOfGuidanceLeaflet">Number of guidance leaflet</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberOfGuidanceLeaflet" id="numberOfGuidanceLeaflet">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberOfAdhesivePadsWithBandage">Number of adhesive pads with bandage</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberOfAdhesivePadsWithBandage" id="numberOfAdhesivePadsWithBandage">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberOfWrappedTriangularBandage">Number of wrapped triangular bandage</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberOfWrappedTriangularBandage" id="numberOfWrappedTriangularBandage">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberofMediumDressings">Number of medium dressings</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberofMediumDressings" id="numberofMediumDressings">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberofMediumDressings">Number of large dressings</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberofMediumDressings" id="numberofMediumDressings">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberOfSafetyPins">Number of safety pins</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberOfSafetyPins" id="numberOfSafetyPins">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberOfMoistureCleaningWipes">Number of moisture cleaning wipes</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberOfMoistureCleaningWipes" id="numberOfMoistureCleaningWipes">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="boxLocationTwo">Box location 2</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="boxLocationTwo" id="boxLocationTwo">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberOfGuidanceLeafletTwo">Number of guidance leaflet</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberOfGuidanceLeafletTwo" id="numberOfGuidanceLeafletTwo">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberOfAdhesiveDressingsTwo">Number of adhesive dressings</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberOfAdhesiveDressingsTwo" id="numberOfAdhesiveDressingsTwo">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberOfAdhesivePadsWithBandageTwo">Number of adhesive pads with bandage</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberOfAdhesivePadsWithBandageTwo" id="numberOfAdhesivePadsWithBandageTwo">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberOfWrappedTriangularBandageTwo">Number of wrapped triangular bandage</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberOfWrappedTriangularBandageTwo" id="numberOfWrappedTriangularBandageTwo">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberofMediumDressingsTwo">Number of medium dressings</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberofMediumDressingsTwo" id="numberofMediumDressingsTwo">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberofMediumDressingsTwo">Number of large dressings</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberofMediumDressingsTwo" id="numberofMediumDressingsTwo">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                                <div className='flex md:flex-row flex-col sm:gap-4 md:gap-8 gap-1 justify-between w-full'>
                                    <label htmlFor="numberOfSafetyPinsTwo">Number of safety pins</label>
                                    <select className='border border-[#dedede] p-2 rounded-[4px] w-full block' name="numberOfSafetyPinsTwo" id="numberOfSafetyPinsTwo">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                        <option value="notApplicable">N/A</option>
                                    </select>
                                </div>

                                <div className='flex w-full gap-4 relative'>
                                    <p>Action</p>
                                    <input className='border border-[#dedede] p-2 rounded-[4px] w-full block' type="text" name="serviceAction" id="serviceAction" />
                                    <div className='group'>
                                        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3 7.29c.2-.18.44-.29.7-.29c.27 0 .5.11.71.29c.19.21.29.45.29.71c0 .27-.1.5-.29.71c-.21.19-.44.29-.71.29c-.26 0-.5-.1-.7-.29c-.19-.21-.3-.44-.3-.71c0-.26.11-.5.3-.71m-2.5 4.68s2.17-1.72 2.96-1.79c.74-.06.59.79.52 1.23l-.01.06c-.14.53-.31 1.17-.48 1.78c-.38 1.39-.75 2.75-.66 3c.1.34.72-.09 1.17-.39c.06-.04.11-.08.16-.11c0 0 .08-.08.16.03c.02.03.04.06.06.08c.09.14.14.19.02.27l-.04.02c-.22.15-1.16.81-1.54 1.05c-.41.27-1.98 1.17-1.74-.58c.21-1.23.49-2.29.71-3.12c.41-1.5.59-2.18-.33-1.59c-.37.22-.59.36-.72.45c-.11.08-.12.08-.19-.05l-.03-.06l-.05-.08c-.07-.1-.07-.11.03-.2M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8"/></svg>

                                        <div className="flex flex-col absolute z-30 left-0 top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#6b21a8] border-l-8 border-l-transparent"></div>
                                            <p className="bg-[#6b21a8] p-1 text-white border-e-[#6b21a8] border-e-[2px] rounded-lg rounded-e-none">Are escape route signed, fire doors and exits marked clearly, kept clear and wide open</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="bg-[#622c98] rounded-md text-white block py-2 px-5 mt-4">Save</button>
                </form>
            </div>
        }
    </div>
  )
}

export default HealthAndSafety
