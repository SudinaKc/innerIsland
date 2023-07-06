// import React,{Fragment} from 'react'
// import {Link} from 'react-router-dom'
// import {useSelector} from 'react-redux'

// // import MetaData from '../layout/MetaData'

// const Profile =() => {

//     const{user}= useSelector(state=> state.user)

//     return (
//         <><Fragment>
//                 <Fragment>
//                     <h2 className="mt-5 ml-5">My Profile</h2>
//         <div classNameName="row justify-content-around mt-5 user-info">
//             <div classNameName="col-12 col-md-3">
//                 <figure className='avatar avatar-profile'>
//                     {/* <img className="rounded-circle img-fluid" src={user.avatar.url} */}
//                     {/* alt={user.name}/> */}
//                 </figure>
//                 <Link to="/me/update" id="edit_profile" className="btn btn-primary btn-block my-5">
//                     Edit Profile
//                 </Link>
//             </div>
     
//             <div className="col-12 col-md-5">
//                  <h4>Full Name</h4>
//                  <p>{user.user.firstName} {user.user.lastName}</p>

//                  <h4>Age</h4>
//                  {/* <p>{user.user.age}</p> */}
     
//                  <h4>Email Address</h4>
//                  <p>{user.user.email}</p>

//                  <h4>Joined On</h4>
//                  <p>{String(user.user.createdAt).substring(0,10)}</p>
//                  {user.role !== 'admin'&& (
//                  <Link to="/booking/me" className="btn btn-danger btn-block mt-5">
//                     My Booking
//                 </Link>
//                 )}
                 

//                 <Link to="/password/update" className="btn btn-primary btn-block mt-3">
//                     Change Password
//                 </Link>
//             </div>
//         </div>

//                 </Fragment>
            
//         </Fragment><div>

//             </div></>
//     )
// }

// export default Profile

// import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const Profile = () => {
//   const { user } = useSelector((state) => state.user);

//   return (
//     <Fragment>
//       <h2 className="text-center mb-4">My Profile</h2>
//       <div className="row justify-content-center">
//         <div className="col-md-4">
//           <div className="card">
//             <div className="card-body text-center">
//               <figure className="avatar avatar-profile mb-4">
//                 {/* <img className="rounded-circle img-fluid" src={user.avatar.url} alt={user.name} /> */}
//               </figure>
//               <Link to="/me/update" id="edit_profile" className="btn ">
//                 Edit Profile
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-body">
//               <h4>Full Name</h4>
//               <p>
//                 {user.user.firstName} {user.user.lastName}
//               </p>

//               <h4>Age</h4>
//               {/* <p>{user.user.age}</p> */}

//               <h4>Email Address</h4>
//               <p>{user.user.email}</p>

//               <h4>Joined On</h4>
//               <p>{String(user.user.createdAt).substring(0, 10)}</p>

//               {user.role !== 'admin' && (
//                 <Link to="/booking/me" className="btn ">
//                   My Booking
//                 </Link>
//               )}

//               <Link to="/password/update" className="btn ">
//                 Change Password
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default Profile;
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Fragment>
      <h2 className="text-center mt-5">My Profile</h2>
      <div className="row justify-content-center mt-5 user-info">
        <div className="col-md-4 text-center">
          <figure className="avatar avatar-profile">
            {/* <img className="rounded-circle img-fluid" src={user.avatar.url} alt={user.name} /> */}
          </figure>
          <Link to="/me/update" id="edit_profile" className="btn btn-primary mt-4">
            Edit Profile
          </Link>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Full Name</h4>
              <p className="card-text">
                {user.user.firstName} {user.user.lastName}
              </p>

              <h4 className="card-title">Age</h4>
              {/* <p className="card-text">{user.user.age}</p> */}

              <h4 className="card-title">Email Address</h4>
              <p className="card-text">{user.user.email}</p>

              <h4 className="card-title">Joined On</h4>
              <p className="card-text">{String(user.user.createdAt).substring(0, 10)}</p>

              {user.role !== 'admin' && (
                <Link to="/booking/me" className="btn btn-danger mr-2">
                  My Booking
                </Link>
              )}

              <Link to="/password/update" className="btn btn-primary">
                Change Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
