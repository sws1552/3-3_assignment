import React from "react";
import styled from "styled-components";
import {Grid, Text, Input, Button} from '../elements';
import { setCookie } from "../shared/Cookie";
import _ from 'lodash';
import {useDispatch} from 'react-redux';
import {actionCreators as userActions} from "../redux/modules/user";
import {emailCheck} from "../shared/common";


const Login = (props) => {

    const dispatch = useDispatch();

    const [id, setId] = React.useState('');
    const [pwd, setPwd] = React.useState('');

    let is_disabled = false;
    if(id === '' || pwd === ''){
        is_disabled = true;
    }

    const debounceId = _.debounce((e) => {
        setId(e.target.value);
    }, 1000);

    const idKeyPress = React.useCallback(debounceId, []);

    const changeId = ((e) => idKeyPress(e));

    const debouncePwd = _.debounce((e) => {
        setPwd(e.target.value);
    }, 500);

    const pwdKeyPress = React.useCallback(debouncePwd, []);

    const changePwd = ((e) => pwdKeyPress(e));

    const login = () => {
        if(id === "" || pwd === ""){
            window.alert("아이디 혹은 비밀번호가 공란입니다. 입력해주세요");
            return;
        }

        if(!emailCheck(id)){
            window.alert("이메일 형식이 맞지 않습니다!");
            return;
        }

        dispatch(userActions.loginFB(id, pwd));

    }

    

    return (
        <React.Fragment>
            <Grid padding="16px 0">
                <Text bold size='2rem'>로그인</Text>

            <Grid padding="10px 0 0 0">
                <Input label="아이디"
                placeholder="아이디를 입력해주세요."
                _onChange={changeId}/>
            </Grid>

            <Grid padding="16px 0 30px 0">
                <Input label="비밀번호"
                type='password'
                placeholder="비밀번호를 입력해주세요."
                _onChange={changePwd}/>
            </Grid>

            <Button text="로그인하기"
            _onClick={() => {
                login();
            }}
            _disabled={is_disabled}
            ></Button>
            
            </Grid>
        </React.Fragment>
    )
}



export default Login;