import axios from 'axios';
import PropTypes from 'prop-types';
import { createContext, useState } from "react";
import { baseUrl } from "./baseUrl";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [psychologists, setPsychologists] = useState([]);
    const [psychologistDetail, setPsychologistDetail] = useState({});

    let url = `${baseUrl}`;

    // useEffect(() => {
    // psychologist lists
    const fetchPsychologists = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(url);
            console.log(data);
            setPsychologists(data);
            console.log(data[0].experience)
        } catch (error) {
            console.log(error);
            setPsychologists([]);
        }
    };

    // fetchPsychologists();
// }
// , []);
// Empty dependency array ensures the effect runs only once

// single psychologist detail
const fetchPsychologistDetail = async (id) => {
    try {
        const { data } = await axios.get(`${url}/${id}`);
        console.log(data);
        setPsychologistDetail(data);
    } catch (error) {
        console.log(error);
        setPsychologistDetail({});
    }

}
const value = {
    loading,
    setLoading,
    psychologists,
    fetchPsychologists,
    setPsychologists,
    psychologistDetail,
    setPsychologistDetail,
    fetchPsychologistDetail
};

return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};