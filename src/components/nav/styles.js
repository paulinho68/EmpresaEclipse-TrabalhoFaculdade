import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width:100%;
    background-color: #25282E;
    color:white;
`;

export const Header = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#6EB4B8;
    padding:30px 60px;

    h2{
        margin-top:10px;
        text-align:center;
    }
`;

export const Navigation = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`;

export const Link = styled.button`
    margin:0 25px;
    padding:20px;
    background-color:#25282E;
    font-size:18px;
    text-align:left;
    color:#FFF;
    transition: all 0.5s;

    box-shadow: none;
    border:none;

    p{
        transition: all 0.5s;
        margin: 2.5px 0;
    }

    &:hover{
        p{
            font-size:20px;
        }
        font-size:20px;    
    }

`;