export const Kraft = {

    A: 0,   // Arbeitskraft
    T: 0,   // Zeitkraft
    NB: 0,  // Neutral-Balance

    update(type) {
        if (type === "A") this.A += 1;
        if (type === "T") this.T += 1;

        // NB-Mann balanciert automatisch
        this.NB = (this.A + this.T) / 2;

        return {
            A_Kraft: this.A,
            T_Kraft: this.T,
            NB_Mann: this.NB
        };
    }
};
