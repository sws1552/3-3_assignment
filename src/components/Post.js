import React from "react";
import defaultImg from '../images/하늘이.jpg';
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";



const Post = (props) => {

    const {user_info, image_url, contents, comment_cnt, insert_dt} = props;    

    return (
        <React.Fragment>
            <Grid is_flex>
                <Grid is_flex width="120px">
                    <Image src={user_info.user_profile_img} />
                    <Text bold>{user_info.user_name}</Text>
                </Grid>
                <Text>{insert_dt}</Text>
            </Grid>

            <Grid padding="16px">
                {contents}
            </Grid>

            <Grid>
                <Image shape="rectangle" src={image_url}/>
            </Grid>

            <Grid padding="16px">
                <Text bold>댓글 : {comment_cnt} 개</Text>
            </Grid>

            {/* <div>
                <div>프로필img / 닉네임 / 시간 / 버튼</div>
                <div>내용</div>
                <div>upload이미지</div>
                <div>댓글 개수</div>
            </div> */}
        </React.Fragment>
    )
}

Post.defaultProps = {
    user_info: {
        user_name: 'wonseok',
        user_profile_img: defaultImg
    },
    image_url: defaultImg,
    contents: '고양이야~~~~~~',
    comment_cnt: 10,
    insert_dt: "2021-02-07 10:00:00",
}


export default Post;