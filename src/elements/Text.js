import React from "react";
import styled from "styled-components";


const Text = (props) => {

    const {children, bold, color, size} = props;

    const styles = {
        bold,
        color,
        size,
    }

    return (
        <React.Fragment>
            <P {...styles}>
                {children}
            </P>
        </React.Fragment>
    )
}


Text.defaultProps = {
    children: null,
    bold: false,
    color: "#222831",
    size: "14px",
}

const P = styled.p`
    margin: 10px 0;
    color: ${(props) => (props.color)};
    font-size: ${(props) => (props.size)};
    font-weight: ${(props) => (props.bold ? "800" : "400" )};
`;



export default Text;