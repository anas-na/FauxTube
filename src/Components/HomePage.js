import axios from "axios"
import {Link} from "react-router-dom"
import {useState } from "react"



const HomePage = () => {
    const [videos, setVideos] = useState([]);
    const [input, setInput] = useState('');

    const getYouTube = async () => {
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&type=video&key=${process.env.REACT_APP_API_KEY}`);
        setVideos(res.data.items)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getYouTube();
        setInput('');
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div>
            <h1>Search for Videos</h1>
            <form onSubmit={handleSubmit}>
                <input value={input} placeholder='search for video' onChange={handleChange}/>
                <button type='submit'>Search</button>
            </form>
            <ul>
            {videos.map(video=><Link to={`/videos/${video.id.videoId}`} key={video.id.videoId}><li >
                <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title}/>
                <h3>{video.snippet.title}</h3>
            </li></Link>)}
            </ul>

        </div>
    )
}

export default HomePage