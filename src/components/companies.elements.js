import styled from 'styled-components'
import { GrFormNextLink } from 'react-icons/gr'
import { ArrowForward } from '@styled-icons/evaicons-solid/ArrowForward'

export const Screen = styled.div`
    width: 425px;
    height: 100vh;
    background-color: #e7eaef;
`

export const CompaniesUL = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;

    & li {
        list-style: none;
        background-color: #fdfdfd;
        width: 90%;
        margin-bottom: 1rem;
        height: 60px;
        border-radius: 12px;
        position: relative;
        border-bottom: 1px solid #ddd;
        cursor: pointer;
    }

    & li::before {
        content: '';
        position: absolute;
        width: 7.5px;
        height: 70%;
        top: 15%;
        bottom: 15%;
        left: 10px;
        background-color: #3067dd;
        border-radius: 5px;
    }
`

export const CompanyName = styled.h4`
    margin-left: 1.7rem;
    margin-top: 0.7rem;
    width: 80%;
    display: inline-block;
    color: #4e4e59;
`

export const GoIcon = styled(ArrowForward)`
    width: 11%;
    height: 20px;
    display: inline-block;
    color: #abadb5;
`

export const IssuePrice = styled.p`
    margin-top: 0.2rem;
    margin-left: 1.7rem;
    font-size: 0.9em;
    color: #aeaeb3;
`
