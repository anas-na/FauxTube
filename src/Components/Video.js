import { useState } from "react";
import './Video.css'

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

    return (
        <section>
            <br/>
            <button onClick={props.history.goBack}>Go Back</button>
            <br/>
            {<iframe title='youtubeVideo' width="420" height="315"
            src={`https://www.youtube.com/embed/${props.match.params.id}`}>
            </iframe>}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type='text' value={userName} onChange={handleUserName}/>
                </label>
                <label>
                    Comment:
                    <textarea value={comment} onChange={handleComment}></textarea>
                </label>
                <button type='submit'>Submit</button>
            </form>
            {commentList.map(commentObj => {
                return (<div className='commentContainer'>
                    <h3>{Object.keys(commentObj)}</h3>
                    <p>{Object.values(commentObj)}</p>
                </div>)
            })}
        </section>
    )
}
export default Video;