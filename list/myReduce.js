const { getPoke } = require('./service')

Array.prototype.myReduce = function (cb, init) {
    let final = typeof init !== undefined ? init : this[0]
    for (let i = 0; i < this.length; i++) {
        final = cb(final, this[i], this)
    }
    return final
}

async function main() {
    try {
        const { abilities } = await getPoke('pikachu')
        const slots = abilities.map(ability => ability.slot)

        const totalSlots = slots.myReduce((prev, next) => {
            return parseInt(prev + next)
        }, [])
        console.log('slots:', totalSlots)
    } catch (err) {
        console.log('Error ', err)
    }
}

main()