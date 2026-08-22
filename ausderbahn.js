export const ausderbahn = {
    state: "ausderbahn",
    chaos: 0,

    update(over) {
        this.chaos += over * 2;
        return {
            state: this.state,
            chaos: this.chaos,
            note: "System aus der Bahn – RUMumRUM nötig"
        };
    }
};
