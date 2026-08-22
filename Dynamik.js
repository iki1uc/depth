// Dynamik.js
export const Dynamik = {
    energy: 0,

    update(mode) {
        switch(mode) {
            case "ICE": this.energy += 1; break;
            case "HOT": this.energy += 3; break;
            case "HYBRID": this.energy += 4; break;
            case "UNLOGIKAL": this.energy += 7; break;
        }

        return {
            mode,
            energy: this.energy,
            note: "Dynamik aktualisiert"
        };
    }
};
