import axios from 'axios'
const axiosWithAuth = () => {
  const token = window.localStorage.getItem('token')
  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: 'https://labs-28-citrics-b.herokuapp.com',
  })
}
export default axiosWithAuth
