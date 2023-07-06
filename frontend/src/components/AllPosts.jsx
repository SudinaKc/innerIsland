import axios from "axios";
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
const AllPosts = ({ posted,setPosted }) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await axios.get("http://localhost:3000/getFeedPosts");
                setPosts(data);
                console.log(data);
                setPosted(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchPosts();
    }, [posted]);
    useEffect(() => {
        console.log("Posts state:", posts);
        // Perform any action that relies on the updated posts state here
    }, [posts]);
    return (
        <div>
            {
                posts && posts.map(post => {
                    return <div className="card mb-5" key={post._id} >
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" style={{ width: "40px" }}
                                    alt="Avatar" />
                                <h4>{`${post.firstName}  ${post.lastName}`}</h4>
                            </div>
                            <small >
                                2 min ago
                            </small>
                            <br />
                            <br />
                            <p className="card-text">
                                {
                                    post.description
                                }
                            </p>
                        </div>
                        <img src="..." className="card-img-top" alt="image" />
                    </div>
                })
            }






        </div>
    )
}

export default AllPosts
AllPosts.propTypes = {
    posted: PropTypes.bool.isRequired,
    setPosted: PropTypes.func.isRequired
  };