import React from "react";
import {Grid, Text, Button, Input} from "../elements";
import {useDispatch} from "react-redux";
import { emailCheck } from "../shared/common";
import {actionCreators as userActions} from "../redux/modules/user";


const Signup = (props) => {

    const dispatch = useDispatch();

    const [id, setId] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const [pwd_check, setPwdCheck] = React.useState('');
    const [user_name, setUserName] = React.useState('');

    const signup = () => {
        if(id === "" || pwd === "" || user_name === ""){
            window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요");
        }

        if(!emailCheck(id)){
            window.alert('이메일 형식이 맞지 않습니다!');
            return;
        }

        if(pwd !== pwd_check){
            window.alert("패스워드와 패스워드 확인이 일치하지 않습니다.");
            return;
        }

        dispatch(userActions.signupFB(id, pwd, user_name));

    }

    return (
        <React.Fragment>
            <Grid padding="16px 0">
                <Text size="32px" bold>회원 가입</Text>

                <Grid padding="12px 0">
                    <Input label="아이디"
                    placeholder='아이디를 입력해줘'
                    _onChange={(e) => {
                        setId(e.target.value);
                    }} />
                </Grid>

                <Grid padding="12px 0">
                    <Input label="닉네임"
                    placeholder='닉네임을 입력해줘'
                    _onChange={(e) => {
                        setUserName(e.target.value);
                    }} />
                </Grid>

                <Grid padding="12px 0">
                    <Input 
                    type="password"
                    label="비밀번호"
                    placeholder='비밀번호를 입력해줘'
                    _onChange={(e) => {
                        setPwd(e.target.value);
                    }} />
                </Grid>

                <Grid padding="12px 0" margin="0 0 2rem 0">
                    <Input 
                    type="password"
                    label="비밀번호 확인"
                    placeholder='비밀번호를 다시 입력해줘'
                    _onChange={(e) => {
                        setPwdCheck(e.target.value);
                    }} />
                </Grid>

                <Button text="회원가입하기"
                _onClick={signup}></Button>

            </Grid>
        </React.Fragment>
    )
}



export default Signup;