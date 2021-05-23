import { useState } from "react";
import './Video.css'
import './HomePage.css'
import moment from 'moment';

const Video = (props) =>{
    const [userName, setUserName] = useState('');
    const [comment, setComment] = useState('');
    const [commentList, setCommentList] = useState([]);

    const handleUserName = (e) => {
        setUserName(e.target.value);
    }
    const handleComment = (e) => {
        setComment(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setCommentList(prevComment => [...prevComment, {[userName]: comment}]);
        setUserName('');
        setComment('');
    }
    let day = new Date()
    let newDay = moment(day).format('YYYY/MM/DD').toLocaleString()
    return (
        <section>
            <br/>
            <button onClick={props.history.goBack} className="search-button">Go Back</button>
            <br/>
            {<iframe title='youtubeVideo' width="420" height="315"
            src={`https://www.youtube.com/embed/${props.match.params.id}`}>
            </iframe>}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type='text' value={userName} onChange={handleUserName} required/>
                </label>
                <label>
                    Comment:
                    <textarea rows="4" cols="40" value={comment} onChange={handleComment} required></textarea>
                </label>
                <button type='submit' className='search-button'>Submit</button>
            </form>
            {commentList.map(commentObj => {
                return (<div key={props.match.params.id} className='commentContainer'>
                    <h3 className='name'>{Object.keys(commentObj)}(<span>{newDay}</span>):</h3>
                    
                    <p className='comment'> {Object.values(commentObj)}</p>
                </div>)
            })}
        </section>
    )
}
export default Video;