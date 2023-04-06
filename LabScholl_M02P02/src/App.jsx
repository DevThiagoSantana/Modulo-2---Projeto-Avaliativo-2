import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { mainTheme } from './styles'
import PageWrapper from './components/PageWrapper'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import UserRegister  from './pages/UserRegister'

function App() {
  const [globalState, setGlobalState] = useState()

  return (
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <Navbar/>
                <PageWrapper>
                  <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path='/register' element={<UserRegister/>}/>
                  </Routes>
                </PageWrapper>
        </BrowserRouter>
      </ThemeProvider>
  )
}

export default App
