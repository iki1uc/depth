export const VectorRenderer = {

    draw(vec, api) {

        if (api === "OpenGL") {
            return GL_Vertex(vec);
        }

        if (api === "D3D") {
            return D3D_Vertex(vec);
        }

        if (api === "DirectX") {
            const mat = [
                [1,0,0,0],
                [0,1,0,0],
                [0,0,1,0],
                [0,0,0,1]
            ];
            return DX_VectorMultiply(vec, mat);
        }
    }
};
