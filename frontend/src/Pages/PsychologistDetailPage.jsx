import { useParams } from "react-router-dom";
import AppointmentForm from "../components/AppointmentForm";
import PsychologistDetail from "../components/PsychologistDetail";

const PsychologistDetailPage = () => {
    const { id } = useParams();
    // console.log(id) working
    return (
        <div>

            <PsychologistDetail id={id} />
            <AppointmentForm />
        </div>
    )
}

export default PsychologistDetailPage