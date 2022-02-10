import {createAction, handleAction, handleActions, handleactions} from "redux-actions";
import {produce} from "immer";
import testImg from "../../images/하늘이.jpg";
import { firestore, storage } from "../../shared/firebase";
import moment from 'moment';




const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";


const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));


const initialState = {
    list: [],
}

// 게시글 하나에는 어떤 정보가 있어야 하는 지 하나 만들어두기
const initialPost = {
    id: 0,
    user_info: {
        user_name: "wonseok",
        user_profile: testImg,
    },
    image_url: testImg,
    contents: "고양이야",
    comment_cnt: 0,
    insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
}


const getPostFB = () => {
    return function (dispatch, getState, {history}){
        const postDB = firestore.collection('post');

        postDB.get().then((docs) => {

            let post_list = [];

            docs.forEach((doc) => {
                let _post = doc.data();
                
                // initialPost에 맞게 데이터 형식 변경
                // object.keys = 딕셔너리의 키값들을 배열로 만든다.
                // ['comment_cnt', 'contents', ...]
                let post = Object.keys(_post).reduce((acc, cur) => {

                    if(cur.indexOf("user_") !== -1){
                        return {...acc, user_info: {...acc.user_info, [cur]: _post[cur]}}
                    }

                    return {...acc, [cur]: _post[cur]};

                }, {id: doc.id, user_info: {}})

                post_list.push(post);

            })

            dispatch(setPost(post_list));

        })

    }
}



export default handleActions({

    [SET_POST]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.post_list;
    }),

    [ADD_POST]: (state, action) => produce(state, (draft) => {
        // unshift = 배열 앞부터 쌓이도록
        draft.list.unshift(action.payload.post);
    })

}, initialState);


const actionCreators = {
    setPost,
    addPost,
    getPostFB,
}

export {actionCreators};


