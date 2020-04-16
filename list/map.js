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

    /**
     * map implementation: you dont need an array const to push     * 
     * 
    */
    const names = res.results.map(poke => poke.name)
    console.log(names)
  } catch (err) {
    console.log('Error ', err)
  }
}

main()