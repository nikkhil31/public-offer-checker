import { FaCheck, FaLongArrowAltLeft } from 'react-icons/fa'
import styled from 'styled-components'

export const Checkbox = styled.div`
    width: 90%;
    background-color: #fdfdfd;
    margin: 0 5%;
    display: flex;
    padding: 1rem;
    border-radius: 12px;
    cursor: pointer;
    margin-top: 1rem;

    /* & div {
        width: 1.5rem;
        height: 1.5rem;
        border: 1px solid #ddd;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #7edb75;
    } */

    & h3 {
        padding-left: 2rem;
        color: #4e4e59;
    }
`

export const CheckIcon = styled(FaCheck)`
    color: ${({ checked }) => (checked ? '#fdfdfd' : '#4e4e59')};
`

export const CheckCircle = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid ${({ checked }) => (checked ? '#7edb75' : '#4e4e59')};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ checked }) => (checked ? '#7edb75' : '')};
`

export const MainPage = styled.div`
    width: 100%;
`

export const Header = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    width: inherit;
    height: 50px;
    padding: 0.5rem 1.5rem;
    background-color: #9b9ca4;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const Panwraper = styled.div`
    margin-top: 2rem;
    height: calc(100% - 100px);
    overflow-y: scroll;
`
export const BackIcon = styled(FaLongArrowAltLeft)`
    /* display: inline-block; */
    /* padding: 1rem; */
    /* position: relative; */
    color: #fdfdfd;
`

export const Footer = styled.div`
    width: inherit;
    height: 55px;
    position: fixed;
    bottom: 0;
    background-color: #9b9ca4;
    border-radius: 10px 10px 0 0;
    padding: 0 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const AddBtn = styled.div`
    width: 22%;
    height: 40px;
    /* padding: 0.7rem; */
    background-color: #fdfdfd;
    /* margin-top: 0.5rem; */
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SubmitBtn = styled.div`
    width: 75%;
    height: 40px;
    /* padding: 0.7rem; */
    background-color: #e7eaef;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 0.5rem; */

    & span {
        font-weight: bold;
        font-size: 1.2rem;
        color: #000;
    }
`
