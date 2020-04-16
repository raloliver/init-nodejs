const service = require('./service')

async function main() {
  try {
    const res = await service.getPoke('')

    /**
     * forEach implementation
     * 
    const names = []
    res.results.forEach(function (poke) {
      names.push(poke.name)
    });
    */
    const names = res.results.map(function (poke) {
      return poke.name
    })
    console.log(names)
  } catch (err) {
    console.log('Error ', err)
  }
}

main()