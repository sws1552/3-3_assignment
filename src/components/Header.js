import React from "react";
import styled from "styled-components";
import {Button, Grid} from "../elements";
import {history} from "../redux/configStore";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Header = (props) => {
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