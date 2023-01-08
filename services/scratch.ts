import 'dotenv/config'

const main = async () => {
  console.log('0x5A79dEB48abD5e842675e5604ab4Aebadacbb860')
  const wallet = '0x5A79dEB48abD5e842675e5604ab4Aebadacbb860'

  return wallet
}

main()
  .then(async res => {
    console.log(res)
    process.exit()
  })
  .catch(console.error)
