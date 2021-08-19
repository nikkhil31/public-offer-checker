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
    left: 0;
    width: 100%;
    height: 45px;
    padding: 0.5rem;
`

export const Panwraper = styled.div`
    margin-top: 2rem;
    height: 100%;
    overflow-y: scroll;
`
export const BackIcon = styled(FaLongArrowAltLeft)`
    /* display: inline-block; */
    /* padding: 1rem; */
`
