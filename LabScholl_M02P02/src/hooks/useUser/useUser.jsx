import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiService } from '../../services/api'

const useUser = () => {
  const navigate = useNavigate()
  const [dataUser, setDataUser] = useState()
  const [dataStudents, setDataStudent]= useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const postRequest = async (path, body) => {
    setIsSubmitting(true)
    const response = await apiService.post(path, body)
    setError(response.error)
    setDataUser(response.data)
    setIsSubmitting(false)
    const auth = localStorage.getItem('token')
    console.log(auth)
    if (response.error) {
      alert(response.error)
    } else if (auth) {
      navigate('/home')
    } else {
      navigate('/login')
    }
    return response.data
  }

  const getStudents = async (filter) => {
    setIsSubmitting(true)
    if (filter) {
      const { data, error: err } = await apiService.get(`/students?name_like=${filter}`)
      setError(err)
      setDataStudent(data)
      if (err) {
        alert(error)
      }
      setIsSubmitting(false)
    } else {
      const { data, error: err } = await apiService.get(`/students`)
      setError(err)
      setDataStudent(data)
      if (err) {
        alert(error)
      }
      setIsSubmitting(false)
    }
  }

  return {
    user: dataUser,
    students: dataStudents,
    isSubmitting,
    error,
    postRequest,
    getStudents
  }
}

export default useUser
