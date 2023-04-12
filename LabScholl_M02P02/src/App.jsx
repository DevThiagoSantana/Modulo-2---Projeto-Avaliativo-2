import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { mainTheme } from './styles'
import PageWrapper from './components/PageWrapper'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import UserRegister from './pages/UserRegister'
import HomePage from './pages/HomePage'
import { AuthenticationProvider } from './hooks/UseAuthentication/useAuthentication'

function App() {
  const [globalState, setGlobalState] = useState()

  return (
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
         <AuthenticationProvider>
          <Navbar/>
                <PageWrapper>
                  <Routes>

                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path='/register' element={<UserRegister/>}/>
                    <Route path='/home' element={<HomePage/>}/>
                  </Routes>
                </PageWrapper>
          </AuthenticationProvider>
        </BrowserRouter>
      </ThemeProvider>
  )
}

export default App
