import { useNavigate } from "react-router-dom"

const Completed = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  const logs = [
      {cusCode: "001", projectName: "Cecil House", jobTitle: "Annual Leave", shiftDate: "15/12/2023", startTime: "14:35", endTime: "18:15", sleepIn: "Yes", type: "Early"},
      {cusCode: "002", projectName: "Cecil House", jobTitle: "Annual Leave", shiftDate: "15/12/2023", startTime: "14:35", endTime: "18:15", sleepIn: "Yes", type: "Early"},
      {cusCode: "003", projectName: "Cecil House", jobTitle: "Annual Leave", shiftDate: "15/12/2023", startTime: "14:35", endTime: "18:15", sleepIn: "Yes", type: "Early"},
      {cusCode: "004", projectName: "Cecil House", jobTitle: "Annual Leave", shiftDate: "15/12/2023", startTime: "14:35", endTime: "18:15", sleepIn: "Yes", type: "Early"},
      {cusCode: "005", projectName: "Cecil House", jobTitle: "Annual Leave", shiftDate: "15/12/2023", startTime: "14:35", endTime: "18:15", sleepIn: "Yes", type: "Early"},
      {cusCode: "006", projectName: "Cecil House", jobTitle: "Annual Leave", shiftDate: "15/12/2023", startTime: "14:35", endTime: "18:15", sleepIn: "Yes", type: "Early"},
      {cusCode: "007", projectName: "Cecil House", jobTitle: "Annual Leave", shiftDate: "15/12/2023", startTime: "14:35", endTime: "18:15", sleepIn: "Yes", type: "Early"},
  ]

  return (
    <div>
      <h1>Completed Logs</h1>

      <button onClick={goBack} className='border-2 border-[#6b21a8] w-fit px-3 rounded bg-[#6b21a8] text-white cursor-pointer mt-12 mx-4'>Back</button>

      <div className="w-full overflow-x-scroll lg:overflow-x-hidden font-poppins">
        <table className='border-separate border-spacing-2 md:border-spacing-1 w-full mt-16 border rounded-[5px] text-center'>
          <thead className="bg-purple-800 text-white">
              <tr>
                  <th className='p-2'>Customer code</th>
                  <th className='p-2'>Name of Project</th>
                  <th className='p-2'>Job title</th>
                  <th className='p-2'>Shift date</th>
                  <th className='p-2'>Start time</th>
                  <th className='p-2'>End time</th>
                  <th className='p-2'>Sleep in</th>
                  <th className='p-2'>Type</th>
              </tr>
          </thead>
          <tbody className='font-medium'>
            {logs.map((log) =>
                <tr key={log.cusCode}>
                  <td className='whitespace-nowrap'>{log.cusCode}</td>
                  <td className='whitespace-nowrap'>{log.projectName}</td>
                  <td className='whitespace-nowrap'>{log.jobTitle}</td>
                  <td className='whitespace-nowrap'>{log.shiftDate}</td>
                  <td className='whitespace-nowrap'>{log.startTime}</td>
                  <td className='whitespace-nowrap'>{log.endTime}</td>
                  <td className='whitespace-nowrap'>{log.sleepIn}</td>
                  <td className='whitespace-nowrap'>{log.type}</td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Completed
