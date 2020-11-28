import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width:100%;
    padding:100px;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;   
`;

export const ButtonAnswer = styled.button`
    width:80%;
    padding:15px;
    margin-top:30px;
    border-radius:4px;
    border:none;
    background-color:rgba( 110, 180, 184, 0.2);
    transition: all 0.2s;

    &:hover{
        background-color:rgba( 110, 180, 184, 0.8);
    }
`;

export const ButtonNext = styled.button`
    width:20%;
    align-self:right;
    padding:15px;
    margin-top:30px;
    border-radius:4px;
    border:none;
    background-color:rgba( 197, 235, 218, 0.8);
    transition: all 0.2s;

    &:hover{
        background-color:rgba( 197, 235, 218, 0.4);
    }
`;