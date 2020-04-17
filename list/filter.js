/**
 * get only this key from obj: destructuting
 */
const { getPoke } = require('./service')


/**
 * filter: filter an array with the same value basead on condition
 */
async function main() {
    try {
        const { results } = await getPoke('')
        const saur = results.filter((poke) => poke.name.toLowerCase().indexOf('saur') !== -1)

        const names = saur.map(poke => poke.name)
        console.log('names with saur', names)
    } catch (err) {
        console.log('Error ', err)
    }
}

main()

