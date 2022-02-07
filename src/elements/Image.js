import React from "react";
import styled from "styled-components";
import defaultImg from '../images/하늘이.jpg';


const Image = (props) => {

    const {shape, src, size} = props;

    const styles = {
        src,
        size
    }

    if(shape === "circle"){
        return (
            <React.Fragment>
                <Imagecircle {...styles}></Imagecircle>
            </React.Fragment>
        )
    }

    if(shape === "rectangle"){
        return (
            <React.Fragment>
                <AspectOutter>
                    <AspctInner {...styles}></AspctInner>
                </AspectOutter>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>

        </React.Fragment>
    )
}

Image.defaultProps = {
    shape: "circle",
    src: defaultImg,
    size: 36,
}

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`;

const AspctInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url('${(props) => (props.src)}');
    background-size: cover;
    background-position: center;
`;

const Imagecircle = styled.div`
    --size: ${(props) => (props.size)}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => (props.src)}");
    background-size: cover;
    background-position: center;
    margin: 4px;
`;

export default Image;