import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const AppointmentForm = ({ price,psychologistDetail }) => {
  const { user } = useSelector((state) => state.user);
  const userId = user.user._id;
  const { id } = useParams();
  const [unavailable, setUnavailable] = useState([])
  const psychologistId = id;
  price = parseInt(price)
// console.log()


  const [appointmentData, setAppointmentData] = useState({
    appointmentDate: "",
    appointmentTime: "",
    problem: "",
    duration: "1"
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [booked, setBooked] = useState(false);
  const { appointmentDate, appointmentTime, problem, duration } = appointmentData;
  const [bookedId, setBookedId] = useState(null);
  function changeHandler(e) {
    const { name, value } = e.target;
    setAppointmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function fetchBookings(e) {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/booked`);
      const today = data.filter((ele) => ele.appointmentDate.split('T')[0] == e.target.value)
      console.log(today)
      setUnavailable(today)

    } catch (error) {
      console.log(error);
    }
  }

  console.log(appointmentDate)
  console.log(typeof appointmentDate)

  function submitHandler(payment_id) {
    // event.preventDefault();
    const fetchdata = async () => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/booked`, {
          userId,
          psychologistId,
          payment_id,
          ...appointmentData,
        });
        // Show success toast
        toast.success("Appointment booked successfully");
        setAppointmentData({
          appointmentDate: "",
          appointmentTime: "",
          problem: ""
        });
        setPaymentSuccess(true)
        setBooked(true);
        setBookedId(response.data._id)
        console.log(response.data); // Handle the response as needed
      } catch (error) {
        console.error(error);
      }
    };

    fetchdata();
  }


  const handlePaymentSuccess = async (bookedId) => {
    // fetching appointment by appointment id used to send email 
    const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/booked/${bookedId}`)

    console.log(data)
    const paymentData = {
      userEmail: user.user.email, // Replace with the user's email address
      PsychologistName: data.psychologistId.firstName + " " + data.psychologistId.lastName, // Replace with the product name
      // amount: 100, // Replace with the payment amount
      appointmentDate: new Date(data.appointmentDate).toLocaleDateString(),
      appointmentTime: data.appointmentTime, // Replace with the appointment time
      duration: data.duration + "hour",
      problem: data.problem,
      razorpay_payment_id: data.payment_id.razorpay_payment_id,
      psychologistEmail: data.psychologistId.email,
      patientName: user.user.firstName + " " + user.user.lastName,
      bookedId: bookedId
      // problem: "Appointment issue", // Replace with the appointment problem/description
    };

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/paymentSuccess`, paymentData);//payment success is send email route
      // setPaymentSuccess(true);
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
    setPaymentSuccess(false)
  };
  paymentSuccess && handlePaymentSuccess(bookedId);
  // post to payment document in database 
  async function paymentHandler(razorpay_payment_id, razorpay_order_id, razorpay_signature) {
    console.log("first")
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/paymentVerification`, {
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature
      })
      if (data) {
        toast.success("Payment success ");
      }
      const { payment_id } = data;
      await submitHandler(payment_id);
    } catch (error) {
      console.log(error)
    }

  }
  // checkout for checkout
  const checkoutHandler = async (amount, appointmentData) => {
    const { appointmentDate, appointmentTime, duration, problem } = appointmentData
    if (!appointmentDate || !appointmentTime || !duration || !problem) {
      return toast.error("All fields are required ")
    }
    // console.log(appointmentDate)
    // if (new Date(appointmentDate) <= Date.now()) {
    //   return toast.error("You can't book in the past");
    // }


    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/order`, {
        amount,
      });
      const options = {
        key: "rzp_test_coskO447LTXUNv", // Enter the Key ID generated from the Dashboard
        amount: data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "NPR",
        name: "innerIsland",
        description: "Test Transaction",
        // image: {Logo},
        order_id: data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response) {

          paymentHandler(response.razorpay_payment_id, response.razorpay_order_id, response.razorpay_signature);
        },
        prefill: {
          name: user.user.firstName + " " + user.user.lastName,
          email: user.user.email,
          userId: user.user._id,
          // contact: "9000090000",
          contact: ""
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#157347",
        },
      };
      // eslint-disable-next-line no-undef
      const razor = await new Razorpay(options);
      razor.on('payment.failed', function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });


      razor.open();

    } catch (error) {
      console.log(error)
    }

  };



  return (
    <div className="container my-5" >
      {/* <h5>pricing:---- </h5> */}
      {/* <h1>Book session now </h1> */}

      <div
        // onSubmit={submitHandler} 

        className="shadow p-4 mb-5">
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Your Name:
            </label>
            <input
              id="name"
              className="form-control bg-light"
              readOnly
              value={`${user.user.firstName} ${user.user.lastName}`}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              id="email"
              className="form-control bg-light"
              readOnly
              value={user.user.email}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">
              Phone:
            </label>
            <input
              id="phone"
              className="form-control bg-light"
              readOnly
              value={user.user.phone}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="address" className="form-label">
              Address:
            </label>
            <input
              id="address"
              className="form-control bg-light"
              type="text"
              readOnly
              onChange={changeHandler}
              name="address"
              value={user.user.address}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="age" className="form-label">
              Age:
            </label>
            <input
              id="age"
              className="form-control bg-light"
              type="text"
              onChange={changeHandler}
              name="age"
              value={user.user.age}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="appointmentDate" className="form-label">
              Appointment Date:
              <sup style={{ color: "green", fontSize: "12px" }}>*</sup>

            </label>
            <input
              id="appointmentDate"
              className="form-control"
              required
              type="date"
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => {
                changeHandler(e); // Call the changeHandler function with the event
                fetchBookings(e);    // Call the fetchByDate function
              }}
              name="appointmentDate"
              value={appointmentDate}
            />

          </div>
          <div className={`${unavailable.length > 0 ? "bg-info-subtle" : ``}`}>
            {
              unavailable.length > 0 &&
              <span>

                unavailable time slot
              </span>
            }

            <br />
            {
              unavailable &&
              unavailable.map((ele) => (
                <div key={ele.id}>
                  {ele.appointmentTime} to {parseInt(ele.appointmentTime.split(":")[0]) + ele?.duration + `:${ele.appointmentTime.split(":")[1]}`}
                </div>
              ))
            }
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="appointmentTime" className="form-label">
              Appointment Time:
              <sup style={{ color: "green", fontSize: "12px" }}>*</sup>
              <span>(between {psychologistDetail.startTime} to {psychologistDetail.endTime})</span>

            </label>
            {/* time picker */}


            <input
              id="appointmentTime"
              className="form-control"
              type="time"
              // onChange={changeHandler}
              name="appointmentTime"
              required
              value={appointmentTime}
              onChange={(e) => {
                const inputTime = e.target.value;
                console.log(typeof inputTime)
                const selectedTime = new Date(`1970-01-01T${inputTime}`);
                const minTime = new Date(`1970-01-01T${psychologistDetail.startTime}`);
                const maxTime = new Date(`1970-01-01T${psychologistDetail.endTime}`);

                if (selectedTime < minTime || selectedTime > maxTime) {
                  alert(`Please select a time between ${psychologistDetail.startTime} and ${psychologistDetail.endTime}.`);
                } else {
                  // setSelectedTime(inputTime); // Update the state with the selected time
                  changeHandler(e);
                }
              }}






            />


            <div style={{ width: "700px" }}>
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="duration" className="form-label">
              Duration in hour:
              <sup style={{ color: "green", fontSize: "12px" }}>*</sup>
            </label>
            <input
              id="duration"
              className="form-control"
              type="number"
              onChange={changeHandler}
              name="duration"
              value={duration}
              min={1}
              max={3}
              required
            />
          </div>
          {/* symptoms */}

        </div>
        <div className="col-md-12 mb-4">
          <label htmlFor="problem" className="form-label">
            Issue facing
            <sup style={{ color: "green", fontSize: "12px" }}>*</sup>
          </label>
          <textarea
            id="problem"
            className="form-control"
            type="text"
            onChange={changeHandler}
            name="problem"
            value={problem}
            required
          />
        </div>
        <div className="text-success">
          Total:NPR 
          <span className="fw-semibold">
            {" "}

          {
            price * duration
          }
          </span>
        </div>
        <div className="text-center">
          {booked && (
            <p style={{ color: "green", fontWeight: "bold" }}>
              Booked successfully
              <Link to="/appointments" style={{ marginLeft: "5px" }}>
                view
              </Link>
            </p>
          )}
          <button className="btn btn-success btn-rounded button"
            onClick={() => checkoutHandler(price * duration, appointmentData)}
          >
            Book Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;






