// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { Logo } from "./LogoSvg";

// const Register = ({
//   firstName,
//   lastName,
//   email,
//   phone,
//   password,
//   handleChange,
//   registerUser,
//   age,
//   address,
//   gender
// }) => {
//   return (
//     <section className="h-100 gradient-form">
//       <div className="container py-5 h-100  ">
//         <div className="row d-flex justify-content-center align-items-center h-100 ">
//           <div className="col-xl-10">
//             <div className="card rounded-3 text-black">
//               <div className="row g-0">
//                 <div className="col-lg-6 ">
//                   <div className="card-body p-md-5 mx-md-4">
//                     <div className="text-center">
                      
//                       {Logo}
//                     </div>
//                     <br />
//                     <br />
//                     <form method="POST" onSubmit={registerUser}>
//                       <p>Please register account</p>
//                       <div className="d-flex gap-3">
//                         <div className="form-outline mb-4">
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder=" First Name"
//                             name="firstName"
//                             value={firstName}
//                             onChange={handleChange}
//                           />
//                         </div>
//                         <div className="form-outline mb-4">
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder=" Last Name"
//                             name="lastName"
//                             value={lastName}
//                             onChange={handleChange}
//                           />
//                         </div>
//                       </div>

//                       <div className="form-outline mb-4">
//                         <input
//                           type="email"
//                           className="form-control"
//                           placeholder=" email address"
//                           name="email"
//                           value={email}
//                           onChange={handleChange}
//                         />
//                       </div>
//                       <div className="form-outline mb-4">
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder=" enter phone"
//                           name="phone"
//                           value={phone}
//                           onChange={handleChange}
//                         />
//                       </div>
//                       {/* age */}
//                       <div className="d-flex gap-2">
//                         <div className="form-outline mb-4">
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder=" enter age"
//                             name="age"
//                             value={age}
//                             onChange={handleChange}
//                           />
//                         </div>
//                         <div className="form-outline mb-4">
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder=" enter address"
//                             name="address"
//                             value={address}
//                             onChange={handleChange}
//                           />
//                         </div>
//                       </div>
// {/* gender radio button */}
//                       <div className="d-flex justify-content-around mb-3">
//                         <div className="form-check ">
//                           <input
//                             className="form-check-input"
//                             type="radio"
//                             name="gender"
//                             value={gender}
//                             id="male"
//                           />
//                           <label
//                             className="form-check-label"
//                             htmlFor="male"
//                           >
//                            male
//                           </label>
//                         </div>
//                         <div className="form-check ">
//                           <input
//                             className="form-check-input"
//                             type="radio"
//                             name="gender"
//                             id="female"
//                             value={gender}
//                           />
//                           <label
//                             className="form-check-label"
//                             htmlFor="female"
//                           >
//                             female
//                           </label>
//                         </div>
//                       </div>

//                       <div className="form-outline mb-4">
//                         <input
//                           type="password"
//                           className="form-control"
//                           placeholder="password"
//                           name="password"
//                           value={password}
//                           onChange={handleChange}
//                         />
//                       </div>

//                       <div className="text-center pt-1 mb-5 pb-1">
//                         <button
//                           className="btn btn-success btn-rounded button w-100 mb-4  "
//                           type="submit"
//                         >
//                           Register
//                         </button>
//                         <p className="text-muted" href="#!">
//                           Already have an account{" "}
//                           <Link to={"/login"}>login</Link>
//                         </p>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//                 <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
//                   <div className="text-white px-3 py-4 p-md-5 mx-md-4">
//                     <h4 className="mb-4">
//                       Discover Your Inner Island of Support
//                     </h4>
//                     <p className="small mb-0">
//                       Welcome to InnerIsland, your oasis of empathy and support
//                       on your transformative journey towards mental well-being -
//                       find solace, guidance, and renewed hope on your personal
//                       inner island
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// Register.propTypes = {
//   firstName: PropTypes.string.isRequired,
//   lastName: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   registerUser: PropTypes.func.isRequired,
// };

// export default Register;






// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { Logo } from "./LogoSvg";

