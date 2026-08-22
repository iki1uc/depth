// Ueberbildung.js – Meta-Runtime für Time-Break-Vitality

export const Ueberbildung = {

    mode: "META",
    vitality: 0,

    update(flowState) {
        // flowState = ICE, HOT, HYBRID, UNLOGIKAL
        switch(flowState) {
            case "ICE": this.vitality += 1; break;
            case "HOT": this.vitality += 2; break;
            case "HYBRID": this.vitality += 3; break;
            case "UNLOGIKAL": this.vitality += 5; break;
        }

        return {
            mode: this.mode,
            vitality: this.vitality,
            flow: flowState,
            note: "Time-Break-Vitality aktualisiert"
        };
    }
};
