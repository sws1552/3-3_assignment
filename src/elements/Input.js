import React from "react";
import styled from "styled-components";


import {Text, Grid} from "./index";

const Input = (props) => {

    const {multiline, label, placeholder, type, _onChange} = props;

    if(multiline){
        return (
            <React.Fragment>
                <Grid>
                    {label && <Text margin="0px">{label}</Text>}
                    <ElTextarea rows={10}
                    placeholder={placeholder}
                    onChange={_onChange}/>
                </Grid>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Grid>
                {label && <Text margin="0px">{label}</Text>}
                <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
            </Grid>
        </React.Fragment>
    )
}

Input.defaultProps = {
    multiline: false,
    label: false,
    placeholder: "텍스트를 입력해주세요.",
    type: "text",
    _onChange: () => {}
};

const ElTextarea = styled.textarea`
    border: 2px solid #9E56EB;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
`;


const ElInput = styled.input`
    border: 2px solid #9E56EB;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
`;


export default Input;