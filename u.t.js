export const Teilung = {

    unter: 0,
    ueber: 0,
    tief: 0,

    update(type) {
        if (type === "unter") this.unter += 1;
        if (type === "ueber") this.ueber += 1;
        if (type === "tief") this.tief += 1;

        return {
            unterteilung: this.unter,
            ueberteilung: this.ueber,
            tiefenteilung: this.tief
        };
    }
};
