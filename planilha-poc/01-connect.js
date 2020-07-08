const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require ('./credentials.json')

const doc = new GoogleSpreadsheet('1dYdS0ExehTKlV4k4PE6L7jKFQe1r-prVs7mN44rEuEs')

const run = async() => {
  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()
  console.log(doc.title)
}

run()