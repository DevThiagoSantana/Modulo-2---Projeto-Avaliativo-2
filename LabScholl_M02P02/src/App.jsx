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
import AuthRoute from './components/AuthRoute'
import UserRegisterStudents from './pages/UserRegisterStudents/UserRegisterStudents'
import { AuthenticationProvider } from './hooks/UseAuthentication/UseAuthentication'
import ListStudents from './pages/ListStudents/ListStudents'
import Accompaniments from './pages/Accompaniments/Accompaniments'
import RegisterAccompaniments from './pages/RegisterAccompaniments/RegisterAccompaniments'
import EditAccompaniments from './pages/EditAccompaniments/EditAccompaniments'

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
                  <Route path="*" element={<NotFound />} />
                  <Route path='/register' element={<UserRegister/>}/>
                  <Route path="/students/register" element={<AuthRoute><UserRegisterStudents/></AuthRoute>}/>
                  <Route path="/students" element={<AuthRoute><ListStudents/></AuthRoute>}/>
                  <Route path='/home' element={<AuthRoute><HomePage/></AuthRoute> }/>
                  <Route path='/accompaniments' element={<AuthRoute><Accompaniments/></AuthRoute> }/>
                  <Route path='/accompaniments/register' element={<AuthRoute><RegisterAccompaniments/></AuthRoute> }/>
                  <Route path='/accompaniments/edit/:id' element={<AuthRoute><EditAccompaniments/></AuthRoute>}/>
                  <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </PageWrapper>
          </AuthenticationProvider>
        </BrowserRouter>
      </ThemeProvider>
  )
}

export default App
