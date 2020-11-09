import axios from 'axios'
export * from 'axios'

export default function axiosWithoutAuth() {
  return axios.create({
    baseURL: 'https://labs-28-citrics-b.herokuapp.com/',
  })
}
