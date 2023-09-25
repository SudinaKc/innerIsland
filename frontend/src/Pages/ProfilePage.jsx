import { useSelector } from "react-redux";
import PatientProfile from "../components/PatientProfile";
import PsychologistProfile from "../components/PsychologistProfile";
const ProfilePage = () => {

    const { user } = useSelector((state) => state.user);


    return (
        <div style={{height:"100vh"}}>
            {
                user.user.userType == "expert" ? (

                    <PsychologistProfile user={user} />

                ) : (

                    <PatientProfile user={user} />
                )
            }
        </div>
    )
}

export default ProfilePage