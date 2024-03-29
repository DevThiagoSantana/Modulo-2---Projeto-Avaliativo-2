import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputGroup from '../../components/InputGroup'
import Button from '../../components/Button'

import {
  LoginCenterBox,
  LoginPageContainer,
  LoginForm,
  Title,
  SigninButton
} from './styles.js'
import useAuthenticationContext from '../../hooks/UseAuthentication/useAuthentication'

function Login() {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate()
 

  const [email, setEmail] = useState('')
  const [showEmailHelper, setShowEmailHelper] = useState(false)

  const [password, setPassword] = useState('')
  const [showPasswordHelper, setShowPasswordHelper] = useState(false)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChangeEmail = (event) => {
    const newEmail = event.target.value
    setEmail(newEmail)
  }

  const handleChangePassword = (event) => {
    const newPassword = event.target.value
    setPassword(newPassword)
  }
  const { login } = useAuthenticationContext()

  const handleLoginAction = async (event) => {
    event.preventDefault()
    setError(null)
    setShowEmailHelper(!email)
    setShowPasswordHelper(!password)
    if (!email || !password) {
      return
    }
    setLoading(true)
    login(email, password)
    setLoading(false)
  }

  return (
      <LoginPageContainer>
        <LoginCenterBox>
          <Title>LabSchool</Title>
          <LoginForm>
            <InputGroup
              type="text"
              placeholder="Seu e-mail"
              labelText="E-mail"
              value={email}
              onChange={handleChangeEmail}
              helperText={showEmailHelper ? 'Campo obrigatório' : ''}
            />
            <InputGroup
              type="password"
              placeholder="Sua senha"
              labelText="Senha"
              value={password}
              onChange={handleChangePassword}
              helperText={showPasswordHelper ? 'Campo obrigatório' : ''}
            />
          </LoginForm>

          {error && <p className="errorMessage">{error}</p>}

          <Button onClick={handleLoginAction} disabled={loading}>
            {loading ? 'Carregando...' : 'Entrar'}
          </Button>

          <SigninButton to="/register">Cadastrar</SigninButton>
        </LoginCenterBox>
      </LoginPageContainer>
  )
}

export default Login
