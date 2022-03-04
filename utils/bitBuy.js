import { parseCSV, Transaction } from "./parseCSV.js"
import moment from 'moment'

export const proccessBitBuy = async ( url ) => {

    const rawTransactions = await parseCSV(url)
    
    const transactions = rawTransactions.map( current => {
    
            const transaction = new Transaction(
                moment.utc(current['Koinly Date']).format('MM/DD/YYYY HH:MM:SS'),
                current['Amount'],
                'BTC',
                (Number(current['Total']) * Number(current['Amount'])).toFixed(2),
                'CAD',
                current['Fee Amount'],
                current['Fee Currency']
            )

            return {...transaction}
        }
    
    )

    return transactions

}