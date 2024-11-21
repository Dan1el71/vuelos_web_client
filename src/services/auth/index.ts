import axios from '@libs/axios'

export const submitEmailService = async (email: string) => {
  return await axios.post('/auth/submit/email', {
    email,
  })
}

export const login = async (username: string, password: string) => {
  return await axios.post('/auth/login', {
    username,
    password,
  })
}
