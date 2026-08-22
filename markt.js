export const markt = {
    price: 0,
    spread: 0,
    volume: 0,

    update(geld, brief, umsatz) {
        this.price = (geld + brief) / 2;
        this.spread = brief - geld;
        this.volume = umsatz;
        return { price: this.price, spread: this.spread, volume: this.volume };
    }
};
