const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require ('./credentials.json')

const doc = new GoogleSpreadsheet('1dYdS0ExehTKlV4k4PE6L7jKFQe1r-prVs7mN44rEuEs')

const run = async() => {
  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()

  const sheet = doc.sheetsByIndex[1]
  // Nome	Email	Whatsapp	Cupom	Promo

  await sheet.addRow({
    Nome: 'Ericson',
    Email: 'ericson.br@hotmail.com',
    Whatsapp: '999999',
    Cupom: 'teste10',
    Promo: 'teste'
  })
}

run()