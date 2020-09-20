import React, { createRef } from 'react';
import * as S from './MyPosts.styled';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {
    let posts = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />);
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }
    let newPostElement = new React.createRef();
    return(
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div>
                { posts }
            </div>
        </div>
    );
}
export default MyPosts;