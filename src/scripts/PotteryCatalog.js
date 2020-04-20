let PotteryToSell = []

export const toSellOrNotToSell  = (potteryObject) =>
{
      if (potteryObject.cracked === false) {
          if (potteryObject.weight >= 6) {
              potteryObject.price = 40
          } else {
              potteryObject.price = 20
          }
        PotteryToSell.push(potteryObject)
      }
}


export const usePottery = () => PotteryToSell.slice()