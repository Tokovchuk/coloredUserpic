import React from 'react';
import styled from 'styled-components';
import ava from './avatar.png';

const StyledUserpic = styled.div`
margin: 30px;
box-sizing: border-box;
border: ${props => props.margin}px solid ${props => props.backgroundColor};
border-radius: 50%;
width: ${props => props.size - props.colorWidth * 2 }px;
height: ${props => props.size - props.colorWidth * 2}px;
position: relative;

& img {
width: 100%;
border-radius: 50%;
}

&::before {
content: '';
width: ${props => props.size}px;
height: ${props => props.size}px;
position: absolute;
top: -${props => props.margin + props.colorWidth}px;
left: -${props => props.margin + props.colorWidth}px;
background-image: linear-gradient(to right, ${props => props.colors[0]}, ${props => props.colors[1]});
border-radius: 50%;
z-index: -1;
}

&:hover::before {
background-image: linear-gradient(to right, ${props => props.hoverColors[0]}, ${props => props.hoverColors[1]})
}

`

const ColoredUserpic = (props) => {
    return (
        <StyledUserpic {...props}>
            <img src={ava} alt='Userpic'/>
        </StyledUserpic>
    );
};

export default ColoredUserpic;