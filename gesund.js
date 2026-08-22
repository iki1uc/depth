export const gesund = {
    state: "gesund",
    stability: 100,

    update() {
        this.stability += 1;
        return {
            state: this.state,
            stability: this.stability,
            note: "System stabil"
        };
    }
};
