export const Dynamik = {
    energy: 0,
    update(hw) {
        switch(hw) {
            case "GPU": this.energy += 3; break;
            case "CPU": this.energy += 2; break;
            case "RAM": this.energy += 1; break;
        }
        return { hw, energy: this.energy };
    }
};
