// bildung.js – Wunsch+/Wunsch- Bildungskraft

export const Bildung = {

    plus: 0,   // Wunsch+
    minus: 0,  // Wunsch-
    wert: 0,   // Bildungskraft

    update(type) {

        if (type === "Wunsch+") this.plus += 1;
        if (type === "Wunsch-") this.minus += 1;

        this.wert = this.plus - this.minus;

        return {
            WunschPlus: this.plus,
            WunschMinus: this.minus,
            Bildungskraft: this.wert,
            Zustand:
                this.wert > 0 ? "aufbauend" :
                this.wert < 0 ? "abbauend" :
                "neutral"
        };
    }
};
