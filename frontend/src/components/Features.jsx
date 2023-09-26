const Feature = () => {
  return (
    <div className="container">
      <div
        className="flex-lg-row d-flex flex-column justify-content-center align-items-center w-100"
        style={{ height: "80vh" }}
      >

        <div className="d-flex flex-row gap-5 w-lg-50 col-12 justify-content-center align-items-center mb-2 ">
          <div className="col-lg-3 col-6">
            <h1 className="fw-bold display-1">4.8</h1>
            <p className="fw-bolder" >2,394 Ratings</p>
            <p className="fw-bolder">Google Reviews</p>
          </div>
          <div className="col-lg-3 ">
            <h1 className="fw-bold display-1" >A+</h1>
            <p className="fw-bolder">125 Reviews</p>
            <p className="fw-bolder">BBB Rating</p>
          </div>
        </div>


        <div className=" col-lg-6 col-12 text-center">
          <h1 className="fw-semibold display-6">
            Trusted by numerous Mental health seekers
          </h1>
          <p className="lead text-success">Jessica Simon</p>
          <p className="lead">
            InnerIsland is a sanctuary of comfort and understanding, providing a
            multitude of resources and a welcoming community to support mental
            well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;




