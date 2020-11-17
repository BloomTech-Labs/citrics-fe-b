import axios from 'axios'
export * from 'axios'

export default function axiosWithAuth() {
  const token = localStorage.getItem('token')
  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    baseURL: 'https://labs-28-citrics-b.herokuapp.com/',
  })
}
