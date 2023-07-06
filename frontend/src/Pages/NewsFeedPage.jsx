import { useState } from "react"
import AllPosts from "../components/AllPosts"
import CreatePost from "../components/CreatePost"
const NewsFeedPage = () => {
    const [posted, setPosted] = useState(false)
    return (
        <div className="border-end border-start container mt-5" style={{ width: "600px" }}>
            <CreatePost posted={posted} setPosted={setPosted} />
            <AllPosts posted={posted} setPosted={setPosted}/>
        </div>
    )
}

export default NewsFeedPage