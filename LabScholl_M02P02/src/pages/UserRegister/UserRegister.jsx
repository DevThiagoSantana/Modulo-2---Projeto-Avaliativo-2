import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  UserRegisterContainer,
  UserRegisterSection,
  UserRegisterSectionCard

} from './styles'
import Card from '../../components/Card'
import InputGroup from '../../components/InputGroup'
import Button, { BUTTON_VARIANT } from '../../components/Button'
import useUser from '../../hooks/useUser'

import './UserRegister.css'

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
  repassword: yup.string().required('Campo obrigatorio').oneOf([yup.ref('password')], 'Passwords must match'),
  phone: yup.number().optional(),
  birthDate: yup.date().max(new Date(), 'Data invalida').required('Campo obrigatório'),
  cpf: yup.string().required('Campo obrigatório')
})

function UserRegister() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
      birthDate: '',
      cpf: ''
    },
    resolver: yupResolver(schema)
  })

  // eslint-disable-next-line no-unused-vars
  const { isSubmitting, postRequest } = useUser()

  const onSubmit = (data) => {
    postRequest('/register', data)
  }

  return (
  <UserRegisterContainer>
      <UserRegisterSection>
        <Card>
          <UserRegisterSectionCard>
            <h1 className="register-page-section-title">Cadastrar Pedagogico</h1>

            <form
              className="register-page-section-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="register-page-section-form-row">
                <div className="register-page-section-form-column">
                  <InputGroup
                    labelText="Nome:"
                    placeholder="Seu nome"
                    helperText={errors?.name?.message}
                    {...register('name')}
                  />
                  <InputGroup
                    labelText="Telefone:"
                    placeholder="Seu Telefone"
                    helperText={errors?.phone?.message}
                    {...register('phone')}
                  />
                  <InputGroup
                    labelText="Data de Nascimento:"
                    type="date"
                    placeholder="Sua Data de Nascimento"
                    helperText={errors?.birthDate?.message}
                    {...register('birthDate')}
                  />
                  <InputGroup
                    labelText="CPF:"
                    placeholder="Seu CPF"
                    helperText={errors?.cpf?.message}
                    {...register('cpf')}
                  />
                  <InputGroup
                    labelText="E-mail:"
                    placeholder="Seu e-mail"
                    helperText={errors?.email?.message}
                    {...register('email')}
                  />
                  <InputGroup
                    labelText="Senha:"
                    placeholder="Sua senha"
                    helperText={errors?.senha?.message}
                    type="password"
                    {...register('password')}
                  />
                  <InputGroup
                    labelText="Confirme Senha:"
                    placeholder="Sua senha"
                    helperText={errors?.senha?.message}
                    type="password"
                    {...register('repassword')}
                  />
                </div>
              </div>

              <div className="register-page-section-form-footer">
                <div>
                  <Button type="submit" >
                    Cadastrar
                  </Button>
                </div>
                <div>
                  <Button
                    type="button"
                    variant={BUTTON_VARIANT.PRIMARY_LINK}
                    onClick={() => navigate('/login')}
                  >
                    Cancelar
                  </Button>
                </div>
              </div>
            </form>
          </UserRegisterSectionCard>
        </Card>
      </UserRegisterSection>
    </UserRegisterContainer>
  )
}

export default UserRegister
