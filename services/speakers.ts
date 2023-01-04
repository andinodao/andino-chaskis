import 'dotenv/config'

import * as fs from 'fs'
import * as path from 'path'
import * as csvParser from 'csv-parser'
import axios from 'axios'

async function parseCsv(csvFileName: string) {
  const dataSet = []
  const fileStream = fs.createReadStream(csvFileName)
  for await (const data of fileStream.pipe(csvParser.default())) {
    dataSet.push(data)
  }

  return dataSet
}

export async function downloadSpeakerData(csvFileName: string) {
  const filePath = path.resolve(csvFileName)
  const fileData = await parseCsv(filePath)
  console.log(fileData.length)

  for (const dataRow of fileData) {
    const [fileName, urlPart] = getImageInfo(dataRow['Foto del speaker'])
    console.log(dataRow['Foto del speaker'])
    if (!fileName || !urlPart) {
      continue
    }
    // Download the image at the URL and save it to the public/images folder
    const newFilePath = path.resolve(
      `public/profilepics/${fileName.replaceAll(' ', '')}`
    )
    await downloadImage(getImageUrl(urlPart.replaceAll(')', '')), newFilePath)
  }
}

async function downloadImage(url: string, filePath: string) {
  const response = await axios.get(url, { responseType: 'stream' })
  if (response.status !== 200) {
    throw new Error(`Failed to download image at ${url}`)
  }

  try {
    const fileStream = fs.createWriteStream(filePath, {
      flags: 'w'
    })
    response.data.pipe(fileStream)
    await new Promise((resolve, reject) => {
      fileStream.on('finish', () => {
        fileStream.close(resolve)
      })
      fileStream.on('error', reject)
    })
  } catch (e) {
    console.trace(e)
  }
}
function getImageUrl(input: string): string {
  // Use a regular expression to extract the URL from the input string
  const urlRegex = /https:\/\/[^\s]+/
  const match = input.match(urlRegex)

  // If a match was found, return the URL. Otherwise, return an empty string.
  return match ? match[0] : ''
}

export const mainSpeakerFunction = async () => {
  console.log('k')
  const csvLocation = 'speakers.csv'
  await downloadSpeakerData(csvLocation)
  console.log('k')
}

function getImageInfo(input: string) {
  // Use a regular expression to extract the name and URL from the input string
  const nameRegex = /^[^\s(]+/
  const urlRegex = /https:\/\/[^\s]+/
  const nameMatch = input.match(nameRegex)
  const urlMatch = input.match(urlRegex)

  // If a match was found for both the name and the URL, return them as an array. Otherwise, return an empty array.
  if (nameMatch && urlMatch) {
    return [nameMatch[0], urlMatch[0]]
  } else {
    return ['', '']
  }
}
