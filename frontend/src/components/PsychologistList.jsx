import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
const PsychologistList = () => {
    const navigate = useNavigate();

    const handleProfileClick = (id) => {
        navigate(`/expertDetail/${id}`);
    };

    // consume from context api

    const { fetchPsychologists } = useContext(AppContext);
    useEffect(() => {
        fetchPsychologists();
    }, []);
    const { psychologists } = useContext(AppContext);

    return (
        <>

            {/* psychologists lists */}
            {/* horizontal card */}

            {
                psychologists.map((element, index) => {
                    // destructing to get firstName,lastName,image
                    const { firstName, lastName, image } = element;
                    return <div key={index}>
                        <div className="card  container  shadow-lg border-0 mt-4 p-3" >
                            <div className="row g-0 ">
                                <div className="col-md-2">
                                    <img src={image} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {firstName + ' ' + lastName}
                                        </h5>
                                        <h6> ® Certified & Verified</h6>

                                        <h6>
                                            ® Counselling Psychologist
                                        </h6>
                                        <p className="lead">
                                            <small>
                                                {element.language}
                                            </small>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-2 d-flex align-items-center" >
                                    <div className="border border-secondary bg-white pt-2 pb-2 pe-4 ps-4 rounded text-center  " style={{ cursor: "pointer" }}
                                        onClick={() => handleProfileClick(element._id)}
                                    >
                                        <Link className="text-decoration-none" to={`/expertDetail/${element._id}`}>see the full <br />
                                            <span>
                                                profile
                                            </span>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                })
            }






        </>

    )
}

export default PsychologistList