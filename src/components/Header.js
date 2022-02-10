import React from "react";
import {Button, Grid} from "../elements";
import {history} from "../redux/configStore";
import {actionCreators as userActions} from "../redux/modules/user";
import {useDispatch, useSelector} from 'react-redux';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Header = (props) => {

    const dispatch = useDispatch();
    const is_login = useSelector((state) => state.user.is_login);

    if(is_login){
        return (
            <React.Fragment>
                <Grid is_flex margin="1.5rem 0">
                    <HomeOutlinedIcon style={{color: "#9E56EB", fontSize:"2rem", cursor: 'pointer'}}
                    onClick={() => {
                        history.push('/');
                    }} />
                    <Grid is_flex width="22rem">
                        <Button width='10rem' text='로그아웃' _onClick={() => {
                            dispatch(userActions.logOut());
                        }}></Button>
                    </Grid>
                </Grid>
                {/* <div>
                    <div>logo / 회원가입버튼 / 로그인버튼</div>
                </div> */}
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Grid is_flex margin="1.5rem 0">
                <HomeOutlinedIcon style={{color: "#9E56EB", fontSize:"2rem", cursor: 'pointer'}}
                onClick={() => {
                    history.push('/');
                }} />
                <Grid is_flex width="22rem">
                    <Button width='10rem' text='로그인' _onClick={() => {
                        history.push('/login');
                    }}></Button>
                    <Button width='10rem' text='회원가입' _onClick={() => {
                        history.push('/signup');
                    }}></Button>
                </Grid>
            </Grid>
            {/* <div>
                <div>logo / 회원가입버튼 / 로그인버튼</div>
            </div> */}
        </React.Fragment>
    )
}



export default Header;