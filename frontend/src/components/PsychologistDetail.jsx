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
    // const {expertise}=psychologistDetail
    return (
        <div className='container'>
            <h1>{psychologistDetail.firstName + " " + psychologistDetail.lastName}</h1>

            <h1>psychologist detail</h1>
          <p>--------</p>
            <br />
            <br />
            <h1>My expertise</h1>
            <p>----------</p>
            {/* {
                expertise.map((e,index)=>(
                    <div key={index}>
                        <p>{e}</p>
                    </div>
                ))
            } */}
            <br />
            <hr />
            <div className="d-flex justify-content-evenly">
                <div className="d-flex flex-column">
                    Audio/Video
                    <br />
                    Provides Counselling and therapy via
                    <br /> Audio Phone Call, Video Call
                </div>
                <div className="d-flex flex-column">
                    Availability <br />
                    {/* 10 – 7 pm IST  ( Mon-Sat ) <br /> */}
                    {/* *Flexible with Timings* */}
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