import axios from "axios";
import { useEffect, useState } from "react";

const YoutubeAPICalls = () => {
    const [test, setTest] = useState();

    const getYouTube = async () => {
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY }`);
        console.log(res);
    }

    useEffect(() => {
        getYouTube();
    }, [])

    return(null);
}

export default YoutubeAPICalls;