import React from "react";

function CreatePost(){
    return(
    <div className="createPostPage">
        <div className="cpContainer">
            <h1>Create a post</h1>
            <div className="cpInput">
                <label>Title:</label>
                <input placeholder="...."></input>
            </div>
            <div className="cpInput">
                <label>Post:</label>
                <textarea placeholder="...."></textarea>
            </div>
            <button>Submit post</button>
        </div>
    </div>
    ) 
}

export default CreatePost;