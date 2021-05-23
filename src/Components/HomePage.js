import axios from "axios"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./HomePage.css"

const HomePage = (props) => {
    const [videos, setVideos] = useState([]);
    const [input, setInput] = useState('');
    const [order, setOrder] = useState("");
    const [searchedState, setSearchedState] = useState(0);
    

    const getYouTube = async (selectedOrder) => {
        
        let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&type=video&key=${process.env.REACT_APP_API_KEY}`
        if (selectedOrder) {
            url = url.slice(0, 45) + "order=" + selectedOrder + "&" + url.slice(45, 140)
        }
        try {
            const res = await axios.get(url);
            props.setSearch(res.config.url);
            setVideos(res.data.items);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const reload = async () => {
            if (props.search) {
                try {
                    const res = await axios.get(`${props.search}`);
                    setVideos(res.data.items);
                } catch (error) {
                    console.log(error)
                }
            }
        }
        reload();
    }, [props.search])

    const selectOrder = (e) => {
        setOrder(e.target.value)
        if (e.target.value && input) {
            getYouTube(e.target.value);
            setSearchedState(2)
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === "") {
            setSearchedState(1)
            return
        }
        setSearchedState(2)
        getYouTube(order);
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <section>

            <form className="search-form" onSubmit={handleSubmit}>

                <input value={input} placeholder='search for video' onChange={handleChange} size="50" />
                <button type='submit' className="search-button">Search</button>

                <select className="order-list" defaultValue={''} onChange={selectOrder}>
                    <option value="">Select Order</option>
                    <option value="relevance">Relevance</option>
                    <option value="date">Date</option>
                    <option value="rating">Rating</option>
                    <option value="title">title</option>
                    <option value="viewCount">View count</option>
                </select>

            </form>

            {(searchedState === 1)  && <h2 className="search-error">No Search Results Yet! Please submit a search above.</h2>}

            <ul className="videoList">
                {videos.map(video => <Link to={`/videos/${video.id.videoId}`} key={video.id.videoId}><li>
                    <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                    <h3>{video.snippet.title}</h3>
                </li></Link>)}
            </ul>

        </section>
    )
}

export default HomePage;