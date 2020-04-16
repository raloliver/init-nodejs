const service = require('./service')

Array.prototype.myMap = function (cb) {
  const newArr = []
  for (let i = 0; i < this.length; i++) {
    const res = cb(this[i], i)
    newArr.push(res)
  }
  return newArr
}

async function main() {
  try {
    const res = await service.getPoke('')
    const names = res.results.myMap((poke, i) => `[${i}] ${poke.name}`)
    console.log(names)
  } catch (err) {
    console.log('Error ', err)
  }
}

main()