const { getPoke } = require('./service')

/**
 * reduce: reduzir um array num unico resultado
 */
async function main() {
    try {
        const { abilities } = await getPoke('pikachu')
        const slots = abilities.map(ability => ability.slot)

        const totalSlots = slots.reduce((prev, next) => {
                return prev + next
        })
        console.log('slots:', totalSlots)
    } catch (err) {
        console.log('Error ', err)
    }
}

main()