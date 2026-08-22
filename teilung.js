// teilung.js – 3/9/81/243 dynamisches Fraktal-System

export const Teilung = {

    level: 3,
    max: 243,

    update(value) {

        if (value > 3 && value <= 9) this.level = 9;
        if (value > 9 && value <= 81) this.level = 81;
        if (value > 81 && value <= 243) this.level = 243;

        return {
            teilung: this.level,
            zustand:
                this.level === 3 ? "Basis" :
                this.level === 9 ? "Überlast" :
                this.level === 81 ? "Komplex" :
                "Extrem",
            note: "Fraktale Teilung aktualisiert"
        };
    }
};
