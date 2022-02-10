import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from '../components/Post';
import {actionCreators as postActions} from "../redux/modules/post";

const PostList = (props) => {

    const dispatch = useDispatch();

    const post_list = useSelector((state) => state.post.list);

    console.log(post_list);

    React.useEffect(() => {
        if(post_list.length === 0){
            dispatch(postActions.getPostFB());
        }
    }, []);

    return (
        <React.Fragment>
        {post_list.map((item, i) => {
            console.log('item !! ',item);
            return <Post key={item.id} {...item} />
        })}
        </React.Fragment>
    )
}



export default PostList;