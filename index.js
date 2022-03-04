import 'dotenv/config'
import { processBullBitcoin } from './utils/bullBitcoin.js'
import { proccessBitBuy } from './utils/bitBuy.js'
import { proccessShakepay } from './utils/shakepay.js'

const bullBitcoin = await processBullBitcoin(process.env.BULL_BITCOIN)
const bitBuy = await proccessBitBuy(process.env.BIT_BUY)
const shakepay = await proccessShakepay(process.env.SHAKEPAY)


const getAggregates = ( transactions ) => {

    const initial = {
        amountInvested: 0,
        amountPurchased: 0,
        averageCost: function() {
            return this.amountInvested / this.amountPurchased
        }
    }
    
    
    const aggregates = transactions.reduce( (previous, current) => {
    
        previous.amountInvested += Number(current['Sent Quantity'])
        previous.amountPurchased += Number(current['Received Quantity'])
    
        return previous
    
    }, initial)
    
    return {
            ...aggregates,
            averageCost: aggregates.averageCost()
        }

}


console.log(getAggregates([...bitBuy, ...bullBitcoin]))