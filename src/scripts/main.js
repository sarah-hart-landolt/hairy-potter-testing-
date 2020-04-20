import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./kiln.js"
import { PotteryList } from "./PotteryList.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"

// Imports go first

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mugShape", 1, 3)
let vase = makePottery("vase", 2, 3)
let bowl = makePottery("bowl", 3, 5)
let plate = makePottery("plate", 2, 2)
let ashtray= makePottery("ashtray", 2, 1)

// Fire each piece of pottery in the kiln
const mugFired= firePottery(mug, 2200)
const vaseFired = firePottery(vase, 2300)
const bowlFired = firePottery(bowl, 2100)
const plateFired = firePottery(plate, 2000)
const ashtrayFired = firePottery(ashtray, 2400)

toSellOrNotToSell(mugFired)
toSellOrNotToSell(vaseFired)
toSellOrNotToSell(bowlFired)
toSellOrNotToSell(plateFired)
toSellOrNotToSell(ashtrayFired)
// Invoke the component function that renders the HTML list
PotteryList()
