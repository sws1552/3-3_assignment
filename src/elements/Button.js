import React from "react";
import styled from "styled-components";


const Button = (props) => {

    const {text, _onClick, margin, width} = props;

    const styles = {
        margin,
        width,
    }

    return (
        <React.Fragment>
            <Btn {...styles} onClick={_onClick}>{text}</Btn>
        </React.Fragment>
    )
}

Button.defaultProps = {
    text: '버튼',
    _onClick: () => {},
    margin: false,
    width: '100%',
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


export default Button;