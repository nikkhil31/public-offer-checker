import React from 'react'
import {
    CompaniesUL,
    CompanyName,
    GoIcon,
    IssuePrice,
} from './companies.elements'

const Companies = () => {
    return (
        <CompaniesUL>
            <li>
                <CompanyName>Devyani Food PVT. LIMITED</CompanyName>
                <GoIcon />
                <IssuePrice>Issue Price : 460</IssuePrice>
            </li>
            <li>
                <CompanyName>Devyani Food PVT. LIMITED</CompanyName>
                <GoIcon />
                <IssuePrice>Issue Price : 460</IssuePrice>
            </li>
        </CompaniesUL>
    )
}

export default Companies
