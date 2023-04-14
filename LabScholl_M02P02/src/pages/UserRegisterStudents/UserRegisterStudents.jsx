import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  RegisterPageContainer,
  RegisterPageSection,
  RegisterPageSectionCard

} from './styles'
import Card from '../../components/Card'
import InputGroup from '../../components/InputGroup'
import Button, { BUTTON_VARIANT } from '../../components/Button'
import useUser from '../../hooks/useUser'
import './UserRegisterStudents.css'

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  grade: yup.number().required('Campo obrigatório'),
  phone: yup.number().optional(),
  birthDate: yup.string().required('Campo obrigatório'),
  cpf: yup.string().required('Campo obrigatório')
})

function UserRegisterStudents() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      grade: '',
      phone: '',
      birthDate: '',
      cpf: ''
    },
    resolver: yupResolver(schema)
  })

  // eslint-disable-next-line no-unused-vars
  const { isSubmitting, postRequest } = useUser()

  const onSubmit = (data) => {
    postRequest('/students', data)
  }

  return (
  <RegisterPageContainer>
      <RegisterPageSection>
        <Card>
          <RegisterPageSectionCard>
            <h1 className="register-page-section-title">Cadastrar Aluno</h1>

            <form
              className="register-page-section-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="register-page-section-form-row">
                <div className="register-page-section-form-column">
                  <InputGroup
                    labelText="Nome:"
                    placeholder="Nome do Aluno"
                    helperText={errors?.name?.message}
                    {...register('name')}
                  />
                  <InputGroup
                    labelText="Telefone:"
                    placeholder="Telefone do Aluno"
                    helperText={errors?.phone?.message}
                    {...register('phone')}
                  />
                  <InputGroup
                    labelText="Data de Nascimento:"
                    type="date"
                    placeholder="Data de Nascimento do Aluno"
                    helperText={errors?.birthDate?.message}
                    {...register('birthDate')}
                  />
                  <InputGroup
                    labelText="CPF:"
                    placeholder="CPF do Aluno"
                    helperText={errors?.cpf?.message}
                    {...register('cpf')}
                  />
                  <InputGroup
                    labelText="Nota:"
                    placeholder="Nota do Aluno"
                    helperText={errors?.nota?.message}
                    {...register('grade')}
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
                    onClick={() => navigate('/home')}
                  >
                    Cancelar
                  </Button>
                </div>
              </div>
            </form>
          </RegisterPageSectionCard>
        </Card>
      </RegisterPageSection>
    </RegisterPageContainer>
  )
}

export default UserRegisterStudents
