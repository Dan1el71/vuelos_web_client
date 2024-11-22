import axios from '@libs/axios'

export const submitEmailService = async (username: string) => {
  return await axios.post('/auth/submit/username', {
    username,
  })
}

export const login = async (username: string, password: string) => {
  return await axios.post('/auth/login', {
    username,
    password,
  })
}

export const register = async (username: string, password: string) => {
  return await axios.post('/auth/signup', {
    username,
    password,
    roles: ['ROLE_USER'],
  })
}
