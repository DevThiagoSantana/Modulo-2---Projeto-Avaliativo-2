import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiService } from '../../services/api'

const useUser = () => {
  const navigate = useNavigate()
  const [dataUser, setDataUser] = useState([])
  const [dataStudents, setDataStudents] = useState([])
  const [dataAccompaniments, setDataAccompaniments] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const postRequest = async (path, body) => {
    setIsSubmitting(true)
    const response = await apiService.post(path, body)
    setError(response.error)
    setDataUser(response.data)
    setIsSubmitting(false)
    const auth = localStorage.getItem('token')
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
      setDataStudents(data)
      if (err) {
        alert(error)
      }
      setIsSubmitting(false)
    } else {
      const { data, error: err } = await apiService.get('/students')
      setError(err)
      setDataStudents(data)
      if (err) {
        alert(error)
      }
      setIsSubmitting(false)
    }
  }
  const getAccompaniments = async (filter) => {
    setIsSubmitting(true)
    if (filter) {
      const { data, error: err } = await apiService.get(`/accompaniments?title_like=${filter}`)
      setError(err)
      setDataAccompaniments(data)
      if (err) {
        alert(error)
      }
      setIsSubmitting(false)
    } else {
      const { data, error: err } = await apiService.get('/accompaniments')
      setError(err)
      setDataAccompaniments(data)
      if (err) {
        alert(error)
      }
      setIsSubmitting(false)
    }
  }
  const getFinishAccompaniments = async (filter) => {
    setIsSubmitting(true)
    if (filter) {
      const { data, error: err } = await apiService.get(`accompaniments?finished=false&userId=${filter}&_expand=user&_expand=student`)
      setError(err)
      setDataAccompaniments(data)
      if (err) {
        alert(error)
      }
      setIsSubmitting(false)
    }
  }
  const getUser = async (filter) => {
    setIsSubmitting(true)
    if (filter) {
      const { data, error: err } = await apiService.get(`/user?name_like=${filter}`)
      setError(err)
      setDataUser(data)
      if (err) {
        alert(error)
      }
      setIsSubmitting(false)
    } else {
      const { data, error: err } = await apiService.get('/users')
      setError(err)
      setDataUser(data)
      if (err) {
        alert(error)
      }
      setIsSubmitting(false)
    }
  }

  return {
    isSubmitting,
    error,
    postRequest,
    getStudents,
    getAccompaniments,
    getFinishAccompaniments,
    getUser,
    user: dataUser,
    students: dataStudents,
    accompaniments: dataAccompaniments
  }
}

export default useUser
