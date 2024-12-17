import { useNavigate } from "react-router-dom"


const CreateTimeSheet = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
    <div>
        <h1>Create timesheets</h1>

        <button onClick={goBack} className='border-2 border-[#6b21a8] w-fit px-3 rounded bg-[#6b21a8] text-white cursor-pointer mt-12 mx-4'>Back</button>


    </div>
    )
}

export default CreateTimeSheet
