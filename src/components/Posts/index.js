import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts, clearPosts } from '../../redux/reducers/Posts';

const Posts = () => {
    const { posts, loading } = useSelector((state) => state.postsSlice);
    const dispatch = useDispatch();
    const handleFetchPosts = () => dispatch(fetchPosts());
    const handleClearPosts = () => dispatch(clearPosts());
    return (
        <section>
            <section className='action-buttons'>
                <button onClick={handleFetchPosts}>Fetch posts</button>
                <button onClick={handleClearPosts}>Clear posts</button>
            </section>
            {loading ? <h1>'Loading...'</h1> : null}
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post.title}</li>
                ))}
            </ul>
        </section>
    );
};

export default Posts;
