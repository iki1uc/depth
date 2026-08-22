import { Energie } from "./energie.js";

export const VectorRenderer = {

    draw(vec, api) {

        if (api === "OpenGL") {
            const out = GL_Vertex(vec);
            return { out, energie: Energie.gl(vec) };
        }

        if (api === "D3D") {
            const out = D3D_Vertex(vec);
            return { out, energie: Energie.d3d(vec) };
        }

        if (api === "DirectX") {
            const mat = [
                [1,0,0,0],
                [0,1,0,0],
                [0,0,1,0],
                [0,0,0,1]
            ];
            const out = DX_VectorMultiply(vec, mat);
            return { out, energie: Energie.dx(vec, mat) };
        }
    }
};
