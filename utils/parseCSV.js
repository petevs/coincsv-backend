import Papa from 'papaparse'
import { getCSV } from './getCSV.js'


export const parseCSV = async ( url ) => {

    const data = await getCSV(url)

    const res = Papa.parse(data, {
        header: true
    })

    const transactions = res.data

    return transactions
}



export class Transaction {
    constructor(
        date, 
        receivedQuantity,
        receivedCurrency,
        sentQuantity,
        sentCurrency,
        feeAmount,
        feeCurrency,
        tag 
    ){
        this['Date'] = date
        this['Received Quantity'] = receivedQuantity || ''
        this['Received Currency'] = receivedCurrency || ''
        this['Sent Quantity'] = sentQuantity || ''
        this['Sent Currency'] = sentCurrency || ''
        this['Fee Amount'] = feeAmount || ''
        this['Fee Currency'] = feeCurrency || ''
        this['Tag'] = tag || ''
    }
}