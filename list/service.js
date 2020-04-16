const axios = require('axios')
const API_URI = `https://pokeapi.co/api/v2/pokemon/`

async function getPoke(name) {
    const url = `${API_URI}/${name}/`
    const res = await axios.get(url)
    return res.data
}

getPoke('pikachu')
    .then(function (res) {
        console.log('pokemon', res)
    })
    .catch(function (err) {
        console.error('Error', err)
    })