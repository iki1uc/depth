export const wackelig = {
    state: "wackelig",
    instability: 0,

    update(diff) {
        this.instability += diff;
        return {
            state: this.state,
            instability: this.instability,
            note: "System wackelt"
        };
    }
};
