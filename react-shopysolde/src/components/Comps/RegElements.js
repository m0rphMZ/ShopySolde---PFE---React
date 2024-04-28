import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
min-height: 692px;
height: 10vh;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background-position: center;
background-size: cover;
background: rgb(15,155,220);
background: linear-gradient(280deg, rgba(15,155,220,1) 0%, rgba(37,75,124,1) 100%);
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
    `;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
    `;

export const Form = styled.form`
    background: white;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: black;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    `;

export const FormH2 = styled.h2`
    margin-bottom: 40px;
    color: black;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    `;

export const FormLogin = styled.h2`
    margin-bottom: 40px;
    color: #254b7c;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    `;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: black;
    `;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border-color: black;
    border-width: 2.5px;
    border-radius: 4px;
    color: black;
    `;

export const FormButton = styled.button`
    background: #0b7fab;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    transition: 0.2s ease-out;

            &:hover {
                background: #E89674;
                transition: 0.2 ease-out;
                cursor: pointer;
                color: black;
            }
    `;

export const FormH3 = styled.h2`
    margin-top: 100px;
    margin-bottom: 10px;
    color: black;
    font-size: 13px;
    font-weight: 400;
    text-align: center;
    `;

export const Text= styled.span`
    text-align: center;
    margin-top: 24px;
    color: Black;
    font-size: 14px;
    cursor: pointer;
    `;
    



