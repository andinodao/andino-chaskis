import 'dotenv/config'

const main = async () => {
  console.log('k')
}

main()
  .then(() => {
    console.log('finished')
    process.exit()
  })
  .catch(console.error)
