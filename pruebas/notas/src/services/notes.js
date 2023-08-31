import axios from 'axios'

const URL = 'https://sleepy-tundra-97805-3cced4d9040c.herokuapp.com/api/notes/'

export function getAll() {
  return axios.get(URL)
    .then(response => response.data)
}

export function create(newNote) {
  return axios
    .post(URL, newNote)
    .then(response => response.data)
}

export function update(changedNote) {
  return axios
    .put(URL + changedNote.id, changedNote)
    .then(response => response.data)
}
