const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require ('./credentials.json')

const doc = new GoogleSpreadsheet('1dYdS0ExehTKlV4k4PE6L7jKFQe1r-prVs7mN44rEuEs')

const run = async() => {
  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()
  console.log(doc.title)

  const sheet = doc.sheetsByIndex[2]
  await sheet.loadCells('A3:B3')

  console.log(sheet.title)

  const showPromotionCell = sheet.getCell(2, 0)
  console.log(showPromotionCell.value)

  const textCell = sheet.getCell(2,1)
  console.log(textCell.value)
}

run()