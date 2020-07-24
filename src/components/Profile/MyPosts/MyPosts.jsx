import React from 'react';
import * as S from './MyPosts.styled';
import Post from './Post/Post.jsx';

const MyPosts = () => {
    debugger;
    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message="I'm learning React." />
                <Post message="React is cool!" />
            </div>
        </div>
    );
}
export default MyPosts;