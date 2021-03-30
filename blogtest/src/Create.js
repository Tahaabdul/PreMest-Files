import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit =( event) => {
        event.preventDefault();
        const blog = {title, body, author};
        setLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog),
        }).then(
            setLoading(false));
            history.push("/");
    }
    
    return ( 
        <div className="create">
            <h2>Create New Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Tiltle:</label>
                <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required/>
                <label>Blog Body:</label>
                <textarea required  
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                {!loading && <button>Add Post</button>}
                {loading && <button disabled>Add Post</button>}
            </form>
        </div>
     );
}
 


export default Create;
