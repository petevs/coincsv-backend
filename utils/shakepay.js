import { parseCSV, Transaction } from "./parseCSV.js"
import moment from 'moment'

export const proccessShakepay = async ( url ) => {

    const rawTransactions = await parseCSV(url)
    
    const transactions = rawTransactions.map( current => {

        if(current['Transaction Type'] === 'purchase/sale' && current['Credit Currency'] === 'BTC'){

            const transaction = new Transaction(
                moment.utc(current['Date']).format('MM/DD/YYYY HH:MM:SS'),
                current['Amount Credited'],
                'BTC',
                current['Amount Debited'],
                'CAD',
            )
    
            return {...transaction}
        }
    
        }
    
    )

    return transactions.filter( item => item !== undefined)

}