import 'dotenv/config'

const main = async () => {
  console.log('cambios en vivo usando VS code y break points.')
  const wallet =
    'puedes importar cualqier cosa aka y correrolo en un solo click'

  return wallet
}

main()
  .then(async res => {
    console.log(res)
    process.exit()
  })
  .catch(console.error)
