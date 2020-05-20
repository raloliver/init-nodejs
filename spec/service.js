const { get } = require('axios')
const API_URI = `https://swapi.dev/api/people`

/**
 * when whant pagination, use those params: ?offset=0&limit=10
 * @param {*} name 
 */
async function getPerson(name) {
    const url = `${API_URI}/?search=${name}&format=json`
    const res = await get(url)
    // #TODO: understand how map handle with this (for each item from results, get only those two properties)
    // console.log(JSON.stringify(res.data))
    return res.data.results.map(mapPerson)
}

function mapPerson(person) {
    return {
        name: person.name,
        height: person.height
    }
}

module.exports = { getPerson }