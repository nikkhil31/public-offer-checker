import logo from './logo.svg'
import './App.css'
import Global, { Mobilefirst } from './styled.default'
import Companies from './components/Companies'
import { Screen } from './components/companies.elements'

function App() {
    return (
        <>
            <Global />
            <Screen>
                <Companies />
            </Screen>
        </>
    )
}

export default App
