// impulse.js – Zugehörigkeit, Impuls, Unnorm

export const ImpulseSystem = {

    beam: 0,     // Zugehörigkeits-Beam
    impuls: 0,   // Wunsch-Impuls
    unnorm: 0,   // Abweichung

    update(type) {

        if (type === "beam") this.beam += 1;
        if (type === "impuls+") this.impuls += 2;
        if (type === "impuls-") this.impuls -= 2;
        if (type === "unnorm") this.unnorm += 3;

        return {
            beam: this.beam,
            impuls: this.impuls,
            unnorm: this.unnorm,
            zustand:
                this.unnorm > 0 ? "ausderbahn" :
                this.impuls > 0 ? "gesund" :
                this.impuls < 0 ? "wackelig" :
                "neutral"
        };
    }
};
