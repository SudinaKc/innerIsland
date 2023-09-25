import PropTypes from 'prop-types';
const PsychologistProfile = ({ user }) => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={user.user.image || 'default-profile-image.jpg'}
                        alt={`${user.user.firstName} ${user.user.lastName}`}
                        className="img-fluid rounded-circle"
                    />
                </div>
                <div className="col-md-8">
                    <h1 className="mb-4">{user.user.firstName} {user.user.lastName}</h1>
                    <p className="lead">{user.user.specialization}</p>
                    <p><strong>Email:</strong> {user.user.email}</p>
                    <p><strong>Experience:</strong> {user.user.experience}</p>
                    <p><strong>Qualification:</strong> {user.user.qualification}</p>
                    <p><strong>Availability:</strong> {user.user.availability} 
                    {/* <span className='bg-success text-white px-2 py-1 rounded-3 ' style={{ cursor: "pointer" }}>edit</span> */}
                    </p>
                </div>
            </div>
        </div>
    );
};
PsychologistProfile.propTypes = {
    user: PropTypes.shape({
        user: PropTypes.shape({
            image: PropTypes.string,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            specialization: PropTypes.string,
            email: PropTypes.string,
            experience: PropTypes.string,
            qualification: PropTypes.string,
            availability: PropTypes.string,
        }),
    }),
};

export default PsychologistProfile;



