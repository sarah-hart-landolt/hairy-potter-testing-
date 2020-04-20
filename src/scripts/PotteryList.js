import { usePottery } from "./PotteryCatalog.js"
import { PotteryRetail } from "./potteryHTML.js"

const contentTarget = document.querySelector(".potteryList")

const render = potteryToRender => {

    contentTarget.innerHTML = potteryToRender.map(
        (potteryObject) => {
            return PotteryRetail(potteryObject)
        }
    ).join("")
}

export const PotteryList = () => {
    const pottery = usePottery()
    render(pottery)
}