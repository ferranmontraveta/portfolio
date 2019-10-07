import React from "react"
import styled from 'styled-components';

const StyledHeader1 = styled.h1`
    @import url('https://fonts.googleapis.com/css?family=Exo:100&display=swap');
    font-family: 'Exo', sans-serif;
    font-weight: thin;
    color: #aeb1c2;
    font-size: 1.5em;
    margin-bottom: -0.55em;
`;

const StyledHeader2 = styled.h2`
    font-family: 'Exo', sans-serif;
    font-weight: thin;
    color: #aeb1c2;
    font-size: 0.589em;
    margin-top: -0.8em;
`;

const LogoBox = styled.div`
    &:hover {
        animation: logoanime 0.3s linear forwards;
    }
    @keyframes logoanime
    {
        66%
        {
            transform: scale(1.03);
        }
        100%
        {
            transform: scale(1.1);
        }
    }
`;

const Line = styled.hr`
    width:33rem;

    @media screen and (max-width:834px) {
        width:18rem;
    }

    @media screen and (max-width:640px) {
        width:13rem;
    }
`;

export default props => 
<LogoBox>
    <StyledHeader1>
        {props.name}
    </StyledHeader1>
    <Line/>
    <StyledHeader2>
        {props.surnames}
    </StyledHeader2>
</LogoBox>