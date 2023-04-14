import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { mainTheme } from './styles'
import PageWrapper from './components/PageWrapper'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import UserRegister from './pages/UserRegister'
import HomePage from './pages/HomePage'
import UserRegisterStudents from './pages/UserRegisterStudents/UserRegisterStudents'
import { AuthenticationProvider } from './hooks/UseAuthentication/useAuthentication'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [globalState, setGlobalState] = useState()

  return (
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
         <AuthenticationProvider>
          <Navbar/>
            <PageWrapper>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/students" element={<UserRegisterStudents />}/>
                <Route path="*" element={<NotFound />} />
                <Route path='/register' element={<UserRegister/>}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path="/" element={<Navigate to="/login" />} />
              </Routes>
            </PageWrapper>
          </AuthenticationProvider>
        </BrowserRouter>
      </ThemeProvider>
  )
}

export default App
