export const Losleitung = {

    impuls: 0,
    achse: "unter",

    leiten(v) {
        this.impuls = v;

        if (v <= 3)  this.achse = "unter";
        if (v > 3 && v <= 9)  this.achse = "ueber";
        if (v > 9 && v <= 27) this.achse = "tief";
        if (v > 27 && v <= 81) this.achse = "y.x";
        if (v > 81 && v <= 162) this.achse = "x.y";
        if (v > 162 && v <= 243) this.achse = "q.t";
        if (v > 243) this.achse = "t.q";

        return {
            impuls: this.impuls,
            zielAchse: this.achse
        };
    }
};
