import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Upcoming = () => {
    const navigate = useNavigate();
    
    const goBack = () => {
        navigate(-1)
    }

    const logs = [
        {id: "001", dayDate: "Monday 15/12/2023", status: ["Worked", "NotWorked"], startTime: "08-00", endTime: "08-00", },
        {id: "002", dayDate: "Tuesday 16/12/2023", status: ["Worked", "NotWorked"], startTime: "08-00", endTime: "08-00", },
        {id: "003", dayDate: "Wednesday 17/12/2023", status: ["Worked", "NotWorked"], startTime: "08-00", endTime: "08-00", },
        {id: "004", dayDate: "Thursday 18/12/2023", status: ["Worked", "NotWorked"], startTime: "08-00", endTime: "08-00", },
        {id: "005", dayDate: "Friday 19/12/2023", status: ["Worked", "NotWorked"], startTime: "08-00", endTime: "08-00", },
        {id: "006", dayDate: "Saturday 20/12/2023", status: ["Worked", "NotWorked"], startTime: "08-00", endTime: "08-00", },
        {id: "007", dayDate: "Sunday 21/12/2023", status: ["Worked", "NotWorked"], startTime: "08-00", endTime: "08-00",},
    ]

    const [editableLogs, setEditableLogs] = useState(
        logs.map((log) => ({
          id: log.id,
          dayDate: log.dayDate,
          status: log.status[0],
          startTime: log.startTime,
          endTime: log.endTime,
        }))
      );
    
      const handleFieldChange = (id, field, value) => {
        setEditableLogs((prevLogs) =>
          prevLogs.map((log) =>
            log.id === id ? { ...log, [field]: value } : log
          )
        );
      };
    
      const handleSubmit = (e, id) => {
        e.preventDefault();
        const updatedLog = editableLogs.find((log) => log.id === id);
        console.log("Submitting row:", updatedLog);
      };

    return (
        <div>
            <h1>Upcoming</h1>

            <button onClick={goBack} className='border-2 border-[#6b21a8] w-fit px-3 rounded bg-[#6b21a8] text-white cursor-pointer mt-12 mx-4'>Back</button>

            <div className="w-full overflow-x-scroll lg:overflow-x-hidden font-poppins">
            <table className='border-separate border-spacing-2 md:border-spacing-1 w-full mt-16 border rounded-[5px] text-center'>
                <thead className="bg-purple-800 text-white">
                    <tr>
                        <th className='p-2'>Day / date</th>
                        <th className='p-2'>Status</th>
                        <th className='p-2'>Start time</th>
                        <th className='p-2'>End time</th>
                        <th className='p-2'> </th>
                    </tr>
                </thead>
                <tbody className="font-medium">
                    {editableLogs.map((log) => (
                        <tr key={log.id}>
                            <td className="whitespace-nowrap">{log.dayDate}</td>
                            <td className="whitespace-nowrap">
                                <select
                                name="status"
                                value={log.status}
                                onChange={(e) =>
                                    handleFieldChange(log.id, "status", e.target.value)
                                }
                                >
                                <option value={logs.find(l => l.id === log.id).status[0]}>
                                    {logs.find(l => l.id === log.id).status[0]}
                                </option>
                                <option value={logs.find(l => l.id === log.id).status[1]}>
                                    {logs.find(l => l.id === log.id).status[1]}
                                </option>
                                </select>
                            </td>
                            <td className="whitespace-nowrap">
                                <input
                                type="time"
                                value={log.startTime}
                                onChange={(e) =>
                                    handleFieldChange(log.id, "startTime", e.target.value)
                                }
                                />
                            </td>

                            <td className="whitespace-nowrap">
                                <input
                                type="time"
                                value={log.endTime}
                                onChange={(e) =>
                                    handleFieldChange(log.id, "endTime", e.target.value)
                                }
                                />
                            </td>
                            <td className="whitespace-nowrap">
                                <form onSubmit={(e) => handleSubmit(e, log.id)}>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#6b21a8] text-white rounded"
                                >
                                    Submit
                                </button>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Upcoming;