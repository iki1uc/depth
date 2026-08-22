export const Wertigkeit = {
    scale: {
        GPU: 3,   // Compute
        CPU: 2,   // Control
        RAM: 1    // Memory
    },
    eval(hw) {
        return { hw, value: this.scale[hw] };
    }
};
