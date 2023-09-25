


import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const PsychologistList = () => {
    const navigate = useNavigate();
    const { fetchPsychologists } = useContext(AppContext);
    const { psychologists } = useContext(AppContext);
    const [averageRatings, setAverageRatings] = useState({});

    useEffect(() => {
        fetchPsychologists();
    }, []);

    // Fetch average ratings and ratings count for psychologists
    useEffect(() => {
        async function getAverageRatings() {
            try {
                const ratings = {};
                for (const psychologist of psychologists) {
                    if (psychologist && psychologist._id) {
                        const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/getAverageRating/${psychologist._id}`);
                        ratings[psychologist._id] = data;
                    }
                }
                setAverageRatings(ratings);
            } catch (error) {
                console.log(error);
            }
        }
        getAverageRatings();
    }, [psychologists]);

    const handleProfileClick = (id) => {
        navigate(`/expertDetail/${id}`);
    };

    return (
        <>
            {/* psychologists lists */}
            {/* horizontal card */}
            {psychologists.length > 0 &&
                psychologists.map((element, index) => {
                    const { firstName, lastName, image } = element;
                    const averageRating = averageRatings[element._id]?.averageRating || 0;
                    const numRatings = averageRatings[element._id]?.numRatings || 0;

                    return (
                        <div key={index}>
                            <div className="card container shadow-lg border-0 mt-4 p-3">
                                <div className="row g-0">
                                    <div className="col-md-2">
                                        <img src={image} className="img-fluid rounded-start" alt="..." loading="lazy" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{firstName + ' ' + lastName}</h5>
                                            <h6>® Certified & Verified</h6>
                                            <h6>® Counselling Psychologist</h6>
                                            <p className="lead">
                                                <small>{element.language}</small>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex align-items-center">
                                        <div
                                            className="border border-secondary bg-white pt-2 pb-2 pe-4 ps-4 rounded text-center"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => handleProfileClick(element._id)}
                                        >
                                            <Link className="text-decoration-none" to={`/expertDetail/${element._id}`}>
                                                See the full profile
                                            </Link>
                                            <br />
                                            <span>
                                                <FaStar color="green" /> {averageRating.toFixed(1)} ({numRatings} ratings)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </>
    );
};

export default PsychologistList;
