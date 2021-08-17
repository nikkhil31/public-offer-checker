import logo from './logo.svg'
import './App.css'
import Global, { Mobilefirst } from './styled.default'
import Companies from './components/Companies'
import { Screen } from './components/companies.elements'
import ChoosePan from './components/ChoosePan'

function App() {
    return (
        <>
            <Global />
            <Screen>
                {/* <Companies /> */}
                <ChoosePan />
            </Screen>
        </>
    )
}

export default App
