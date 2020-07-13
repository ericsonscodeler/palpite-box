import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('1dYdS0ExehTKlV4k4PE6L7jKFQe1r-prVs7mN44rEuEs')

export default async(req,res) =>{

  try{
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A3:B3')

    const showPromotionCell = sheet.getCell(2, 0)
    const textCell = sheet.getCell(2,1)
    

    res.end(JSON.stringify({
      showCoupon: showPromotionCell.value === 'VERDADEIRO',
      message: textCell.value
    }))

  }catch(err){
    res.end(JSON.stringify({
      showCoupon: false,
      message: ''
    }))
  }


  
}