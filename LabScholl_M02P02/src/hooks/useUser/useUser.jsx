import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiService } from '../../services/api'

const useUser = () => {
  const navigate = useNavigate()

  const [data, setData] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const postRequest = async (path, body) => {
    setIsSubmitting(true)
    const response = await apiService.post(path, body)
    setError(response.error)
    setData(response.data)
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

  return {
    user: data,
    isSubmitting,
    error,
    postRequest
  }
}

export default useUser
