import React from "react";
import styled from "styled-components";


const Grid = (props) => {
    
    const {children, is_flex, width, padding, margin, bg} = props;

    const styles = {
        is_flex,
        width,
        padding,
        margin,
        bg,
    }

    return (
        <React.Fragment>
            <GridBox {...styles}>
                {children}
            </GridBox>
        </React.Fragment>
    )

}

Grid.defaultProps = {
    children: null,
    is_flex: false,
    width: "100%",
    padding: false,
    margin: false,
    bg: false,
};

const GridBox = styled.div`
    height: 100%;
    box-sizing: border-box;
    /* defaultProps에 100% 라는 값이 있기에 이렇게 작성하는게 맞는거같다.
    다른값이 들어오면 바로적용된다 */
    width: ${(props) => (props.width)};
    ${(props) => (props.padding ? `padding: ${props.padding}` : "" )};
    ${(props) => (props.margin ? `margin: ${props.margin}` : "" )};
    ${(props) => (props.bg ? `background-color: ${props.bg}` : "" )};
    ${(props) => (props.is_flex ? 
    `display: flex;
    align-items: center;
    justify-content: space-between;`
    : "" )};
`;


export default Grid;