import axios from "axios";
import PropTypes from 'prop-types';
import { useState } from "react";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

import "./createpost.css";
const CreatePost = ({ setPosted }) => {
    const {  user } = useSelector(
        (state) => state.user
      );
      let userId=user.user._id
    const [description, setDescription] = useState("")
    // const { userId } = useParams();
    const [file, setFile] = useState();
    // console.log("id " +userId)
    function changeHandler(event) {
        const { value } = event.target;
        setDescription(value)
    }
    // preview image uploaded
    function imagechangeHandler(event) {

        setFile(URL.createObjectURL(event.target.files[0]));
    }
    const postData = async () => {
        try {
            const response = await axios.post("http://localhost:3000/createPost", {
                userId: userId,
                description
            });
            console.log(response)
            setPosted(true);

        } catch (error) {
            console.log(error)
        }
    }

    function submitHandler(event) {
        event.preventDefault();
        setDescription("");
        postData();
    }
    return (
        // <div className="border-end border-start container mt-5" style={{ width: "600px" }}>
        <div className="p-3">
            <form onSubmit={submitHandler}>
                {/* <pre>{description}</pre> */}
                <textarea type="text" placeholder="What's on your mind" className="form-control border border-0 " 
                
                onChange={changeHandler} value={description}
                />
               
                <br />
                {
                    file && <div style={{ maxWidth: "511px" }}>
                        <img src={file} className="img-thumbnail h-100 w-100" />
                    </div>
                }

                <br />
                <input type="file" accept="image/*" onChange={imagechangeHandler} />
                <br />
                <button className="btn btn-success btn-rounded button " type="submit">post</button>
            </form>
            <hr />
        </div>
        // </div>
    );
};

export default CreatePost;
CreatePost.propTypes = {
    setPosted: PropTypes.func.isRequired
};