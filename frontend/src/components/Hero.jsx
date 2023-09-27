import { Link } from "react-router-dom";
import BannerVideo from "../assets/banner-video.mp4";
const Hero = () => {
  return (
    <div className="color1">
      <div className="container pt-6rem pb-4rem ">
        <div className=" d-flex row align-items-center gx-5">
          <div className="col-lg-7">
            <h1 className="display-2 heading1">Discover Your
              <br />
              Inner Island of
              <br />
              Support</h1>
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
          <div className="col-lg-5 mt-md-5 mt-sm-5 mt-5">
            {/* <img
              src="https://10web-site.ai/75/wp-content/uploads/sites/87/2023/05/dose-juice-sTPy-oeA3h0-unsplash_Ws5832BD.webp"
              className="img rounded"
              alt=" Image"
            /> */}
            <video muted loop autoPlay className="w-100 rounded-2"
              // style={{boxShadow:"15px 15px 0px 0px rgba(20,152,92,0.65)"}}
              style={{ boxShadow: "15px 15px 400px 1px rgba(20,152,92,0.32)" }}
            >
              <source src={BannerVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


