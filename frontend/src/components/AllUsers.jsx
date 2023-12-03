import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Spinner from "./spinner/Spinner"

const AllUsers = ({ loading, setLoading }) => {
    const [allUserData, setAllUserData] = useState([])
    async function fetchAll() {
        setLoading(true)
        try {
            const { data: allUsers } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/all/allusers`)
            console.log(allUsers.allUsers)
            setAllUserData(allUsers.allUsers)
        } catch (error) {
            toast.error(error.message)
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchAll()
    }, [])
    return (
        <>
            {
                loading ?
                    (
                        <div
                            className="d-flex justify-content-center align-items-center"
                            style={{ height: "60vh" }}
                        >
                            <Spinner />
                        </div>
                    )
                    : (
                        allUserData.length > 0 ? (<div>
                            <h2 className="mt-3"> Registered User List</h2>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        {/* Add more table headers for other user attributes */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {allUserData.map((user, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td> {/* Add this line for numbering */}
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.email}</td>
                                            {/* Add more table cells for other user attributes */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>) : (
                            <div>
                                User not found </div>)
                    )
            }
        </>

    )
}

export default AllUsers