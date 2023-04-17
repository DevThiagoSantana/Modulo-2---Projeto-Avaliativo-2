import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  EditAccompanimentsContainer,
  EditAccompanimentsSection,
  EditAccompanimentsSectionCard
} from './styles'
import Card from '../../components/Card'
import InputGroup from '../../components/InputGroup'
import Button, { BUTTON_VARIANT } from '../../components/Button'
import useUser from '../../hooks/useUser'
import SelectGroup from '../../components/SelectGroup'
import './EditAccompaniments.css'
import { useEffect } from 'react'

const schema = yup.object().shape({
  studentId: yup.number().required('Campo obrigatório'),
  userId: yup.number().required('Campo obrigatório'),
  title: yup.string().required('Campo obrigatório'),
  description: yup.string().required('Campo obrigatório'),
  date: yup.date().max(new Date(), 'Data invalida').required('Campo obrigatório'),
  finished: yup.boolean()
})

function EditAccompaniments() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { accompaniments, user, students, getAccompaniments, getStudents, getUser } = useUser()
  console.log(accompaniments)

  useEffect(() => {
    getUser()
    getStudents()
    getAccompaniments(id)
  }, [])
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      studentId: '',
      userId: '',
      title: '',
      description: '',
      date: '',
      finished: false
    },
    values: {
      studentId: accompaniments?.studentId,
      userId: accompaniments?.userId,
      date: accompaniments?.date,
      title: accompaniments?.title,
      description: accompaniments?.description,
      finished: accompaniments?.finished
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    postRequest('/accompaniments', data)
  }

  return (
  <EditAccompanimentsContainer>
      <EditAccompanimentsSection>
        <Card>
          <EditAccompanimentsSectionCard>
            <h1 className="register-page-section-title">Editar Acompanhamento Pedagogico</h1>

            <form
              className="register-page-section-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="register-page-section-form-row">
                <div className="register-page-section-form-column">
                  <ul>Aluno:
                  <SelectGroup
                    name="alunos"
                    lista={students}
                  />
                  <InputGroup
                  placeholder="ID do Aluno"
                  helperText={errors?.studentId?.message}
                    {...register('studentId')}
                  />
                  </ul>
                  <ul>Pedagogo:
                  <SelectGroup
                    name="pedagogo"
                    lista={user}
                  />
                  <InputGroup
                    placeholder="Data de Atendimento"
                    helperText={errors?.userId?.message}
                    {...register('userId')}
                  />
                  </ul>
                  <InputGroup
                    labelText="Data Atendimento:"
                    type="date"
                    placeholder="Data de Atendimento"
                    helperText={errors?.date?.message}
                    {...register('date')}
                  />
                  <InputGroup
                    labelText="titulo:"
                    placeholder="Titulo"
                    helperText={errors?.title?.message}
                    {...register('title')}
                  />
                  <InputGroup
                    labelText="Descrição:"
                    placeholder="Descrição"
                    helperText={errors?.description?.message}
                    {...register('description')}
                  />
                  <div className='checkbox'>Concluido?
                    <input
                    type="checkbox"
                    {...register('finished')}
                    />
                  </div>
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
                    onClick={() => navigate('/accompaniments')}
                  >
                    Cancelar
                  </Button>
                </div>
              </div>
            </form>
          </EditAccompanimentsSectionCard>
        </Card>
      </EditAccompanimentsSection>
    </EditAccompanimentsContainer>
  )
}

export default EditAccompaniments
