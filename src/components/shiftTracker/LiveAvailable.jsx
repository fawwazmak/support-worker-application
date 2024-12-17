import { useNavigate } from "react-router-dom"

const LiveAvailable = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    const logs = [
        {timeSheetNo: "420536", customer: "CENGREE01", weekCommencing: "15/12/2023", totalHour: "14:35", status: "Not submitted",},
        {timeSheetNo: "420537", customer: "CENGREE01", weekCommencing: "15/12/2023", totalHour: "14:35", status: "Pending",},
        {timeSheetNo: "420538", customer: "CENALBE01", weekCommencing: "15/12/2023", totalHour: "14:35", status: "Pending",},
        {timeSheetNo: "420539", customer: "CENGREE01", weekCommencing: "15/12/2023", totalHour: "14:35", status: "Not submitted",},
        {timeSheetNo: "421536", customer: "CENWOOD01", weekCommencing: "15/12/2023", totalHour: "14:35", status: "Pending",},
        {timeSheetNo: "421537", customer: "CENQUEE01", weekCommencing: "15/12/2023", totalHour: "14:35", status: "Aprroved",},
        {timeSheetNo: "421538", customer: "CENGREE01", weekCommencing: "15/12/2023", totalHour: "14:35", status: "Approved",},
    ]

    return (
        <div>
            <h1>Live Available shifts</h1>

            <button onClick={goBack} className='border-2 border-[#6b21a8] w-fit px-3 rounded bg-[#6b21a8] text-white cursor-pointer mt-12 mx-4'>Back</button>

            <div className="w-full overflow-x-scroll lg:overflow-x-hidden font-poppins">
            <table className='border-separate border-spacing-2 md:border-spacing-1 w-full mt-16 border rounded-[5px] text-center'>
                <thead className="bg-purple-800 text-white">
                    <tr>
                        <th className='p-2'>Timesheet No.</th>
                        <th className='p-2'>Customer</th>
                        <th className='p-2'>Week commencing</th>
                        <th className='p-2'>Total hours</th>
                        <th className='p-2'>Status</th>
                    </tr>
                </thead>
                <tbody className='font-medium'>
                {logs.map((log) =>
                    <tr key={log.timeSheetNo}>
                        <td className='whitespace-nowrap'>{log.timeSheetNo}</td>
                        <td className='whitespace-nowrap'>{log.customer}</td>
                        <td className='whitespace-nowrap'>{log.weekCommencing}</td>
                        <td className='whitespace-nowrap'>{log.totalHour}</td>
                        <td className='whitespace-nowrap'>{log.status}</td>
                    </tr>
                )}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default LiveAvailable
