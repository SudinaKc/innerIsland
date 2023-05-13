import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="color1">
      <div className="custom_container pt-6rem pb-4rem ">
        <div className=" d-flex row align-items-center gx-5">
          <div className="col-lg-7">
            <h1 className="display-2 heading1">Discover Your Inner Island of Support</h1>
            <p className="lead py-3 para1">
              Welcome to InnerIsland, your oasis of empathy and
              <br />
              support on your transformative journey towards mental <br />
              well-being - find solace, guidance, and renewed hope on <br />
              your personal inner island.
            </p>
            <Link to="/services" className="btn btn-success btn-rounded button">
              View All Services
            </Link>
          </div>
          <div className="col-lg-5">
            <img
              src="https://10web-site.ai/75/wp-content/uploads/sites/87/2023/05/dose-juice-sTPy-oeA3h0-unsplash_Ws5832BD.webp"
              className="img rounded"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
