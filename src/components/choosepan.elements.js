import styled from 'styled-components'

export const Checkbox = styled.div`
    padding-top: 2rem;
    width: 80%;
    padding: 1rem;
    /* background-color: blue; */
    margin-left: 10%;
    border-radius: 20px;

    & input {
        cursor: pointer;
        opacity: 0;
        position: absolute;
    }

    & label {
        width: 100%;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
    }

    & label::before {
        content: '';
        width: 1em;
        height: 1em;
        border-radius: 99px;
        /* margin-right: 1.5rem; */
        border: 0.05em solid black;
    }
`

export const MainPage = styled.div`
    width: 100%;
`
