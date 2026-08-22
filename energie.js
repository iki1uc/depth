// energie.js

export const Energie = {

    // Grundenergie eines Vektors
    magnitude(vec) {
        return Math.sqrt(
            vec.x * vec.x +
            vec.y * vec.y +
            vec.z * vec.z +
            vec.w * vec.w
        );
    },

    // Energie nach OpenGL-Renderpfad
    gl(vec) {
        return {
            api: "OpenGL",
            mag: this.magnitude(vec),
            bias: vec.z - vec.y,     // GL lower-left origin
            total: this.magnitude(vec) + (vec.z - vec.y)
        };
    },

    // Energie nach Direct3D-Pfad
    d3d(vec) {
        return {
            api: "D3D",
            mag: this.magnitude(vec),
            bias: vec.y - vec.z,     // D3D upper-left origin
            total: this.magnitude(vec) + (vec.y - vec.z)
        };
    },

    // Energie nach DirectX-Vektor-Matrix
    dx(vec, mat) {
        const out = mat.map(row =>
            row[0]*vec.x + row[1]*vec.y + row[2]*vec.z + row[3]*vec.w
        );

        const dxMag = Math.sqrt(
            out[0]*out[0] +
            out[1]*out[1] +
            out[2]*out[2] +
            out[3]*out[3]
        );

        return {
            api: "DirectX",
            out,
            mag: dxMag,
            total: dxMag
        };
    }
};
