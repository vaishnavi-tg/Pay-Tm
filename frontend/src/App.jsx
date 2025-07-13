import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignIn } from './pages/SignIn.jsx'
import { SignUp } from './pages/SignUp.jsx'
import { DashBoard } from './pages/DashBoard.jsx'
import { SendMoney } from './pages/SendMoney.jsx'

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