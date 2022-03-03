import 'dotenv/config'
import { processTransactions } from './utils/bullBitcoin.js'


const result = await processTransactions(process.env.BULL_BITCOIN)

console.log(result[result.length - 1])

// const initial = {
//     wallets: {},   
// }


// const aggregate = result.reduce( (previous, current) => {




//     if(!(current['Received Currency'] in previous && !current['Received Currency'])){
//         previous.wallets[current['Received Currency']] = 0
//     }

//     if(!(current?.['Sent Currency'] in previous) && !current?.['Sent Currency']){
//         previous.wallets[current['Sent Currency']] = 0
//     }    

//     return previous


// }, initial)


// console.log(aggregate)