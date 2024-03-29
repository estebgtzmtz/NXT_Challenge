import styled from "styled-components";

export const TodoItem = styled.div `
    min-width: 15%;
    max-width:16%;
    max-heigth: 10rem;
    min-height: 10rem;
    margin: 2px 0 2px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .toDo-container{
        h1{
            font-weight: bold;
        }
        border:4px solid #3182CE;
        background-color: #BEE3F8;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content:space-evenly;
        padding: 5% 5%;
        width 90%;
    }
    .completed-container{
        h1{
            font-weight: bold;
        }
        border:4px solid #38A169;
        background-color: #7bd1a3;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content:space-evenly;
        padding: 5% 5%;
        width 90%;
    }

    .aborted-container{
        h1{
            font-weight: bold;
        }
        border:4px solid #DD6B21;
        background-color: rgb(221,107,33, 0.5);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content:space-evenly;
        padding: 5% 5%;
        width 90%;
    }
    .action-buttons{
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        .complete{
            width: 100%;
            background-color: #38A169;
            border-radius: 5px;
            color: white;
            margin-top: .5rem;
        }
        .aborted{
            width: 100%;
            background-color: #DD6B21;
            border-radius: 5px;
            color: white;
            margin-top: .5rem;
        }
        .delete{
            width: 100%;
            background-color: #E53E3E;
            border-radius: 5px;
            color: white;
            margin-top: .5rem;
        }
    }
    
    @media screen and (max-width: 1440px) {
        min-width: 15%;
        max-width:16%;
        max-heigth: 10rem;
        min-height: 10rem;
    }
    @media screen and (max-width: 1025px) {
        min-width: 25%;
    }
    @media screen and (max-width: 769px) {
        min-width: 90%;
    }
    @media screen and (max-width: 426px) {
        min-width: 90%;
    }
`