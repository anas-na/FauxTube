import axios from "axios";
import { useEffect, useState } from "react";

const YoutubeAPICalls = () => {
    const [test, setTest] = useState();
    const [videos, setVideos] = useState([])

    const getYouTube = async () => {
        let input = "programming"
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&type=video&key=${process.env.REACT_APP_API_KEY}`);
        setVideos(res.data.items)
        console.log(res.data.items)
    }

    useEffect(() => {
        // getYouTube();
    }, [])

    return (<section>
        {videos.map(video => <iframe width="420" height="315"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}>
        </iframe>)}
    </section>);
}

export default YoutubeAPICalls;