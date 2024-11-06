import styled from 'styled-components';


export const InputContainer = styled.div`
    width: 100%;
    height: 65px;    
    // background-color: purple;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    font-size: 24px;
    font-family: 'Roboto';
    margin: 0;

    input {
        padding: 0 10px;
        width: 100%;
        height: 100%;
        border: 0;
        background-color: #5AB1BB;
        color: black;
        opacity: 0.9;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        font-size: 24px;
        font-family: 'Roboto';
        font-weight: bold;
    }
`