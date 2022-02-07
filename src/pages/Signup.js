import React from "react";
import {Grid, Text, Button, Input} from "../elements";


const Signup = (props) => {
    return (
        <React.Fragment>
            <Grid padding="16px 0">
                <Text size="32px" bold>회원 가입</Text>

                <Grid padding="12px 0">
                    <Input label="아이디"
                    placeholder='아이디를 입력해줘'
                    _onChange={(e) => {
                        
                    }} />
                </Grid>

                <Grid padding="12px 0">
                    <Input label="닉네임"
                    placeholder='닉네임을 입력해줘'
                    _onChange={(e) => {

                    }} />
                </Grid>

                <Grid padding="12px 0">
                    <Input label="비밀번호"
                    placeholder='비밀번호를 입력해줘'
                    _onChange={(e) => {

                    }} />
                </Grid>

                <Grid padding="12px 0" margin="0 0 2rem 0">
                    <Input label="비밀번호 확인"
                    placeholder='비밀번호를 다시 입력해줘'
                    _onChange={(e) => {

                    }} />
                </Grid>

                <Button text="회원가입하기"
                ></Button>

            </Grid>
        </React.Fragment>
    )
}



export default Signup;