import axios from 'axios'

/**
 * 
 * URL_JSON_PLACEHOLDER: https://jsonplaceholder.typicode.com/posts
 */

const URL = 'http://localhost:3001/notes/'

export function create({ title, body, userId }) {
  return axios
    .post(URL, { title, body, userId })
    .then(response => {
      const { data } = response
      return data
    })
}

export function getAll() {
  return axios.get(URL)
    .then(response => {
      const { data } = response
      return data
    })
}

export function update(changedNote) {
  return axios
    .put(URL + changedNote.id, changedNote)
    .then(response => {
      const { data } = response
      return data
    })
}