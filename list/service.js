const axios = require('axios')
const API_URI = `https://pokeapi.co/api/v2/`

/**
 * when whant pagination, use those params: ?offset=0&limit=10
 * @param {*} name 
 */
async function getPoke(name, type) {
    const url = type ? `${API_URI}/${type}/${name}` : `${API_URI}/pokemon/${name}`
    const res = await axios.get(url)
    return res.data
}

// getPoke('pikachu')
//     .then(function (res) {
//         console.log('pokemon', res)
//     })
//     .catch(function (err) {
//         console.error('Error', err)
//     })

module.exports = { getPoke }