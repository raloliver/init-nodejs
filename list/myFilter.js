const { getPoke } = require('./service')

Array.prototype.myFilter = function (cb) {
    const newArr = []
    for (i in this) {
        const item = this[i]
        const res = cb(item, i, this)
        if (!res) continue
        newArr.push(item)
    }
    return newArr
}

async function main() {
    try {
        const { results } = await getPoke('')
        const saur = results.myFilter((poke, i, arr) => {
            console.log(`index: ${i}`, arr.length)
            return poke.name.toLowerCase().indexOf('saur') !== -1
        })

        const names = saur.map(poke => poke.name)
        console.log(names)
    } catch (err) {
        console.log('Error ', err)
    }
}

main()