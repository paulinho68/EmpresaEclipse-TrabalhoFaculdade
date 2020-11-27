import styled from 'styled-components';

export const Container = styled.div`
    max-width:900px;
    max-width:700px;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    display:flex;
    flex-direction:column;

    img{
        width:100%;
        height:400px;
    }
`;

export const Content = styled.div`
    padding: 10px 30px;
`;

export const Title = styled.h2`
    margin-top:15px;
`;

export const Text = styled.p`
    margin:30px 0;
    text-align:justify;
`;

