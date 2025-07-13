import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignIn } from './pages/signIn.jsx'
import { SignUp } from './pages/signUp.jsx'
import {DashBoard} from './pages/dashBoard.jsx'
import { SendMoney } from './pages/sendMoney.jsx'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/signin' element={<SignIn />} />
                    <Route path='/dashboard' element={<DashBoard />} />
                    <Route path='/sendmoney' element={<SendMoney />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App