export const Verbrauch = {

    unter: 0,
    ueber: 0,
    tief: 0,

    update(verbrauch, bedarf, kapazitaet, teile = []) {

        this.unter = Math.max(0, bedarf - verbrauch);
        this.ueber = Math.max(0, verbrauch - kapazitaet);
        this.tief  = teile.reduce((a, b) => a + b, 0);

        return {
            unterverbrauch: this.unter,
            ueberverbrauch: this.ueber,
            tiefenverbrauch: this.tief
        };
    }
};
