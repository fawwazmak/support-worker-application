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
            <div className="mt-8 h-full overflow-y-scroll scrollbar-thin">
                <p onClick={goBack} className='border-2 border-[#6b21a8] w-fit px-3 rounded animate-pulse text-[#6b21a8] cursor-pointer'>Back</p>
                <h5 className="text-center py-2 font-bold">Daily</h5>
        
                <form action="" method="post" className="mt-8 w-[80%] mx-auto mb-24">
                    <div className="flex flex-col gap-8 border border-[#F9F2FF] pb-4 bg-[#f9f9f9]">
                        <header className="flex sticky top-12 justify-between bg-[#F9F2FF] p-5 rounded-t-[8px]">
                        <h2>Inspection location</h2>
                        <img src={arrowUp} alt="Arrow" />
                        </header>
                    </div>

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
                </form>    
            </div>
        }


        {(healthAndSafety === "weekly") && 
            <>
                <p>Weekly</p>
            </>
        }


        {(healthAndSafety === "monthly") &&
            <>
                <p>Monthly</p>
            </>
        }
    </div>
  )
}

export default HealthAndSafety
