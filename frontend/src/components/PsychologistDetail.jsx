
import axios from 'axios';
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';
import AppointmentForm from './AppointmentForm';

const PsychologistDetail = ({ id }) => {
  const { user } = useSelector((state) => state.user);
  console.log(user)
  const userId = user?.user?._id;
  const navigate = useNavigate()
  const { psychologistDetail } = useContext(AppContext);
  const { fetchPsychologistDetail } = useContext(AppContext);
  const [review, setReview] = useState('');
  const [toggleEdit, setToggleEdit] = useState(false)
  const [rating, setRating] = useState(0);
  const [allratings, setAllratings] = useState([]);
  const handleRating = (rate) => {
    setRating(rate);
  };
  const [ratingUpdate, setRatingUpdate] = useState(0)
  const [reviewUpdate, setReviewUpdate] = useState("");


  async function reviewSubmitHandler() {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/createRating`, {
        rating,
        review,
        psychologistId: id,
        userId,
      });
      console.log('Rating/review saved to db');
      console.log(response);

      // Clear rating and review input fields
      setRating(0);
      setReview('');

      // Fetch updated reviews
      await fetchReview(id);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPsychologistDetail(id);
  }, [id]);

  // FETCH INDIVIDUAL REVIEWS
  const fetchReview = async (id) => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/getRating/${id}`);
      const { ratingsAndReviews } = data;
      console.log(ratingsAndReviews)

      setAllratings(ratingsAndReviews);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchReview(id);
  }, [rating, review]);

  const alreadyRated = allratings.filter((ele) => {
    // setReviewUpdate(alreadyRated[0].review)
    return ele?.userId?._id == userId && ele?.psychologistId == id
  })
  console.log(alreadyRated[0])
  // *****************************************************************************************

  async function reviewUpdateHandler() {
    try {
      const response = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/api/updateRating`, {
        id: alreadyRated[0]._id,
        review,
        rating
      })
      toast.success("review updated successfully")
      await fetchReview(id)
    } catch (error) {
      console.log(error)
    }

  }

const [visible,setVisible]=useState(true)
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="mb-4">
            {psychologistDetail.firstName + ' ' + psychologistDetail.lastName}
          </h1>
          <img src={psychologistDetail.image} alt="" className="img-fluid rounded-circle mb-4 object-fit-contain" width={300} height={300} />

          <p><strong>Specialization:</strong> {psychologistDetail.specialization}</p>
          <p><strong>Qualification:</strong> {psychologistDetail.qualification}</p>
        </div>
        <div className="col-md-6">
          <h2>Psychologist Details</h2>
          <div className="card mb-3">
            <div className="card-body">
              <p><strong>Audio/Video</strong></p>
              <p>Provides Counselling and therapy via Audio Phone Call, Video Call</p>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <p><strong>Availability</strong></p>
              <p>{psychologistDetail.availability}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <p><strong>Verified Psychologist</strong></p>
              <ul>
                <li>☑ Certified Psychologist</li>
                <li>☑ Experienced Psychologist</li>
                <li>☑ Trained at innerIsland</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <span style={{ color: "green" }}>Session per hour :Rs.</span> <span className='fw-bold'>{psychologistDetail.price}</span>
        </div>
      </div>
      {
        user &&
        user.user.userType !== "expert" &&
        <div className="col-md-12 mt-4">

          <h2>Book an Appointment</h2>
          {
            user &&
            <AppointmentForm id={id} price={psychologistDetail.price} />

          }
        </div>

      }
      {
        !user &&
        <div className="col-md-12 mt-4">

          <button
            className="btn btn-success"
            onClick={() => {
              toast.error("login to book Appointment")
              navigate("/login")
            }
            }
          >
            Book Appointment
          </button>

        </div>

      }


      <hr className="my-4" />

      <div className="row">
        {
          user &&
          !alreadyRated &&
          user.user.userType !== "expert" &&
          <div className="col-md-6">
            <h2>Rate and Review</h2>
            <div className="mb-4">
              <Rating
                onClick={handleRating}
                initialValue={rating}
                fillColor="green"
                size={30}
              />
            </div>
            <div className="mb-4">
              <h4>Write a Review</h4>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Write a review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </div>
            <button
              className="btn btn-success"
              onClick={reviewSubmitHandler}
            >
              Save Review
            </button>
          </div>
        }

        {/* edit option if already rated  */}
        {
          user &&
          alreadyRated &&
          toggleEdit &&
          user.user.userType !== "expert" &&
          <div className="col-md-6 " style={visible ? {  } : {visibility: "hidden"}} >
            <h2>Rate and Review</h2>

            <div className="mb-4">
              <Rating
                onClick={handleRating}
                initialValue={rating}
                fillColor="green"
                size={30}

              />
            </div>
            <div className="mb-4">
              <h4>Edit your Review</h4>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Write a review"
                // value={reviewUpdate}
                // onChange={(e) => setReviewUpdate(e.target.value)}
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </div>
            <button
              className="btn btn-success"
              onClick={
                () => {
                  reviewUpdateHandler()
                  // setToggleEdit((prev) => !prev)
                  // window.location.reload()
                  // setVisible(false)
                  setToggleEdit(false)


                }
              }
            >
              update Review
            </button>
          </div>
        }



        {/* display if not logged in  */}
        {
          !user &&
          <div className="col-md-6">
            <h2>Rate and Review</h2>
            <div className="mb-4">
              <Rating
                onClick={handleRating}
                initialValue={rating}
                fillColor="green"
                size={30}
              />
            </div>
            <div className="mb-4">
              <h4>Write a Review</h4>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Write a review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </div>
            <button
              className="btn btn-success"
              onClick={() => {
                toast.error("login to give review")
                navigate("/login")
              }
              }
            >
              Save Review
            </button>
          </div>
        }

        {/* dont display if alresy rated  */}


        {/* display all reviews */}
        <div className="col-md-6">
          <h2>Reviews</h2>
          {allratings.length > 0 ? (
            allratings.map((ele, index) => (
              <div key={index} className="card mb-4">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <strong>{ele?.userId?.firstName}</strong> {new Date(ele?.createdAt).toLocaleDateString()}
                      {
                        ele?.userId?._id == userId &&
                        <button className='ms-4' onClick={() => {

                          // setReviewUpdate(alreadyRated[0].review)
                          setReview(alreadyRated[0].review)
                          setRating(alreadyRated[0].rating)
                          // setToggleEdit((prev) => !prev)
                          setToggleEdit(true)

                        }

                        }>edit</button>

                      }
                    </div>
                    <div className="text-warning">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < ele.rating ? (
                            <AiFillStar color='green' size={24} />
                          ) : (
                            <AiOutlineStar color='green' size={24} />
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-3">{ele.review}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No ratings yet</p>
          )}
        </div>
      </div>

      {/* Place the AppointmentForm component here */}

    </div>
  );
};

PsychologistDetail.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PsychologistDetail;
