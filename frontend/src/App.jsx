import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'

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