const service = require('./service')

/**
 * when we use promise, always use async function
 *
 */
async function main() {
    try {
        const res = await service.getPoke('')
        const names = []
        /**
         * for 
        for (let i = 0; i < res.results.length; i++) {
            const pokes = res.results[i]
            names.push(pokes.name)
        }
        */
        /**
         * for in  
         for (const i in res.results) {
             const pokes = res.results[i]
             names.push(pokes.name)
         }
         */
        for (const pokes of res.results) {
            names.push(pokes.name)
        }
        console.log('names', names)
    } catch (err) {
        console.log('Error ', err)
    }
}

main()
