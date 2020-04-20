export const PotteryRetail = (potObj) => {
    return `
    <section class="pottery" id="pottery--${potObj.id}">
        <h2 class="pottery__shape">${potObj.shape}</h2>
        <div class="pottery__properties">
            Item weighs ${potObj.weight} grams and is ${potObj.height} cm in height
        </div>
        <div class="pottery__price">
            Price is $${potObj.price}
        </div>
    </section>
    `
}
