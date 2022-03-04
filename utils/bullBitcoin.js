import moment from "moment";
import { parseCSV, Transaction } from "./parseCSV.js";
import ObjectsToCSV from 'objects-to-csv'

const file = process.env.BULL_BITCOIN

export const processBullBitcoin = async ( url) => {

    const rawTransactions = await parseCSV(file)
    
    const transactions = rawTransactions.map( current => {
    
        if( current['payment-method'] === 'E-Transfer' || current['payment-method'] === 'Wire Transfer '){
            return
    
        }
    
        if ( current['payment-method'] === 'Use your balance'){
            const transaction = new Transaction(
                moment.utc(current['created-at']).format('MM/DD/YYYY HH:MM:SS'),
                current['to-amount'],
                current['to-currency'],
                current['from-amount'],
                current['from-currency']
            )

            return {...transaction}
        }
    
    })


    const filteredTransactions = transactions.filter( item => item !== undefined)

    return filteredTransactions

    // const csv = new ObjectsToCSV(filteredTransactions)

    // await csv.toDisk('./test.csv')

    // console.log( await csv.toString())

}