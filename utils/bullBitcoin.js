import moment from "moment";
import { parseCSV, Transaction } from "./parseCSV.js";

const file = process.env.BULL_BITCOIN

export const processTransactions = async ( url) => {

    const rawTransactions = await parseCSV(file)
    
    const transactions = rawTransactions.map( current => {
    
        if( current['payment-method'] === 'E-Transfer'){
            return new Transaction(
                moment.utc(current['created-at']).format(),
                current['from-amount'],
                current['from-currency']
            )
        }
    
    
        if ( current['payment-method'] === 'Use your balance'){
            return new Transaction(
                moment.utc(current['created-at']).format(),
                current['to-amount'],
                current['to-currency'],
                current['from-amount'],
                current['from-currency']
            )
        }
    
    })


    return transactions
}