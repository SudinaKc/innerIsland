import { Link } from "react-router-dom"
const Psychologist = () => {
    return (
        <>

            {/* psychologists lists */}
            {/* horizontal card */}
            <div>
                <div className="card  container  shadow-lg border-0 mt-4 p-3" >
                    <div className="row g-0 ">
                        <div className="col-md-2">
                            <img src="https://www.manastha.com/wp-content/uploads/2023/01/Best-online-counselor-Sonal-Sareen-Manastha.png" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Ms. Sonal Sareen</h5>
                                <h6> ® Certified & Verified</h6>
                                <p className="card-text">☑ Top Clinical Psychologist in Chhattisgarh <br />
                                    ☑ RCI Clinical Psychologist <br />
                                    ® Prime Psychologist</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="col-md-2 d-flex align-items-center" >
                            <div className="border border-secondary bg-white pt-2 pb-2 pe-4 ps-4 rounded text-center  " style={{cursor:"pointer"}}>
                                <Link className="text-decoration-none" to={"#"}>see the full <br />
                                    <span>
                                        profile
                                    </span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            
        </>

    )
}

export default Psychologist