// const Register = ({
//   firstName,
//   lastName,
//   email,
//   phone,
//   password,
//   handleChange,
//   registerUser,
//   age,
//   address,
//   gender,
// }) => {
//   return (
//     <section className="h-100 gradient-form">
//       <div className="container py-5 h-100">
//         <div className="row d-flex justify-content-center align-items-center h-100">
//           <div className="col-xl-10">
//             <div className="card rounded-3 text-black">
//               <div className="row g-0">
//                 <div className="col-lg-6">
//                   <div className="card-body p-md-5 mx-md-4">
//                     <div className="text-center">
//                       {Logo}
//                     </div>
//                     <br />
//                     <br />
//                     <form method="POST" onSubmit={registerUser}>
//                       <p className="text-center">Please register an account</p>
//                       <div className="row mb-4">
//                         <div className="col">
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="First Name"
//                             name="firstName"
//                             value={firstName}
//                             onChange={handleChange}
//                           />
//                         </div>
//                         <div className="col">
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Last Name"
//                             name="lastName"
//                             value={lastName}
//                             onChange={handleChange}
//                           />
//                         </div>
//                       </div>
//                       <div className="form-outline mb-4">
//                         <input
//                           type="email"
//                           className="form-control"
//                           placeholder="Email Address"
//                           name="email"
//                           value={email}
//                           onChange={handleChange}
//                         />
//                       </div>
//                       <div className="form-outline mb-4">
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Phone Number"
//                           name="phone"
//                           value={phone}
//                           onChange={handleChange}
//                         />
//                       </div>
//                       <div className="form-outline mb-4">
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Age"
//                           name="age"
//                           value={age}
//                           onChange={handleChange}
//                         />
//                       </div>
//                       <div className="form-outline mb-4">
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Address"
//                           name="address"
//                           value={address}
//                           onChange={handleChange}
//                         />
//                       </div>
//                       <div className="form-check mb-4">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           name="gender"
//                           value="male"
//                           id="male"
//                           checked={gender === "male"}
//                           onChange={handleChange}
//                         />
//                         <label className="form-check-label" htmlFor="male">
//                           Male
//                         </label>
//                       </div>
//                       <div className="form-check mb-4">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           name="gender"
//                           value="female"
//                           id="female"
//                           checked={gender === "female"}
//                           onChange={handleChange}
//                         />
//                         <label className="form-check-label" htmlFor="female">
//                           Female
//                         </label>
//                       </div>
//                       <div className="form-outline mb-4">
//                         <input
//                           type="password"
//                           className="form-control"
//                           placeholder="Password"
//                           name="password"
//                           value={password}
//                           onChange={handleChange}
//                         />
//                       </div>
//                       <div className="text-center pt-1 mb-5 pb-1">
//                         <button
//                           className="btn btn-success btn-rounded button w-100 mb-4"
//                           type="submit"
//                         >
//                           Register
//                         </button>
//                         <p className="text-muted">
//                           Already have an account?{" "}
//                           <Link to={"/login"}>Login</Link>
//                         </p>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//                 <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
//                   <div className="text-white px-3 py-4 p-md-5 mx-md-4">
//                     <h4 className="mb-4">
//                       Discover Your Inner Island of Support
//                     </h4>
//                     <p className="small mb-0">
//                       Welcome to InnerIsland, your oasis of empathy and support
//                       on your transformative journey towards mental well-being.
//                       Find solace, guidance, and renewed hope on your personal
//                       inner island.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// Register.propTypes = {
//   firstName: PropTypes.string.isRequired,
//   lastName: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   registerUser: PropTypes.func.isRequired,
//   age: PropTypes.string.isRequired,
//   address: PropTypes.string.isRequired,
//   gender: PropTypes.oneOf(["male", "female"]).isRequired,
// };

// export default Register;







import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Logo } from "./LogoSvg";

const Register = ({
  firstName,
  lastName,
  email,
  phone,
  password,
  handleChange,
  registerUser,
  age,
  address,
  gender
}) => {
  return (
    <section className="h-100 gradient-form">
      <div className="container py-2 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6 bg-white">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      {Logo}
                    </div>
                    <h3 className="mt-4 mb-3">Create an Account</h3>
                    <form onSubmit={registerUser}>
                      <div className="row mb-3">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            name="firstName"
                            value={firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            name="lastName"
                            value={lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          name="email"
                          value={email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                          name="phone"
                          value={phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Age"
                          name="age"
                          value={age}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address"
                          name="address"
                          value={address}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            value="male"
                            id="male"
                            checked={gender === "male"}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="male"
                          >
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            checked={gender === "female"}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="female"
                          >
                            Female
                          </label>
                        </div>
                      </div>

                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          value={password}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="text-center mt-4">
                        <button
                          className="btn btn-success btn-rounded w-100"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>
                    </form>

                    <p className="text-muted mt-3">
                      Already have an account?{" "}
                      <Link to="/login">Login here</Link>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">Discover Your Inner Island of Support</h4>
                    <p className="small mb-0">
                      Welcome to InnerIsland, your oasis of empathy and support
                      on your transformative journey towards mental well-being -
                      find solace, guidance, and renewed hope on your personal
                      inner island
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Register.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  age: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  gender: PropTypes.oneOf(["male", "female"]).isRequired,

};

export default Register;
