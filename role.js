MovesEnergy = {

    compute(R, O, ein, ihr, AR, ROW, u, W) {

        return {
            total: R + O + ein + ihr + AR + ROW + u + W,

            base: { R, O, ein, ihr },
            dir: { AR, ROW },
            env: { u },
            wave: { W }
        }
    }
}
