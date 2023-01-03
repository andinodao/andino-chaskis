import * as fs from 'fs'
import * as path from 'path'
import axios from 'axios'

export async function downloadImagesFromCsv(
  csvFileName: string
): Promise<void> {
  const filePath = path.resolve(csvFileName)
  const fileData = await fs.promises.readFile(filePath, 'utf8')
  const lines = fileData.split('\n')

  for (const line of lines) {
    const values = line.split(',')
    const url = values[0]
    const fileName = values[1]

    // Download the image at the URL and save it to the public/images folder
    const filePath = path.resolve(`public/images/${fileName}`)
    await downloadImage(url, filePath)
  }
}

async function downloadImage(url: string, filePath: string): Promise<void> {
  const response = await axios.get(url, { responseType: 'stream' })
  if (response.status !== 200) {
    throw new Error(`Failed to download image at ${url}`)
  }

  const fileStream = fs.createWriteStream(filePath)
  response.data.pipe(fileStream)
  await new Promise((resolve, reject) => {
    fileStream.on('finish', () => {
      fileStream.close(resolve)
    })
    fileStream.on('error', reject)
  })
}
