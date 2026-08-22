export const Ueberproduktion = {
    spektrum: 0,

    update(input, capacity) {
        const over = input - capacity;
        this.spektrum = over > 0 ? over : 0;

        return {
            ueberproduktion: this.spektrum,
            aktiv: this.spektrum > 0,
            note: "Überproduktion-Spektrum aktualisiert"
        };
    }
};
