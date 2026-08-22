// pro.js – Maßstabisierung für Verbrauch/Nutzung/Kraft

export const Pro = {

    wert: 0,
    massstab: 3,

    update(v) {
        this.wert += v;

        if (this.wert <= 3)   this.massstab = 3;
        if (this.wert > 3 && this.wert <= 9)   this.massstab = 9;
        if (this.wert > 9 && this.wert <= 81)  this.massstab = 81;
        if (this.wert > 81 && this.wert <= 243) this.massstab = 243;

        return {
            wert: this.wert,
            massstab: this.massstab,
            teilung: this.massstab,
            zustand:
                this.massstab === 3   ? "klein" :
                this.massstab === 9   ? "wachsend" :
                this.massstab === 81  ? "komplex" :
                "extrem"
        };
    }
};
