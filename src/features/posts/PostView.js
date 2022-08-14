import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { fetchPosts } from './postSlice';

const PostView = () => {
    const dispatch = useDispatch();
    const { isLoading, posts, error } = useSelector(state => state.posts);
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    return (
        <div>
            {
                isLoading && <h3>Loading...</h3>
            }
            {
                error && <h3> {error} </h3>

            }
            {
                posts && posts.map(post => (
                    <div key={post.id}>
                        <h5> {post.title} </h5>
                        <p> {post.body} </p>
                    </div>
                ))
            }
        </div>
    )
}

export default PostView;