export const eco = {
    energy: 0,
    water: 0,
    climate: 0,

    update(type) {
        if (type === "renewable") this.energy += 2;
        if (type === "water") this.water += 1;
        if (type === "climate") this.climate += 3;

        return { energy: this.energy, water: this.water, climate: this.climate };
    }
};
