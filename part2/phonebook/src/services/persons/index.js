import axios from 'axios'

const URL = 'http://localhost:3001/persons/'

export function getAll() {
  return axios.get(URL).then(response => {
    const { data } = response
    return data
  })
}

export function create(person) {
  return axios.post(URL, person).then(response => {
    const { data } = response
    return data
  })
}

export function remove(id) {
  return axios.delete(URL + id).then(response => {
    const { data } = response
    console.log(data);
    return data
  })
}