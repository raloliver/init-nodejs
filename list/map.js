const service = require('./service')

async function main() {
  try {
    const res = await service.getPoke('')
    const names = []
    /**
     * forEach implementation
     */
    res.results.forEach(function (poke) {
      names.push(poke.name)
    });
    console.log(names)
  } catch (err) {
    console.log('Error ', err)
  }
}

main()