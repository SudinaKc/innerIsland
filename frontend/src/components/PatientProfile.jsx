// PatientProfile.js

import React from 'react';

const PatientProfile = ({ user }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="profile-img">
            <img
              src={user.user.image}
              alt={`${user.user.firstName} ${user.user.lastName}`}
              className="img-fluid rounded-circle"
              width={300}
            />
          </div>
        </div>
        <div className="col-md-8">
          <div className="profile-details">
            <h1 className="display-4">
              {user.user.firstName} {user.user.lastName}
            </h1>
            <p className="lead">Age: {user.user.age}</p>
            <p className="lead">Gender: {user.user.gender}</p>
            <p className="lead">Address: {user.user.address}</p>
            <p className="lead">Phone: {user.user.phone}</p>
            <p className="lead">Email: {user.user.email}</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
