import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";


const PostView = () => {
    const {isLoading, posts, error} = useSelector(state => state.posts)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchPosts())
    },[])
    return (
        <div>
            {isLoading && <h2>Loading ....</h2>}
            {error && <h3>{error}</h3>}
            {posts && posts.map((post)=>{
                return <article key={post.id}>
                    <p className="text-red-900">Title : {post?.title}</p>
                    <p>body: {post?.body}</p>
                </article>
            })}
        </div>
    );
};

export default PostView;