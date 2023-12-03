
const About = () => {
  return (
    <div>
      <div className="container mt-5">
        <h1 className="display-4 text-center text-success mb-4">About Us</h1>
        <div className="row">
          <div className="col-md-6">
            <p className="lead text-success">
              Welcome to InnerIsland, your trusted online platform for mental health care and support.
              Our mission is to provide a safe and nurturing environment where individuals can find
              guidance, therapy, and resources to enhance their mental well-being.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://placeimg.com/400/400/people"
              alt="Team"
              className="img-fluid rounded-circle"
            />
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-success">Our Team</h2>
          <p>
            At InnerIsland, we have a dedicated team of experienced psychologists and therapists who
            are committed to helping you on your journey to better mental health. Our team is passionate
            about providing personalized care and support tailored to your unique needs.
          </p>
        </div>

        <div className="mt-5">
          <h2 className="text-success">Our Services</h2>
          <p>
            We offer a wide range of services, including individual therapy sessions, group therapy,
            online courses, and resources to help you manage stress, anxiety, depression, and more.
            Whether you're seeking one-on-one counseling or looking to connect with others in a supportive
            community, InnerIsland has something for you.
          </p>
        </div>

        <div className="mt-5">
          <h2 className="text-success">Contact Us</h2>
          <p>
            If you have any questions or need assistance, please don't hesitate to reach out to our
            friendly support team. We're here to help you on your journey to better mental health.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
