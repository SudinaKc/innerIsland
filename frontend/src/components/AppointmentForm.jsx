import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const AppointmentForm = () => {
  const { user } = useSelector((state) => state.user);
  const userId = user.user._id;
  const { id } = useParams();
  const psychologistId = id;

  const [appointmentData, setAppointmentData] = useState({
    appointmentDate: "",
    appointmentTime: "",
    problem: ""
  });
  const [booked, setBooked] = useState(false);
  const { appointmentDate, appointmentTime, problem } = appointmentData;

  function changeHandler(e) {
    const { name, value } = e.target;
    setAppointmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function submitHandler(payment_id) {
    // event.preventDefault();
    const fetchdata = async () => {
      try {
        const response = await axios.post("http://localhost:3000/api/booked", {
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
        setBooked(true);
        console.log(response.data); // Handle the response as needed
      } catch (error) {
        console.error(error);
      }
    };

    fetchdata();
  }
  // post to payment document in database 
  async function paymentHandler(razorpay_payment_id, razorpay_order_id, razorpay_signature) {
    console.log("first")
    try {
      const { data } = await axios.post("http://localhost:3000/api/paymentVerification", {
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
  const checkoutHandler = async (amount) => {
    try {
      const { data } = await axios.post("http://localhost:3000/api/order", {
        amount,
      });
      const options = {
        key: "rzp_test_coskO447LTXUNv", // Enter the Key ID generated from the Dashboard
        amount: data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "innerIsland",
        description: "Test Transaction",
        // image: {Logo},
        order_id: data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        // callback_url: "http://localhost:3000/api/paymentVerification",
        "handler": function (response) {

          paymentHandler(response.razorpay_payment_id, response.razorpay_order_id, response.razorpay_signature);
        },
        prefill: {
          // name: {psychologistId},
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
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
    <div className="container" style={{ width: "600px" }}>
      <h5>pricing:---- </h5>
      <h1>Book session now </h1>

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
            </label>
            <input
              id="appointmentDate"
              className="form-control"
              type="date"
              onChange={changeHandler}
              name="appointmentDate"
              value={appointmentDate}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="appointmentTime" className="form-label">
              Appointment Time:
            </label>
            <input
              id="appointmentTime"
              className="form-control"
              type="time"
              onChange={changeHandler}
              name="appointmentTime"
              value={appointmentTime}
            />
          </div>
          {/* symptoms */}

        </div>
        <div className="col-md-12 mb-4">
          <label htmlFor="problem" className="form-label">
            Problem Description:
          </label>
          <textarea
            id="problem"
            className="form-control"
            type="text"
            onChange={changeHandler}
            name="problem"
            value={problem}
          />
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
            onClick={() => checkoutHandler(2000)}
          >
            Book Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
