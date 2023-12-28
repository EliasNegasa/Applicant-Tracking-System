import axios from 'axios'

const signIn = async (userData) => {
  const { data } = await axios.post('http://localhost:3000/auth/login', userData)
  return data
}
export { signIn }
