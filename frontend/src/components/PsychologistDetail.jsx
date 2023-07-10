import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
const PsychologistDetail = ({ id }) => {
    const { psychologistDetail } = useContext(AppContext);
    const { fetchPsychologistDetail } = useContext(AppContext);
    useEffect(() => {
        fetchPsychologistDetail(id);
    }, [id]);
    console.log(psychologistDetail)
    return (
        <div>
            <h1>{psychologistDetail.firstName + " " + psychologistDetail.lastName}</h1>

            <h1>psychologist detail</h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis nihil, suscipit atque at, ea hic nesciunt maiores aliquid quidem corporis minima itaque ipsam ducimus odit ex dicta iure rem? Illum.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa sit harum ut consectetur porro, explicabo quos maxime unde eveniet. Minima pariatur esse dignissimos nisi corporis eveniet perferendis recusandae ducimus exercitationem.
            <br />
            <br />
            <h1>My expertise</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nam aperiam tempora placeat. Quasi eligendi tempore omnis nihil quo harum dignissimos molestiae. Iure illum quo distinctio corporis minima consectetur esse.
            <br />
            <hr />
            <div className="d-flex justify-content-evenly">
                <div className="d-flex flex-column">
                    Chat/Audio/Video
                    <br />
                    Provides Counselling and therapy via
                    <br /> Audio Phone Call, Video Call, Chat.
                </div>
                <div className="d-flex flex-column">
                    Availability <br />
                    10 – 7 pm IST  ( Mon-Sat ) <br />
                    *Flexible with Timings*
                </div>
                <div className="d-flex flex-column">
                    Verified Psychologist
                    <br />
                    ☑ Certified Psychologist
                    <br />
                    ☑ Experienced Psychologist
                    <br />
                    ☑ Trained at innerIsland
                </div>

            </div>
            <br />
            <br /><br />
           
        </div>
    )
}

export default PsychologistDetail
PsychologistDetail.propTypes = {
    id: PropTypes.string.isRequired,
};