import React from "react";
import styled from "styled-components";


const Button = (props) => {

    const {text, _onClick, margin, width, _disabled, is_float} = props;

    if(is_float) {
        return (
            <React.Fragment>
                <FloatButton onClick={_onClick}>{text}</FloatButton>
            </React.Fragment>
        )
    }

    const styles = {
        margin,
        width,
    }

    return (
        <React.Fragment>
            <Btn {...styles} onClick={_onClick} disabled={_disabled}>{text}</Btn>
        </React.Fragment>
    )
}

Button.defaultProps = {
    text: '버튼',
    _onClick: () => {},
    margin: false,
    width: '100%',
    _disabled: false,
    is_float: false,
}

const Btn = styled.button`
    width: ${(props) => (props.width)};
    background-color: #9E56EB;
    border: none;
    color: #fff;
    padding: 12px 0px;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 10px;
    ${(props) => (props.margin ? `margin: ${props.margin}` : '' )}
`;

const FloatButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: #212121;
    color: #ffffff;
    box-sizing: border-box;
    font-size: 36px;
    font-weight: 800;
    position: fixed;
    bottom: 50px;
    right: 16px;
    text-align: center;
    vertical-align: middle;
    border: none;
    border-radius: 50px;
    cursor: pointer;
`;


export default Button;